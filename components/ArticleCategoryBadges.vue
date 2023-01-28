<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    categories?: string[]
  }>(),
  {
    categories: () => [],
  }
)
const { getCategory } = useCategoryDetails()
</script>

<template>
  <div class="flex flex-row flex-wrap items-start gap-2">
    <NuxtLink
      v-for="category of props.categories"
      :key="category"
      :to="`/categories/${category}`"
      class="inline-block font-sans text-xs capitalize text-white py-1 px-3 rounded-full bg-primary-500 shadow-lg shadow-primary-500/20"
    >
      {{ getCategory(category)?.name ?? category }}
    </NuxtLink>
  </div>
</template>
