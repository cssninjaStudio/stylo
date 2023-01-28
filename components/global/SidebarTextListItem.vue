<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div>
    <h3
      v-if="'title' in $slots || props.title"
      class="font-sans font-semibold text-xs uppercase text-muted-500 dark:text-muted-400 mb-3"
    >
      <slot name="title">{{ props.title }}</slot>
    </h3>
    <p v-if="'subtitle' in $slots || props.subtitle" class="font-sans text-muted-700 dark:text-muted-100">
      <slot name="subtitle">{{ props.subtitle }}</slot>
    </p>
  </div>
</template>