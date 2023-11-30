import type { TagPage } from '../types'

export function useAsyncTagsMeta(
  paths: MaybeRefOrGetter<string[] | undefined>
) {
  const _paths = toRef(paths)

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
