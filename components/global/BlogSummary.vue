<script setup lang="ts">
import type { BlogParsedContent } from '../../types'

const props = defineProps<{
  title?: string
  subtitle?: string
}>()


const { data: articles } = await useAsyncData(() =>
  queryContent<BlogParsedContent>()
    .only(['_path', 'image', 'cover', 'author', 'title', 'description', 'categories', 'publishDate'])
    .where({ layout: 'blog-post' })
    .sort({ publishDate: -1 })
    .limit(5)
    .find()
)

const latest = computed(() => articles.value?.[0])
const otherPosts = computed(() => articles.value?.slice(1))
</script>

<template>
  <AppSection class="bg-white dark:bg-muted-900">
    <AppContainer>
      <div class="w-full p-0 ltablet:p-6 lg:p-10 rounded-3xl ltablet:bg-muted-100 ltablet:dark:bg-muted-700/10 lg:bg-muted-100 lg:dark:bg-muted-700/10">
        <AppContainerHeader class="max-w-6xl mx-auto mb-6" :title="props.title" :subtitle="props.subtitle">
          <template #title><slot name="title"></slot></template>
          <template #subtitle><slot name="subtitle"></slot></template>
          <template #links><slot name="links"></slot></template>
        </AppContainerHeader>

        <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-6 ltablet:gap-4">
          <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
            <ArticleCardSummaryLarge v-if="latest" :article="latest" />
          </div>
          <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
            <div class="w-full grid md:grid-cols-2 gap-4">
              <ArticleCardSummarySmall v-for="post in otherPosts" :article="post" />
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </AppSection>

</template>