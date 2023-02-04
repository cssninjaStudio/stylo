<script setup lang="ts">
import type { BlogParsedContent } from '../../types'

const { formatDate } = useDateFormatter()

const { data: articles } = await useAsyncData(() =>
  queryContent<BlogParsedContent>()
    .where({ layout: 'blog-post', featured: true })
    .sort({ publishDate: -1 })
    .limit(3)
    .find()
)
</script>

<template>
  <AppSection class="bg-white dark:bg-muted-900 pb-0">
    <AppContainer>
      <!-- Placeholder -->
      <div v-if="articles?.length === 0" class="pt-10">
        <SectionPlaceholder
          title="No articles found"
          subtitle="We couldn't find any posts to display. Start by writing your first blog post using your Nuxt studio account."
        >
          <img
            class="w-full max-w-xs mx-auto mb-6"
            src="/img/illustrations/placeholder/placeholder-1.svg"
            alt="Write some articles"
          />
        </SectionPlaceholder>
      </div>
      <!-- Articles list -->
      <div
        v-else
        class="relative grid ptablet:grid-cols-2 md:grid-cols-3 gap-2 pt-4"
      >
        <div
          v-for="article of articles"
          :key="article._id"
          class="relative overflow-hidden last:ptablet:hidden"
        >
          <div class="relative">
            <img
              v-if="article.image"
              :src="article.image"
              class="block w-full h-[420px] object-cover"
            />
          </div>
          <div
            class="absolute bottom-0 left-0 w-full h-2/3 z-10 bg-gradient-to-t from-muted-1000"
          />
          <div
            class="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end"
          >
            <div class="p-6">
              <div class="flex items-center gap-2 mb-1 mt-4 text-muted-100">
                <Icon name="ph:calendar-blank-duotone" class="w-4 h-4" />
                <p class="font-sans text-xs">
                  {{ formatDate(article?.publishDate) }}
                </p>
              </div>
              <h3 class="font-sans font-light text-2xl ptablet:text-xl mb-2">
                <NuxtLink
                  :to="article._path"
                  class="text-white hover:text-primary-300 transition-colors duration-300"
                >
                  {{ article?.title }}
                </NuxtLink>
              </h3>
              <div class="flex items-center justify-between">
                <div>
                  <ArticleAuthorBadge v-if="article?.author" :path="article?.author" />
                </div>
                <div class="font-sans text-sm text-muted-100">
                  <span class="pr-2">—</span>
                  <span>{{ article?.readingTime?.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>
