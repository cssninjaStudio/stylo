import type { CategoryPage } from '../types'

export function useAsyncCategoryMeta(
  path: MaybeRefOrGetter<string | undefined>
) {
  const _path = toRef(path)

  return useAsyncData(
    `category-meta-${_path.value}`,
    () =>
      !_path.value
        ? Promise.resolve(null)
        : queryContent<CategoryPage>()
            .only(['_path', 'color', 'title'])
            .where({ layout: 'category', _path: _path.value })
            .findOne(),
    {
      watch: [_path],
    }
  )
}
