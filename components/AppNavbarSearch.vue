<script setup lang="ts">
import { FocusTrap } from 'focus-trap-vue'
const isScrolled = useLayoutScrolled()

const metaKey = ref('Ctrl')
const isMobileSearchOpen = ref(false)
const isPanelOpen = ref(false)
const searchText = ref('')
// const idx = ref()
// const doc = ref()

function lunrSearch() {
  isPanelOpen.value = true
}

watch(isPanelOpen, (value) => {
  if (value) {
    document.documentElement.classList.add('overflow-hidden')
  } else {
    document.documentElement.classList.remove('overflow-hidden')
  }
})

onMounted(() => {
  const platform =
    // @ts-ignore
    navigator?.userAgentData?.platform || navigator?.platform || 'unknown'

  metaKey.value = /(mac|iphone|ipod|ipad)/i.test(platform) ? '⌘' : 'Ctrl'
})
onBeforeUnmount(() => {
  document.documentElement.classList.remove('overflow-hidden')
})

onKeyStroke('k', (event) => {
  if (event.metaKey || event.ctrlKey) {
    event.preventDefault()
    isPanelOpen.value = !isPanelOpen.value
  }
})
</script>

<template>
  <div>
    <div
      class="ltablet:flex lg:flex justify-center"
      :class="
        isMobileSearchOpen
          ? 'fixed top-16 left-0 h-16 w-full flex sm:hidden ptablet:flex items-center -m-1 bg-white dark:bg-muted-800'
          : 'hidden'
      "
    >
      <div
        class="w-full"
        :class="isMobileSearchOpen ? 'max-w-7xl mx-auto px-4 sm:px-6' : ''"
      >
        <div class="relative flex items-center w-full">
          <div>
            <button
              type="button"
              :class="[
                isScrolled
                  ? 'bg-white dark:bg-muted-700 dark:text-muted-200 dark:border-muted-600'
                  : 'bg-white dark:bg-muted-800 dark:text-muted-200 dark:border-muted-700',
              ]"
              class="px-4 py-2 h-10 flex gap-2 w-full rounded-xl items-center text-muted-600 border border-muted-300 focus-visible:shadow-lg focus-visible:shadow-muted-300/50 dark:focus-visible:shadow-muted-800/50 placeholder:text-muted-300 dark:placeholder:text-muted-500 outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-muted-300 dark:focus-visible:outline-muted-600 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              @click="lunrSearch()"
            >
              <Icon class="h-5 w-5 text-muted-400" name="lucide:search" />
              <span class="text-sm font-sans">Search</span>
              <kbd class="text-xs text-muted-400 rounded-xl px-1">
                {{ metaKey }}+K
              </kbd>
            </button>
          </div>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="ease-out duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <a
        v-if="isPanelOpen"
        href="#"
        role="button"
        class="fixed inset-0 z-20 bg-muted-500/75"
        @click.prevent="isPanelOpen = false"
        aria-label="Close panel"
      ></a>
    </Transition>

    <Transition
      enter-active-class="ease-out duration-200"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="ease-in duration-100"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <FocusTrap
        v-if="isPanelOpen"
        v-model:active="isPanelOpen"
        :initial-focus="() => ($refs.searchText as HTMLInputElement)"
      >
        <div class="fixed inset-y-0 right-0 flex z-30">
          <div class="relative w-screen max-w-md">
            <div
              class="flex h-full flex-col overflow-y-scroll bg-white dark:bg-muted-800 shadow-xl"
            >
              <!-- Header -->
              <div
                class="h-20 flex items-center justify-between px-8 border-b border-muted-200 dark:border-muted-700/70 bg-muted-100 dark:bg-muted-900"
              >
                <div>
                  <h3 class="font-sans text-xl">
                    <input
                      ref="searchInput"
                      v-model="searchText"
                      type="search"
                      class="bg-transparent outline-none appearance-none"
                      placeholder="Search for posts"
                    />
                  </h3>
                </div>
                <div class="relative">
                  <button
                    type="button"
                    class="h-12 w-12 flex items-center justify-center text-muted-500 dark:text-muted-100"
                    @click="isPanelOpen = false"
                  >
                    <span class="sr-only">Close panel</span>
                    <Icon class="h-6 w-6" name="heroicons-outline:x" />
                  </button>
                </div>
              </div>
              <!-- Body -->
              <div class="h-[calc(100%_-_80px)] p-8">
                <div>
                  <h3
                    class="modal-title mb-6 font-sans text-base font-medium text-muted-500 dark:text-muted-400"
                  >
                    Post results
                  </h3>
                </div>
                <div class="relative">
                  <div class="overflow-hidden">
                    <ul class="space-y-8"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FocusTrap>
    </Transition>
  </div>
</template>
