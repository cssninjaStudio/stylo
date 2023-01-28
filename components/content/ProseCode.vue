<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const { copy, copied, isSupported } = useClipboard({ source: props.code })

    return {
      isSupported,
      copied,
      copy,
    }
  },
})
</script>

<template>
  <div class="group relative">
    <slot />
    <div class="absolute right-4 top-2 flex gap-4 items-center">
      <button
        v-if="isSupported"
        type="button"
        class="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-150 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-600"
        :class="
          copied
            ? 'text-emerald-500'
            : 'active:text-white/80 hover:text-white focus-visible:text-white'
        "
        @click="() => copy()"
      >
        <Transition
          enter-active-class="transition-opacity duration-150"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-150"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <Icon v-if="copied" name="ph:check" />
          <Icon v-else name="ph:copy" />
        </Transition>
      </button>
      <div v-if="language" class="text-sm">{{ language }}</div>
    </div>
  </div>
</template>

<style>
pre code .line {
  @apply block min-h-[1rem];
}
</style>
