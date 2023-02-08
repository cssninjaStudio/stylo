<script setup lang="ts">
import type { Ref } from 'vue'
import type { StyloBasePage, ArticlePage, AuthorPage } from './types'

const { page }: { page: Ref<StyloBasePage | ArticlePage | AuthorPage> } =
  useContent()
if (page.value) {
  defineOgImageStatic({
    title: page.value.title,
    description: page.value.description,
    cover: page.value.avatar ?? page.value.cover,
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
