import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { ReadTimeResults } from 'reading-time'

export interface PageParsedContent extends ParsedContent {
  title?: string
  description?: string
  ogImage?: string

  publishDate?: string
  readingTime: ReadTimeResults

  layout: 'category' | 'article' | 'author' | 'empty' | 'default'
}

export interface DefaultPageParsedContent extends ParsedContent {
  toc?: boolean
  layout: 'default'
}

export interface CategoryParsedContent extends PageParsedContent {
  featured?: boolean

  layout: 'category'
}

export interface AuthorParsedContent extends PageParsedContent {
  featured?: boolean
  contact: { name: string; link?: string }[]
  location?: string
  company?: string

  layout: 'author'
}

export interface BlogParsedContent extends PageParsedContent {
  featured?: boolean
  author?: string
  category?: string
  tags?: string[]
  cover?: {
    src: string
    srcDark?: string
    alt?: string
  }

  toc?: boolean
  layout: 'article'
}
