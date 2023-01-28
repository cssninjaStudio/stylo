<script setup lang="ts">
import type { BlogParsedContent } from '../types'

const props = defineProps<{
  article: Partial<BlogParsedContent>
}>()

const { getAuthor } = useAuthorDetails()
const { formatDate } = useDateFormatter()
</script>

<template>
  <AppSection class="bg-muted-100 dark:bg-muted-1000 overflow-hidden">
    <AppContainer>
      <div class="grid grid-cols-12 md:gap-x-10 gap-y-10 pt-6 sm:pt-10">
        <!-- Featured image -->
        <div
          class="col-span-12 ltablet:col-span-5 ltablet:col-start-2 lg:col-span-5"
        >
          <img
            :src="props.article.cover"
            alt=""
            class="block max-w-full w-full md:w-[540px] md:h-[447px] ltablet:w-[459px] ltablet:h-[380px] object-cover rounded-2xl mx-auto"
          />
        </div>

        <div
          class="col-span-12 ltablet:col-span-5 lg:col-span-5 ltablet:col-start-7 lg:col-start-7"
        >
          <div class="h-full flex items-center">
            <div class="w-full max-w-md ptablet:mx-auto">
              <!-- Categories -->
              <div class="mb-4">
                <ArticleCategoryBadges
                  :categories="props.article.categories"
                />
              </div>
              <!-- Title -->
              <h1
                class="font-sans text-muted-800 dark:text-white font-bold text-3xl"
              >
                {{ props.article.title }}
              </h1>
              <p
                class="font-sans text-sm text-muted-500 dark:text-muted-400 my-4"
              >
                {{ props.article.description }}
              </p>
              <div class="flex items-center justify-between">
                <div
                  v-if="props.article.author"
                  class="flex items-center gap-2"
                >
                  <NuxtLink
                    v-if="getAuthor(props.article.author)?.image"
                    :to="`/authors/${props.article.author}`"
                  >
                    <img
                      :src="getAuthor(props.article.author)?.image"
                      :alt="props.article.author"
                      class="sm:w-12 sm:h-12 w-10 h-10 rounded-full"
                    />
                  </NuxtLink>
                  <div class="font-sans text-sm">
                    <NuxtLink
                      :to="`/authors/${props.article.author}`"
                      class="text-muted-800 dark:text-muted-100 font-medium leading-none hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      {{ getAuthor(props.article.author)?.name ?? props.article.author }}
                    </NuxtLink>
                    <p class="text-muted-600 dark:text-muted-400 text-xs">
                      published on
                      {{ formatDate(props.article.publishDate) }}
                    </p>
                  </div>
                </div>
                <div class="font-sans text-xs sm:text-sm text-muted-400">
                  <span class="pr-2">—</span>
                  <span>{{ props.article.readingTime?.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>
