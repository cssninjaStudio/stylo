<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tags?: string[]
  }>(),
  {
    tags: () => [],
  }
)
</script>

<template>
  <div class="flex flex-row flex-wrap items-start gap-4 lg:gap-2 mt-2">
    <NuxtLink
      v-for="tag of props.tags"
      :key="tag"
      :to="`/tags/${tag}`"
      class="font-sans font-semibold text-xs inline-block p-2 lg:py-1 rounded-lg no-underline bg-muted-200 dark:bg-muted-800 text-muted-600 dark:text-muted-400"
    >
      #{{ tag }}
    </NuxtLink>
  </div>
</template>
