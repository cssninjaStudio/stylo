export function useAuthorDetails() {
  const app = useAppConfig()
  function authorExist(slug?: string): slug is keyof typeof app.folio.authors {
    const exists = Boolean(slug && slug in app.folio.authors)
    if (!exists) {
      console.warn(`Author with slug "${slug}" does not exist, check your app.config.ts`)
    }
    return exists
  }

  function getAuthor(slug?: string) {
    if (!authorExist(slug)) return
    return app.folio.authors[slug]
  }

  return { getAuthor }
}