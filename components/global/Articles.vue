<script setup lang="ts">
import type { BlogParsedContent } from '../../types'

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    filters?: Record<string, any>
    sort?: Record<string, any>
    skip?: number
    limit?: number
  }>(),
  {
    title: undefined,
    subtitle: undefined,
    skip: 0,
    limit: 4,
    filters: () => ({}),
    sort: () => ({ publishDate: -1 }),
  }
)

const { data: articles } = await useAsyncData(() =>
  queryContent<BlogParsedContent>()
    .only([
      '_path',
      'image',
      'cover',
      'author',
      'title',
      'description',
      'category',
      'publishDate',
    ])
    .where({ layout: 'blog-post', ...props.filters })
    .sort(props.sort)
    .limit(props.limit)
    .skip(props.skip)
    .find()
)
</script>

<template>
  <AppSection class="bg-muted-100 dark:bg-muted-900">
    <AppContainer>
      <AppContainerHeader
        :title="props.title"
        :subtitle="props.subtitle"
        class="py-10"
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

      <div
        class="grid md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 ltablet:gap-4 gap-6 mb-20"
      >
        <ArticleCard
          v-for="article in articles"
          :key="article._path"
          :article="article"
        />
      </div>
    </AppContainer>
  </AppSection>
</template>