import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { ReadTimeResults } from 'reading-time'

export type StyloPageLayout =
  | 'category'
  | 'article'
  | 'author'
  | 'tag'
  | 'list-categories'
  | 'list-articles'
  | 'list-authors'
  | 'list-tags'
  | 'empty'
  | 'default'

export type StyloImage = {
  src: string
  srcDark?: string
  alt?: string
  width?: number
  height?: number
}

export type StyloLink = {
  href: string
  rel?: string
  target?: string
  title?: string
}
export type StyloLinkWithText = StyloLink & { text: string }
export type StyloLinkWithIcon = StyloLink & { icon: string }
export type StyloLinkWithIconAndIcon = StyloLink & {
  text: string
  icon?: string
}

export interface StyloBasePage extends ParsedContent {
  layout: StyloPageLayout

  title?: string
  description?: string

  readingTime: ReadTimeResults
}

export interface DefaultPage extends StyloBasePage {
  layout: 'default'

  toc?: boolean
}

export interface CategoryPage extends StyloBasePage {
  layout: 'category'

  featured?: boolean
  cover?: StyloImage
}
export interface TagPage extends StyloBasePage {
  layout: 'tag'

  short?: string
  icon?: string
  links?: StyloLinkWithIconAndIcon[]
}

export interface AuthorPage extends StyloBasePage {
  layout: 'author'

  featured?: boolean
  subtitle?: string
  location?: string
  company?: string

  avatar?: StyloImage
  social?: StyloLinkWithIcon[]
}

export interface ArticlePage extends StyloBasePage {
  layout: 'article'

  featured?: boolean
  author?: string
  category?: string
  tags?: string[]
  cover?: StyloImage

  publishDate?: string

  toc?: boolean
}

export interface ListArticlesPage extends StyloBasePage {
  layout: 'list-articles'
  mode?: 'card' | 'grid' | 'wide'

  links?: StyloLinkWithIconAndIcon[]
}

export interface ListAuthorsPage extends StyloBasePage {
  layout: 'list-authors'
  mode?: 'card' | 'grid'

  links?: StyloLinkWithIconAndIcon[]
}
export interface ListCategoriesPage extends StyloBasePage {
  layout: 'list-categories'
  mode?: 'card' | 'grid' | 'wide'

  links?: StyloLinkWithIconAndIcon[]
}

export interface ListTagsPage extends StyloBasePage {
  layout: 'list-tags'
  mode?: 'card' | 'button'

  links?: StyloLinkWithIconAndIcon[]
}
