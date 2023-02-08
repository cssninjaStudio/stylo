import type { MaybeComputedRef } from '@vueuse/core'
import type { CategoryPage } from '../types'

export function useAsyncCategoryMeta(
  path: MaybeComputedRef<string | undefined>
) {
  const _path = computed(() => {
    return typeof path === 'function' ? path() : isRef(path) ? path.value : path
  })

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
