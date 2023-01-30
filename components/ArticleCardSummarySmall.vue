<script setup lang="ts">
import type { BlogParsedContent } from '../types'

const props = defineProps<{
  article: Partial<BlogParsedContent>
}>()

const { getAuthor } = useAuthorDetails()
const { formatDate } = useDateFormatter()

const image = computed(() => props.article.image || props.article.cover)
</script>

<template>
  <Card class="p-3 rounded-lg">
    <div class="relative">
      <NuxtLink :to="props.article._path" class="block">
        <img
          v-if="image"
          :src="image"
          alt=""
          class="block lg:block rounded-md w-full h-64 md:h-40 object-cover"
        />
      </NuxtLink>
      <div
        v-if="props.article.categories"
        class="absolute top-4 right-4 scale-90 z-30"
      >
        <ArticleCategoryBadges :categories="props.article.categories" />
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
        <span v-if="props.article.author" class="flex items-center mr-6">
          <img
            v-if="getAuthor(props.article.author)?.image"
            :src="getAuthor(props.article.author)?.image"
            alt=""
            class="h-8 w-8 rounded-full mr-2 object-cover"
          />
          <div>
            <h4 class="font-sans text-xs text-muted-800 dark:text-muted-100">
              <NuxtLink :to="`/authors/${props.article.author}`">
                {{
                  getAuthor(props.article.author)?.name || props.article.author
                }}
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
  </Card>
</template>