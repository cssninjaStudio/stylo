<script setup lang="ts">
import type { BlogParsedContent } from '../../types'

const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const { data: articles } = await useAsyncData(() =>
  queryContent<BlogParsedContent>()
    .only([
      '_path',
      'image',
      'cover',
      'author',
      'title',
      'description',
      'categories',
      'publishDate',
    ])
    .where({ layout: 'blog-post', featured: true })
    .sort({ publishDate: -1 })
    .limit(4)
    .find()
)
</script>

<template>
  <AppSection class="bg-muted-100 dark:bg-muted-900">
    <AppContainer>
      <AppContainerHeader
        class="py-10"
        :title="props.title"
        :subtitle="props.subtitle"
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

      <div class="relative grid ptablet:grid-cols-2 md:grid-cols-4 gap-4 -mt-2">
        <ArticleGrid
          v-for="article in articles"
          :key="article._path"
          :article="article"
        />
      </div>
    </AppContainer>
  </AppSection>
</template>