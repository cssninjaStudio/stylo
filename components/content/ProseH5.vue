<script setup lang="ts">
defineProps<{ id: string }>()
const heading = 5
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<template>
  <h5 :id="id" class="group relative -ml-4 pl-4 scroll-mt-20" tabindex="-1">
    <slot />
    <a
      v-if="generate"
      :href="`#${id}`"
      class="left-0 top-0 transition-opacity focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-300 rounded duration-150 absolute no-underline opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
    >
      #
    </a>
  </h5>
</template>
