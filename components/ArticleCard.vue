<script setup lang="ts">
import type { AuthorPage, ArticlePage } from '../types'

const props = defineProps<{
  article: Partial<ArticlePage>
}>()

const { formatDate } = useDateFormatter()

const { data: author } = await useAsyncAuthorMeta(() => props.article.author)
</script>

<template>
  <div class="relative">
    <AppCard class="p-4 ltablet:p-5 md:p-5 lg:p-6 rounded-2xl">
      <div class="relative">
        <NuxtLink v-if="props.article.cover" :to="props.article._path">
          <img
            :src="props.article.cover.src"
            :alt="props.article.cover.alt"
            class="block dark:hidden rounded-lg w-full object-cover"
          />
          <img
            :src="props.article.cover.srcDark || props.article.cover.src"
            :alt="props.article.cover.alt"
            class="hidden dark:block rounded-lg w-full object-cover"
          />
          <p class="sr-only">{{ props.article.title }}</p>
        </NuxtLink>
        <div v-if="props.article.category" class="absolute top-4 right-4">
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
        <h3
          class="line-clamp-2 font-sans font-medium lg:text-xl text-muted-700 dark:text-white mb-2"
        >
          {{ props.article.title }}
        </h3>
      </NuxtLink>
      <p
        class="line-clamp-3 font-sans ltablet:text-xs text-sm text-muted-500 dark:text-muted-400 mb-4"
      >
        {{ props.article.description }}
      </p>
      <div class="flex items-center justify-between">
        <div>
          <span v-if="author" class="flex items-center leading-tight">
            <img
              v-if="author.avatar"
              :src="author.avatar.src"
              :alt="author.avatar.alt"
              :width="author.avatar.width"
              :height="author.avatar.height"
              class="block dark:hidden h-9 w-9 sm:h-11 sm:w-11 ltablet:h-10 ltablet:w-10 rounded-full mr-2 object-cover"
            />
            <img
              v-if="author.avatar"
              :src="author.avatar.srcDark || author.avatar.src"
              :alt="author.avatar.alt"
              :width="author.avatar.width"
              :height="author.avatar.height"
              class="hidden dark:block h-9 w-9 sm:h-11 sm:w-11 ltablet:h-10 ltablet:w-10 rounded-full mr-2 object-cover"
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
  </div>
</template>