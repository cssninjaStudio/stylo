<script setup lang="ts">
import type { TagPage } from '../types'

const props = defineProps<{
  tag: Partial<TagPage>
}>()
</script>

<template>
  <NuxtLink :to="props.tag._path" class="group">
    <div class="relative">
      <div
        class="flex gap-4 py-2 px-4 rounded-full border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 group-hover:border-primary-500 dark:group-hover:border-primary-500 group-hover:shadow-xl group-hover:shadow-muted-300/30 dark:group-hover:shadow-muted-900/50 transition-all duration-300"
      >
        <h3
          class="font-sans text-muted-800 dark:text-muted-100 text-sm font-semibold"
        >
          {{ props.tag.short }}
        </h3>
        <!-- <p
          v-if="typeof props.count === 'number'"
          class="font-sans text-muted-400 group-hover:text-primary-500 text-sm font-medium"
        >
          <span>{{ props.count }}</span>
        </p> -->
      </div>
    </div>
  </NuxtLink>
</template>