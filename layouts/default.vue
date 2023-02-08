<script setup lang="ts">
const { page } = useContent()
</script>


<template>
  <AppSection class="bg-white dark:bg-muted-900 min-h-screen">
    <AppContainer>
      <div
        :class="
          page?.toc
            ? 'max-w-4xl justify-center flex w-full mx-auto'
            : 'max-w-3xl mx-auto'
        "
      >
        <div
          class="grow max-w-none prose prose-muted prose-primary xxl:prose-lg dark:prose-invert"
        >
          <slot />
        </div>
        <div v-if="page?.toc" class="relative pl-6 pt-12 shrink w-1/4">
          <AppPageToc class="sticky top-32" />
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>
