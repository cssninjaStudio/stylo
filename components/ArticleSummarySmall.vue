<script setup lang="ts">
import type { AuthorPage, ArticlePage } from '../types'

const props = defineProps<{
  article: Partial<ArticlePage>
}>()

const { formatDate } = useDateFormatter()

const { data: author } = await useAsyncAuthorMeta(() => props.article.author)
</script>

<template>
  <div class="app-card p-3 rounded-lg">
    <div class="relative">
      <NuxtLink
        v-if="props.article.cover"
        :to="props.article._path"
        class="block"
      >
        <img
          :src="props.article.cover.src"
          :alt="props.article.cover.alt"
          :width="props.article.cover.width"
          :height="props.article.cover.height"
          class="block dark:hidden rounded-md w-full h-64 md:h-40 object-cover"
        />
        <img
          :src="props.article.cover.srcDark || props.article.cover.src"
          :alt="props.article.cover.alt"
          :width="props.article.cover.width"
          :height="props.article.cover.height"
          class="hidden dark:block rounded-md w-full h-64 md:h-40 object-cover"
        />
      </NuxtLink>
      <div
        v-if="props.article.category"
        class="absolute top-4 right-4 scale-90 z-30"
      >
        <ArticleBadgeCategory :path="props.article.category" />
      </div>
    </div>

    <div
      class="flex items-center gap-2 mb-1 mt-4 text-muted-500 dark:text-muted-400"
    >
      <Icon name="ph:calendar-blank-duotone" class="w-4 h-4" />
      <div class="font-sans text-xs">
        {{ formatDate(props.article.publishDate) }}
      </div>
    </div>
    <NuxtLink :to="props.article._path">
      <h3
        class="line-clamp-1 font-sans font-medium text-base text-muted-700 dark:text-white mb-3"
      >
        {{ props.article.title }}
      </h3>
    </NuxtLink>
    <div class="flex items-center justify-between">
      <div>
        <span v-if="author" class="flex items-center mr-6">
          <img
            v-if="author.avatar"
            :src="author.avatar.src"
            :alt="author.avatar.alt"
            :width="author.avatar.width"
            :height="author.avatar.height"
            class="block dark:hidden h-8 w-8 rounded-full mr-2 object-cover"
          />
          <img
            v-if="author.avatar"
            :src="author.avatar.srcDark || author.avatar.src"
            :alt="author.avatar.alt"
            :width="author.avatar.width"
            :height="author.avatar.height"
            class="hidden dark:block h-8 w-8 rounded-full mr-2 object-cover"
          />

          <div>
            <h4 class="font-sans text-xs text-muted-800 dark:text-muted-100">
              <NuxtLink :to="author._path">
                {{ author.title }}
              </NuxtLink>
            </h4>
          </div>
        </span>
      </div>
      <div class="flex ltablet:hidden">
        <NuxtLink
          :to="props.article._path"
          class="group relative flex items-center gap-2 font-sans text-xs text-primary-500 transition-colors duration-300"
        >
          <span class="sr-only">{{ props.article.title }}</span>
          <span>Read More</span>
          <Icon
            name="lucide:arrow-right"
            class="w-3 h-3 -translate-x-1 group-hover:translate-x-0 transition-transform duration-300"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>