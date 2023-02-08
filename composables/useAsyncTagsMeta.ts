import type { MaybeComputedRef } from '@vueuse/core'
import type { TagPage } from '../types'

export function useAsyncTagsMeta(
  paths: MaybeComputedRef<string[] | undefined>
) {
  const _paths = computed(() => {
    return typeof paths === 'function'
      ? paths()
      : isRef(paths)
      ? paths.value
      : paths
  })

  return useAsyncData(
    `tags-meta-${_paths.value?.join('-')}`,
    () =>
      !_paths.value?.length
        ? Promise.resolve([])
        : queryContent<TagPage>()
            .only(['_path', 'short', 'icon'])
            .where({ layout: 'tag', _path: { $in: _paths.value } })
            .find(),
    {
      watch: [_paths],
    }
  )
}
