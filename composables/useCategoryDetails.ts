export function useCategoryDetails() {
  const app = useAppConfig()

  type Category = (typeof app.folio.categories)[0]
  const map = computed(() =>
    app.folio.categories.reduce((acc, category) => {
      acc[category.slug] = category
      return acc
    }, {} as Record<string, Category>)
  )

  function categoryExist(slug?: string): slug is keyof typeof map.value {
    const exists = Boolean(slug && slug in map.value)
    if (!exists) {
      console.warn(
        `Category with slug "${slug}" does not exist, check your app.config.ts`
      )
    }
    return exists
  }
  function getCategory(slug?: string): Category | undefined {
    if (!categoryExist(slug)) return
    return map.value[slug]
  }

  return { getCategory }
}
