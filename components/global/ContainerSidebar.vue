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
    gridClass: 'grid grid-cols-12 gap-y-20 gap-x-16',
    proseClass: 'max-w-2xl xxl:max-w-3xl xxl:prose-lg',
  }
)
</script>

<template>
  <AppSection :class="props.sectionClass">
    <AppContainer :class="props.containerClass">
      <div class="grid grid-cols-12 gap-y-20 gap-x-16">
        <!-- Main -->
        <div
          class="col-span-12 ptablet:col-span-8 ltablet:col-span-8 lg:col-span-8"
        >
          <div
            class="prose prose-muted dark:prose-invert prose-primary"
            :class="props.proseClass"
          >
            <slot />
          </div>
        </div>
        <!-- Sidebar -->
        <div
          class="col-span-12 ptablet:col-span-4 ltablet:col-span-4 lg:col-span-4"
        >
          <ContentSlot :use="$slots.sidebar" unwrap="p" />
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>