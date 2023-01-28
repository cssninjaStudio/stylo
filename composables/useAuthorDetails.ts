export function useAuthorDetails() {
  const app = useAppConfig()

  type Author = typeof app.folio.authors[0]
  const map = computed(() => app.folio.authors.reduce((acc, author) => {
    acc[author.slug] = author
    return acc
  }, {} as Record<string, Author>))

  function authorExist(slug?: string): slug is keyof typeof map.value {
    const exists = Boolean(slug && slug in map.value)
    if (!exists) {
      console.warn(`Author with slug "${slug}" does not exist, check your app.config.ts`)
    }
    return exists
  }

  function getAuthor(slug?: string): Author | undefined {
    if (!authorExist(slug)) return
    return map.value[slug]
  }

  return { getAuthor }
}