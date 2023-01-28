<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div>
    <h3
      class="font-sans font-semibold text-xs uppercase text-muted-500 dark:text-muted-400 mb-5"
    >
      <slot name="title">{{ props.title }}</slot>
    </h3>
    <ul class="space-y-4">
      <slot />
    </ul>
  </div>
</template>