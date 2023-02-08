<script setup lang="ts">
const props = defineProps<{
  path?: string
}>()

const { data: category } = useAsyncCategoryMeta(() => props.path)

const color = computed(
  () => category.value?.color || 'rgb(var(--color-primary-500))'
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
