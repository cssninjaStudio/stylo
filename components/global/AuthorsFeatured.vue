<script setup lang="ts">
import type { BlogParsedContent } from '../../types'

const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const { data: articles } = await useAsyncData(() =>
  queryContent<BlogParsedContent>()
    .only(['author'])
    .where({ layout: 'blog-post', featured: true })
    .find()
)
const authors = computed(() => {
  const authors = new Set<string>()
  articles.value?.forEach((article) => {
    if (article.author) {
      authors.add(article.author)
    }
  })
  return Array.from(authors).slice(0, 5)
})

const app = useAppConfig()
</script>

<template>
  <AppSection class="bg-muted-100 dark:bg-muted-900">
    <AppContainer>
      <AppContainerHeader class="pt-10 pb-10" :title="props.title" :subtitle="props.subtitle">
        <template #title><slot name="title"></slot></template>
        <template #subtitle><slot name="subtitle"></slot></template>
        <template #links><slot name="links"></slot></template>
      </AppContainerHeader>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
        <AuthorGrid v-for="author in authors" :author="author" />
      </div>
    </AppContainer>
  </AppSection>
</template>