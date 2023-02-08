import type { MaybeComputedRef } from '@vueuse/core'
import type { AuthorParsedContent } from '../types'

export function useAsyncAuthorMeta(path: MaybeComputedRef<string | undefined>) {
  const _path = computed(() => {
    return typeof path === 'function' ? path() : isRef(path) ? path.value : path
  })

  return useAsyncData(
    `author-meta-${_path.value}`,
    () =>
      !_path.value
        ? Promise.resolve(null)
        : queryContent<AuthorParsedContent>()
            .only(['_path', 'avatar', 'title', 'subtitle'])
            .where({ layout: 'author', _path: _path.value })
            .findOne(),
    {
      watch: [_path],
    }
  )
}
