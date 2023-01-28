<script setup lang="ts">
defineProps<{ id: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<template>
  <h1 :id="id" class="group relative -ml-9 pl-9 scroll-mt-20" tabindex="-1">
    <slot />
    <a
      v-if="generate"
      :href="`#${id}`"
      class="left-0 top-0 transition-opacity focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-muted-300 rounded duration-150 absolute no-underline opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
    >
      #
    </a>
  </h1>
</template>
