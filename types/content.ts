import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { ReadTimeResults } from 'reading-time'

export interface PageParsedContent extends ParsedContent {
  title?: string
  description?: string
  image?: string
  cover?: string

  publishDate?: string
  readingTime: ReadTimeResults

  layout: string
}

export interface BlogParsedContent extends PageParsedContent {
  featured?: boolean
  author?: string
  categories?: string[]
  tags?: string[]

  layout: 'blog-post'
}
