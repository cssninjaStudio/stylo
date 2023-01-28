export function useCategoryDetails() {
  const app = useAppConfig()
  function categoryExist(slug?: string): slug is keyof typeof app.folio.categories {
    const exists = Boolean(slug && slug in app.folio.categories)
    if (!exists) {
      console.warn(`Category with slug "${slug}" does not exist, check your app.config.ts`)
    }
    return exists
  }
  function getCategory(slug?: string) {
    if (!categoryExist(slug)) return
    return app.folio.categories[slug]
  }

  return { getCategory }
}