import { prefixStorage } from 'unstorage'

// @ts-ignore
import Document from "flexsearch/dist/module/document";
// @ts-ignore
import charset from "flexsearch/dist/module/lang/latin/advanced";
// @ts-ignore
import lang from "flexsearch/dist/module/lang/en";

import { toString } from 'mdast-util-to-string'

const cacheStorage = prefixStorage(useStorage(), 'localsearch:cache')

let _searchIndex: any 
let _saveIndexTimeout: any
async function getSearchIndex() {
  if (_searchIndex) {
    return _searchIndex
  }

  const searchIndex = new Document({
    charset: charset,
    lang: lang,
    preset: 'score',
    context: true,
    tokenize: "forward",
    cache: 100,
    store: true,
    document: {
      id: "_path",
      index: ["title", "_text"],
      store: ["_path", "title", 'description'],
    }
  });

  // restore index 
  const keys = await cacheStorage.getKeys()
  for (const key of keys) {
    if (key === '_store') {
      searchIndex.store = await cacheStorage.getItem(key)
    }
    searchIndex.import(key, await cacheStorage.getItem(key))
  }

  _searchIndex = searchIndex

  return searchIndex
}


async function saveSearchIndex() {
  const searchIndex = await getSearchIndex()
  await searchIndex.export((key: string, data: any) => { 
    return cacheStorage.setItem(key, data)
  });
  await cacheStorage.setItem('_store', searchIndex.store)
}

export default defineNitroPlugin((nitroApp) => {
  // add search api endpoint
  nitroApp.router.add('/api/localsearch', defineEventHandler(async (event) => {
    const query = getQuery(event).query || ''

    // restore index
    const searchIndex = await getSearchIndex()
    
    // fuzzy search
    const results = await searchIndex.searchAsync(query, {
      limit: 15,
      enrich: true,
    })

    // @todo: flatten indexes results

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

    // restore index 
    const searchIndex = await getSearchIndex()

    // update index
    const _text = toString(file.body)
    if (searchIndex.contain(file._path)) {
      await searchIndex.updateAsync(file._path, {
        ...file,
        _text
      })
    } else {
      await searchIndex.addAsync(file._path, {
        ...file,
        _text
      })
    }

    // debounce save index
    if (_saveIndexTimeout) {
      clearTimeout(_saveIndexTimeout)
    }
    _saveIndexTimeout = setTimeout(saveSearchIndex, 100)
  })
})
