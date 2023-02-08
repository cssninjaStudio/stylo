<script setup lang="ts">
import type { AuthorParsedContent } from '../types'

const props = defineProps<{
  author: Partial<AuthorParsedContent>
}>()
</script>

<template>
  <div class="group relative flex flex-col justify-center text-center">
    <div
      v-if="props.author?.avatar"
      class="relative h-20 w-20 ptablet:h-24 ptablet:w-24 ltablet:h-24 ltablet:w-24 md:h-28 md:w-28 mx-auto mb-4"
    >
      <img
        :src="props.author.avatar.src"
        :alt="props.author.avatar.alt"
        class="block dark:hidden w-full h-full object-center object-cover rounded-full"
      />
      <img
        :src="props.author.avatar.src"
        :alt="props.author.avatar.alt"
        class="hidden dark:block w-full h-full object-center object-cover rounded-full"
      />
    </div>
    <h3 class="font-sans text-lg text-muted-800 dark:text-muted-100">
      <NuxtLink :to="author._path">
        <span class="absolute inset-0" />
        {{ props.author?.title }}
      </NuxtLink>
    </h3>
    <p v-if="props.author?.subtitle" class="font-sans text-sm text-muted-400">
      {{ props.author?.subtitle }}
    </p>
  </div>
</template>