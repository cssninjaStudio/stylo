<script setup lang="ts">
import type { AuthorParsedContent, BlogParsedContent } from '../types'

const props = defineProps<{
  article: Partial<BlogParsedContent>
}>()

const { formatDate } = useDateFormatter()

const { data: author } = await useAsyncAuthorMeta(() => props.article.author)
</script>

<template>
  <AppCard class="p-6 rounded-xl">
    <div class="relative">
      <NuxtLink
        v-if="props.article.cover"
        :to="props.article._path"
        class="block"
      >
        <span class="sr-only">{{ props.article.title }}</span>
        <img
          :src="props.article.cover.src"
          :alt="props.article.cover.alt"
          class="block dark:hidden rounded-lg w-full h-64 md:h-80 object-cover"
        />
        <img
          :src="props.article.cover.srcDark || props.article.cover.src"
          :alt="props.article.cover.alt"
          class="hidden dark:block rounded-lg w-full h-64 md:h-80 object-cover"
        />
      </NuxtLink>
      <div v-if="props.article.category" class="absolute top-4 right-4 z-30">
        <ArticleBadgeCategory :path="props.article.category" />
      </div>
    </div>
    <div
      class="flex items-center gap-2 mb-2 mt-4 text-muted-500 dark:text-muted-400"
    >
      <Icon name="ph:calendar-blank-duotone" class="w-4 h-4" />
      <p class="font-sans text-sm">
        {{ formatDate(props.article.publishDate) }}
      </p>
    </div>
    <NuxtLink :to="props.article._path">
      <h2
        class="font-sans font-medium text-xl text-muted-700 dark:text-white mb-2"
      >
        {{ props.article.title }}
      </h2>
    </NuxtLink>
    <div
      class="line-clamp-3 font-sans text-sm text-muted-500 dark:text-muted-400 mb-4"
    >
      {{ props.article.description }}
    </div>
    <div class="flex items-center justify-between">
      <div>
        <span v-if="author" class="flex items-center leading-tight">
          <img
            v-if="author.avatar"
            :src="author.avatar.src"
            :alt="author.avatar.alt"
            class="block dark:hidden h-11 w-11 rounded-full mr-2 object-cover"
          />
          <img
            v-if="author.avatar"
            :src="author.avatar.srcDark || author.avatar.src"
            :alt="author.avatar.alt"
            class="hidden dark:block h-11 w-11 rounded-full mr-2 object-cover"
          />

          <div>
            <h4 class="font-sans text-sm text-muted-800 dark:text-muted-100">
              <NuxtLink :to="author._path">
                {{ author.title }}
              </NuxtLink>
            </h4>
            <p class="font-sans text-xs text-muted-400">Article author</p>
          </div>
        </span>
      </div>
      <div class="flex">
        <NuxtLink
          :to="props.article._path"
          class="group relative flex items-center gap-2 font-sans text-sm text-primary-500 transition-colors duration-300"
        >
          <span class="sr-only">{{ props.article.title }}</span>
          <span>Read More</span>
          <Icon
            name="lucide:arrow-right"
            class="w-4 h-4 -translate-x-1 group-hover:translate-x-0 transition-transform duration-300"
          />
        </NuxtLink>
      </div>
    </div>
  </AppCard>
</template>