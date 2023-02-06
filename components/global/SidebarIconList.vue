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
      <ContentSlot :use="$slots.title" unwrap="p">
        {{ props.title }}
      </ContentSlot>
    </h3>
    <div class="space-y-4">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>