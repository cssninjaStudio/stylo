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
      <ContentSlot :use="$slots.title" unwrap="p">
        {{ props.title }}
      </ContentSlot>
    </h3>
    <p class="font-sans text-muted-700 dark:text-muted-100">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </p>
  </div>
</template>