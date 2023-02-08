<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tags?: string[]
  }>(),
  {
    tags: () => [],
  }
)

const { data: tags } = await useAsyncTagsMeta(() => props.tags)
</script>

<template>
  <div class="flex flex-row flex-wrap items-start gap-4 lg:gap-2 mt-2">
    <NuxtLink
      v-for="tag of tags"
      :key="tag._path"
      :to="tag._path"
      class="font-sans font-semibold text-xs inline-block p-2 lg:py-1 rounded-lg no-underline bg-muted-200 dark:bg-muted-800 text-muted-600 dark:text-muted-400"
    >
      {{ tag.short }}
    </NuxtLink>
  </div>
</template>
