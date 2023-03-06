

import { prefixStorage } from 'unstorage'
import Consola from 'consola'

// @ts-ignore
import Document from "flexsearch/dist/module/document";
// @ts-ignore
import charset from "flexsearch/dist/module/lang/latin/advanced";
// @ts-ignore
import lang from "flexsearch/dist/module/lang/en";

import { toString } from 'mdast-util-to-string'

const cacheStorage = prefixStorage(useStorage(), 'flexsearch:cache')
const logger = Consola.create({
  defaults: {
    tag: 'flexsearch',
  }
})

// (temporary static) index config
const INDEX_CONFIG = {
  charset: charset,
  lang: lang,
  tokenize: "strict",
  context: true,
  cache: true,
  store: true,
  document: {
    id: "_id",
    index: ["title", "_text"],
    store: ["_path", "title", 'description'],
  }
}

// 
const FIELD_BOOST: Record<string, number> = {
  title: 2,
  _text: 1,
}

export default defineNitroPlugin(async (nitroApp) => {

  // add search api endpoint
  nitroApp.router.add('/api/flexsearch', defineEventHandler(async (event) => {
    const query = getQuery(event).query || ''

    
    const searchIndex = await getSearchIndex()

    // fulltext search
    const indexes = await searchIndex.searchAsync(query, {
      limit: 15,
      enrich: true,
    })

    // merge scores
    const results: { id: string, doc: any, _score: number }[] = []
    for (const index of indexes) {
      const { field, result } = index as { field: string, result: any[] }
      const boost = FIELD_BOOST[field] || 1

      for (const idx in result) {
        const result = index.result[idx]
        const _score = boost - (+idx * boost / 10)
        const prev = results.find((r) => r.id === result.id)
        if (prev) {
          prev._score += _score
          continue
        }
        results.push({
          id: result.id,
          doc: result.doc,
          _score,
        })
      }
    }

    return results
  }))

  // index pages after content change
  nitroApp.hooks.hook('content:file:afterParse', async (file) => {
    if (!file._id.endsWith('.md')) {
      return
    }
    if (file._empty || file._partial || file._draft) {
      return
    }

    const searchIndex = await getSearchIndex()

    // update index
    const _text = toString(file.body)
    console.log(`🔎 Indexing "${file._path}"`)
    await searchIndex.addAsync({
      ...file,
      _text
    })

    // debounce save index
    if (_saveIndexTimeout) {
      clearTimeout(_saveIndexTimeout)
    }
    _saveIndexTimeout = setTimeout(saveSearchIndex, 1000)
  })
})

let _searchIndex: any 
let _searchIndexPromise: any 
let _saveIndexTimeout: any
async function getSearchIndex() {
  if (_searchIndex) {
    return _searchIndex
  }
  if (_searchIndexPromise) {
    return _searchIndexPromise
  }

  _searchIndexPromise = new Promise(async (resolve) => {
    const searchIndex = new Document(INDEX_CONFIG);

    // restore index 
    const keys = await cacheStorage.getKeys()
    for (const key of keys) {
      if (key === '_store') {
        console.log(`🔎 Restoring store`)
        searchIndex.store = await cacheStorage.getItem(key)
      }
      console.log(`🔎 Restoring ${key}`)
      searchIndex.import(key, await cacheStorage.getItem(key))
    }
  
    _searchIndex = searchIndex
  
    resolve(searchIndex)
  })

  return _searchIndexPromise
}

async function saveSearchIndex() {
  const searchIndex = await getSearchIndex()
  await searchIndex.export((key: string, data: any) => { 
    console.log(`🔎 Saving ${key}`)
    return cacheStorage.setItem(key, data)
  });
  console.log(`🔎 Saving store`)
  await cacheStorage.setItem('_store', searchIndex.store)
}