<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    sectionClass?: string | string[]
    containerClass?: string | string[]
    proseClass?: string | string[]
  }>(),
  {
    sectionClass: 'bg-white dark:bg-muted-900',
    containerClass: '',
    proseClass: 'max-w-2xl xxl:max-w-3xl xxl:prose-lg',
  }
)
</script>

<template>
  <AppSection :class="props.sectionClass">
    <AppContainer :class="props.containerClass">
      <div
        class="prose prose-slate dark:prose-invert prose-purple"
        :class="props.proseClass"
      >
        <slot />
      </div>
    </AppContainer>
  </AppSection>
</template>
