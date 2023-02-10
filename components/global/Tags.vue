<script setup lang="ts">
import { hash } from 'ohash'
import type { TagPage } from '../../types'

const props = withDefaults(
  defineProps<{
    filters?: Record<string, any>
    sort?: Record<string, any>
    skip?: number
    limit?: number
    narrow?: boolean
    muted?: boolean
    fullscreen?: boolean
    mode?: 'button' | 'card'
  }>(),
  {
    skip: 0,
    limit: 30,
    mode: 'card',
    filters: () => ({}),
    sort: () => ({ short: 1 }),
  }
)

// const icons = [
//   'ph:square-duotone',
//   'ph:diamond-duotone',
//   'ph:triangle-duotone',
//   'ph:circle-duotone',
//   'ph:rectangle-duotone',
//   'ph:octagon-duotone',
//   'ph:shield-duotone',
//   'ph:hexagon-duotone',
// ]

// const { data: articles } = await useAsyncData(() =>
//   queryContent<ArticlePage>()
//     .only(['tags'])
//     .where({ layout: 'article' })
//     .find()
// )
// const tags = computed(() => {
//   const map = new Map<string, number>()

//   for (const article of articles.value ?? []) {
//     for (const tag of article.tags ?? []) {
//       map.set(tag, (map.get(tag) ?? 0) + 1)
//     }
//   }
//   return Array.from(map.entries())
//     .map(([tag, count]) => ({ tag, count }))
//     .sort((a, b) => b.count - a.count)
// })

const route = useRoute()
const requestKey = computed(() =>
  hash({ ...props, layout: 'category', path: route.path })
)

const { data: tags } = await useAsyncData(
  requestKey.value,
  () =>
    queryContent<TagPage>()
      .only(['_path', 'icon', 'short'])
      .where({ layout: 'tag', ...props.filters })
      .sort(props.sort)
      .limit(props.limit)
      .skip(props.skip)
      .find(),
  {
    watch: [
      () => props.filters,
      () => props.sort,
      () => props.skip,
      () => props.limit,
    ],
  }
)
</script>

<template>
  <AppSection
    class="pb-0"
    :class="[
      props.muted
        ? 'bg-muted-100 dark:bg-muted-1000'
        : 'bg-white dark:bg-muted-900',
      props.fullscreen ? 'min-h-screen' : '',
    ]"
  >
    <AppContainer class="pb-20 border-b border-muted-200 dark:border-muted-800">
      <AppContainerHeader
        v-if="'title' in $slots || 'subtitle' in $slots || 'links' in $slots"
        class="mb-10"
        :class="props.narrow ? '' : 'pt-20'"
      >
        <template #title>
          <ContentSlot :use="$slots.title" unwrap="p" />
        </template>
        <template #subtitle>
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </template>
        <template #links>
          <ContentSlot :use="$slots.links" unwrap="p" />
        </template>
      </AppContainerHeader>

      <div v-if="!tags?.length">
        <AppSectionPlaceholder
          title="No tags to show"
          subtitle="We couldn't find any tags to show. Start by writing your first blog posts and tag them."
        >
          <ImagePlaceholderTags class="w-full max-w-md mx-auto mb-6" />
        </AppSectionPlaceholder>
      </div>
      <template v-else>
        <div v-if="props.mode === 'button'" class="flex flex-wrap gap-3">
          <TagLinkButton v-for="tag in tags" :key="tag._path" :tag="tag" />
        </div>
        <div
          v-else
          class="grid sm:grid-cols-3 ltablet:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <TagLinkCard v-for="tag in tags" :key="tag._path" :tag="tag" />
        </div>
      </template>
    </AppContainer>
  </AppSection>
</template>
