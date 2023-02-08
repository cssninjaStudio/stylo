<script setup lang="ts">
import type { Ref } from 'vue'
import type { PageParsedContent, BlogParsedContent } from './types'

const { page }: { page: Ref<PageParsedContent | BlogParsedContent> } =
  useContent()
if (page.value) {
  defineOgImageStatic({
    title: page.value.title,
    description: page.value.description,
    cover: page.value.ogImage ?? page.value.cover,
    author: page.value.author,
    publishDate: page.value.publishDate,

    component: page.value.layout === 'article' ? 'OgPostImage' : 'OgPageImage',
  })
}
</script>

<template>
  <AppLayout>
    <SeoKit />
    <NuxtPage />
  </AppLayout>
</template>
