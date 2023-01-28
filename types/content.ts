import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { ReadTimeResults } from 'reading-time'

export interface BlogParsedContent extends ParsedContent {
  title: string
  description?: string
  image?: string

  cover: string
  extra?: string[]

  draft?: boolean
  publishDate?: string
  readingTime: ReadTimeResults

  featured?: boolean
  author?: string
  categories?: string[]
  tags?: string[]
}

export interface PageParsedContent extends ParsedContent {
  title: string
  description: string
  image: string

  cover: string

  draft: boolean
  publishDate: Date
  readingTime: ReadTimeResults
}
