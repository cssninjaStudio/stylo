<script setup lang="ts">
import type { BlogParsedContent } from '../../types'

const props = defineProps<{
  title?: string
  subtitle?: string
  path?: string
}>()

const route = useRoute()
const path = computed(() => props.path ?? route.path.substring(1))

const { data: articles } = await useAsyncData(() =>
  queryContent<BlogParsedContent>()
    .only(['_path', 'image', 'cover', 'author', 'title', 'description', 'categories', 'publishDate'])
    .where({ layout: 'blog-post', _file: { $contains: path.value } })
    .sort({ publishDate: -1 })
    .find()
)
</script>

<template>
  <AppSection class="bg-muted-100 dark:bg-muted-900">
    <AppContainer>
      <AppContainerHeader class="pt-10 pb-10" :title="props.title" :subtitle="props.subtitle">
        <template #title><slot name="title"></slot></template>
        <template #subtitle><slot name="subtitle"></slot></template>
        <template #links><slot name="links"></slot></template>
      </AppContainerHeader>

      <div class="grid md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 ltablet:gap-4 gap-6 mb-20">
        <ArticleCard v-for="article in articles" :article="article" />
      </div>
    </AppContainer>
  </AppSection>
</template>