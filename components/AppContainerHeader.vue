<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="relative flex flex-col md:flex-row items-center justify-between gap-y-4">
    <div class="max-w-md lg:max-w-xl space-y-2">
      <h2
        v-if="'title' in $slots || props.title"
        class="font-sans font-medium text-4xl capitalize text-muted-700 dark:text-white"
      >
        <slot name="title">{{  props.title }}</slot>
      </h2>
      <div v-if="'subtitle' in $slots || props.subtitle" class="font-sans text-sm lg:text-base text-muted-500 dark:text-muted-400">
        <slot name="subtitle">{{ props.subtitle }}</slot>
      </div>
    </div>
    <TagLinks v-if="'links' in $slots" class="justify-start md:justify-end">
      <slot name="links"></slot>
    </TagLinks>
  </div>
</template>