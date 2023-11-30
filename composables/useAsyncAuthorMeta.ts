import type { AuthorPage } from '../types'

export function useAsyncAuthorMeta(path: MaybeRefOrGetter<string | undefined>) {
  const _path = toRef(path)

  return useAsyncData(
    `author-meta-${_path.value}`,
    () =>
      !_path.value
        ? Promise.resolve(null)
        : queryContent<AuthorPage>()
            .only(['_path', 'avatar', 'title', 'subtitle'])
            .where({ layout: 'author', _path: _path.value })
            .findOne(),
    {
      watch: [_path],
    }
  )
}
