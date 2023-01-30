<script setup lang="ts">
import type { BlogParsedContent } from '../../types'

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    mode?: 'button' | 'card'
  }>(),
  {
    title: undefined,
    subtitle: undefined,
    mode: 'card',
  }
)

const icons = [
  'ph:square-duotone',
  'ph:diamond-duotone',
  'ph:triangle-duotone',
  'ph:circle-duotone',
  'ph:rectangle-duotone',
  'ph:octagon-duotone',
  'ph:shield-duotone',
  'ph:hexagon-duotone',
]

const { data: articles } = await useAsyncData(() =>
  queryContent<BlogParsedContent>()
    .only(['tags'])
    .where({ layout: 'blog-post' })
    .find()
)
const tags = computed(() => {
  const map = new Map<string, number>()

  for (const article of articles.value ?? []) {
    for (const tag of article.tags ?? []) {
      map.set(tag, (map.get(tag) ?? 0) + 1)
    }
  }
  return Array.from(map.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
})
</script>


<template>
  <AppSection class="bg-white dark:bg-muted-900 pb-0">
    <AppContainer class="pb-20 border-b border-muted-200 dark:border-muted-800">
      <AppContainerHeader
        :title="props.title"
        :subtitle="props.subtitle"
        class="pt-20 mb-10"
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

      <div v-if="props.mode === 'button'" class="flex flex-wrap gap-3">
        <TagButtonLink
          v-for="(tag, i) of tags"
          :key="tag.tag"
          :tag="tag.tag"
          :count="tag.count"
          :icon="icons[i % icons.length]"
        />
      </div>
      <div
        v-else
        class="grid sm:grid-cols-3 ltablet:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <TagCardIconLink
          v-for="(tag, i) of tags"
          :key="tag.tag"
          :tag="tag.tag"
          :count="tag.count"
          :icon="icons[i % icons.length]"
        />
      </div>
    </AppContainer>
  </AppSection>
</template>