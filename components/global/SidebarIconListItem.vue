<script setup lang="ts">
const props = defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="flex items-center gap-3">
    <div
      v-if="'icon' in $slots || props.icon"
      class="h-10 w-10 flex items-center justify-center bg-muted-200 dark:bg-muted-800 mask mask-blob"
    >
      <ContentSlot :use="$slots.icon" unwrap="p">
        <Icon v-if="props.icon" :name="props.icon" class="w-5 h-5" />
      </ContentSlot>
    </div>
    <p class="font-sans font-medium text-sm text-muted-500 dark:text-muted-400">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </p>
  </div>
</template>