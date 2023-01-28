<script setup lang="ts">
const props = defineProps<{
  icon?: string
  title?: string
}>()
</script>

<template>
  <li class="flex items-center gap-3">
    <div
      v-if="'icon' in $slots || props.icon"
      class="h-10 w-10 flex items-center justify-center bg-muted-200 dark:bg-muted-800 mask mask-blob"
    >
      <slot name="icon"><Icon v-if="props.icon" :name="props.icon" class="w-5 h-5" /></slot>
    </div>
    <p
      v-if="'title' in $slots || props.title"
      class="font-sans font-medium text-sm text-muted-500 dark:text-muted-400"
    >
      <slot name="title">{{ props.title }}</slot>
    </p>
  </li>
</template>