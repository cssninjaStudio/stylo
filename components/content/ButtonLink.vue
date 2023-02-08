<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

type NuxtLinkProps = {
  to?: string | RouteLocationRaw
  href?: string | RouteLocationRaw
  external?: boolean
  replace?: boolean
  custom?: boolean
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null
  rel?: string | null
  noRel?: boolean
  prefetch?: boolean
  noPrefetch?: boolean
  activeClass?: string
  exactActiveClass?: string
  ariaCurrentValue?: string
}

const props = withDefaults(defineProps<NuxtLinkProps>(), {
  to: undefined,
  href: undefined,
  external: undefined,
  replace: undefined,
  custom: undefined,
  target: undefined,
  rel: undefined,
  noRel: undefined,
  prefetch: undefined,
  noPrefetch: undefined,
  activeClass: undefined,
  exactActiveClass: undefined,
  ariaCurrentValue: undefined,
})
</script>

<template>
  <NuxtLink
    v-bind="props"
    class="h-10 flex gap-2 items-center justify-center font-sans text-sm px-6 text-muted-600 dark:text-muted-400 hover:text-primary-500 dark:hover:text-primary-500 rounded-full border border-muted-200 dark:border-muted-700/80 hover:border-primary-500 dark:hover:border-primary-500 bg-white dark:bg-muted-800 transition-colors duration-300"
  >
    <ContentSlot :use="$slots.default" />
  </NuxtLink>
</template>