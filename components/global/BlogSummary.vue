<script setup lang="ts">
import type { ArticlePage } from '../../types'

const { data: articles } = await useAsyncData(() =>
  queryContent<ArticlePage>()
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
    .where({ layout: 'article' })
    .sort({ publishDate: -1 })
    .limit(5)
    .find()
)

const latest = computed(() => articles.value?.[0])
const recents = computed(() => articles.value?.slice(1))
</script>

<template>
  <div class="app-section bg-white dark:bg-muted-1000 pb-0">
    <div
      class="app-container pb-20 border-b border-muted-200 dark:border-muted-800"
    >
      <div
        class="w-full p-0 ltablet:p-6 lg:p-10 rounded-3xl ltablet:bg-muted-100 ltablet:dark:bg-muted-700/10 lg:bg-muted-100 lg:dark:bg-muted-700/10"
      >
        <AppContainerHeader class="max-w-6xl mx-auto mb-6">
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

        <div v-if="!articles?.length">
          <AppSectionPlaceholder
            title="No articles found"
            subtitle="We couldn't find any posts to display. Start by writing your first blog post using your Nuxt studio account."
          >
            <ImagePlaceholderBlog class="w-full max-w-xs mx-auto mb-6" />
          </AppSectionPlaceholder>
        </div>
        <div
          v-else
          class="max-w-6xl mx-auto grid md:grid-cols-12 gap-6 ltablet:gap-4"
        >
          <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
            <ArticleSummaryLarge v-if="latest" :article="latest" />
          </div>
          <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
            <div class="w-full grid md:grid-cols-2 gap-4">
              <ArticleSummarySmall
                v-for="article in recents"
                :key="article._path"
                :article="article"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
