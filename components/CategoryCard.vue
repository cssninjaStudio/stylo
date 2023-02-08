<script setup lang="ts">
import type { CategoryPage } from '../types'

const props = defineProps<{
  category: Partial<CategoryPage>
}>()
</script>

<template>
  <AppCard class="p-3 rounded-xl">
    <div v-if="props.category.cover" class="relative">
      <img
        :src="props.category.cover.src"
        :alt="props.category.cover.alt"
        :width="props.category.cover.width"
        :height="props.category.cover.height"
        class="block dark:hidden w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300"
      />
      <img
        :src="props.category.cover.srcDark || props.category.cover.src"
        :alt="props.category.cover.alt"
        :width="props.category.cover.width"
        :height="props.category.cover.height"
        class="hidden dark:block w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300"
      />
    </div>
    <div class="mt-2">
      <h3
        class="font-sans font-medium text-lg capitalize text-muted-700 group-hover:text-primary-500 dark:text-muted-100 dark:group-hover:text-primary-500 transition-colors duration-300"
      >
        {{ props.category.title }}
      </h3>
      <p class="font-sans text-xs text-muted-500 dark:text-muted-400">
        {{ props.category.description }}
      </p>
    </div>
  </AppCard>
</template>