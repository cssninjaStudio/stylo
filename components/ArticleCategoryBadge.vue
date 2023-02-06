<script setup lang="ts">
import type { CategoryParsedContent } from '../types'

const props = defineProps<{
  path?: string
}>()

const { data: category } = useAsyncData(`category-meta-${props.path}`, () =>
  !props.path
    ? Promise.resolve(null)
    : queryContent<CategoryParsedContent>()
        .only(['_path', 'color', 'title'])
        .where({ layout: 'blog-category', _path: props.path })
        .findOne()
)

const color = computed(
  () => category.value?.color || 'rgb(var(--folio-color-primary-500))'
)
</script>

<template>
  <div class="article-category-badge">
    <template v-if="category">
      <NuxtLink
        :to="category._path"
        class="inline-block font-sans text-xs text-white py-1 px-3 rounded-full shadow-lg"
      >
        {{ category.title }}
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped>
.article-category-badge a {
  background-color: v-bind(color);
}
</style>
