<script setup lang="ts">
import type { CategoryParsedContent } from '../types'

const props = defineProps<{
  path?: string
}>()

const { data: category } = await useAsyncData(
  `category-meta-${props.path}`,
  () =>
    !props.path
      ? Promise.resolve(null)
      : queryContent<CategoryParsedContent>()
          .only(['_path', 'title'])
          .where({ layout: 'blog-category', _path: props.path })
          .findOne()
)
</script>

<template>
  <div v-if="category" class="flex flex-row flex-wrap items-start gap-2">
    <NuxtLink
      :to="category._path"
      class="inline-block font-sans text-xs text-white py-1 px-3 rounded-full bg-primary-500 shadow-lg shadow-primary-500/20"
    >
      {{ category.title }}
    </NuxtLink>
  </div>
</template>
