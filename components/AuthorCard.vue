<script setup lang="ts">
import type { AuthorParsedContent } from '../types'

const props = defineProps<{
  author: Partial<AuthorParsedContent>
}>()
</script>

<template>
  <div class="relative">
    <div
      class="p-6 rounded-lg border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800"
    >
      <div
        class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
      >
        <div v-if="props.author?.avatar" class="h-14 w-14">
          <img
            :src="props.author.avatar.src"
            :alt="props.author.avatar.alt"
            class="block dark:hidden w-full h-full object-center object-cover rounded-full"
          />
          <img
            :src="props.author.avatar.srcDark || props.author.avatar.src"
            :alt="props.author.avatar.alt"
            class="hidden dark:block w-full h-full object-center object-cover rounded-full"
          />
        </div>
        <div class="relative">
          <h3
            class="font-sans font-medium text-lg leading-none text-muted-800 dark:text-muted-100"
          >
            <NuxtLink :to="author._path">
              <span class="absolute inset-0" />
              {{ props.author?.title }}
            </NuxtLink>
          </h3>
          <p
            v-if="props.author?.subtitle"
            class="font-sans text-sm text-muted-400"
          >
            {{ props.author?.subtitle }}
          </p>
        </div>
        <div class="sm:ml-auto">
          <NuxtLink
            :to="author._path"
            class="w-52 sm:w-auto inline-flex items-center justify-center h-10 px-4 rounded-lg border border-muted-200 hover:border-primary-500 dark:border-muted-600 dark:hover:border-primary-500 bg-white dark:bg-muted-700 dark:hover:bg-primary-500 font-sans font-medium text-sm text-muted-600 hover:text-primary-500 dark:text-muted-400 dark:hover:text-white transition-colors duration-300"
          >
            Details
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>