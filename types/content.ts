import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { ReadTimeResults } from 'reading-time'

export interface PageParsedContent extends ParsedContent {
  title?: string
  description?: string
  image?: string
  cover?: string

  publishDate?: string
  readingTime: ReadTimeResults

  layout: 'blog-category' | 'blog-post' | 'blog-author' | 'empty' | 'default'
}

export interface CategoryParsedContent extends PageParsedContent {
  featured?: boolean

  layout: 'blog-category'
}

export interface AuthorParsedContent extends PageParsedContent {
  contact: { name: string; link?: string}[]
  location?: string
  company?: string

  layout: 'blog-author'
}


export interface BlogParsedContent extends PageParsedContent {
  featured?: boolean
  author?: string
  category?: string
  tags?: string[]

  layout: 'blog-post'
}
