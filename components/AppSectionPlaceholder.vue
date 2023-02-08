<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="flex items-center justify-center min-h-[440px]">
    <div class="w-full relative">
      <slot></slot>
      <div class="text-center font-sans">
        <h3 class="mb-2 font-medium text-xl text-muted-800 dark:text-muted-100">
          {{ props.title }}
        </h3>
        <p class="max-w-md mx-auto text-muted-400">{{ props.subtitle }}</p>
      </div>
    </div>
  </div>
</template>
