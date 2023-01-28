<script setup lang="ts">
const isScrolled = useLayoutScrolled()

const searchOpen = ref(false)
const searchResults = ref(false)
const searchText = ref('')
// const idx = ref()
// const doc = ref()

function lunrSearch() {
  searchResults.value = true
}
</script>

<template>
  <div>
    <div
      class="ltablet:flex lg:flex justify-center"
      :class="
        searchOpen
          ? 'fixed top-16 left-0 h-16 w-full flex sm:hidden ptablet:flex items-center -m-1 bg-white dark:bg-muted-800'
          : 'hidden'
      "
    >
      <div
        class="w-full"
        :class="searchOpen ? 'max-w-7xl mx-auto px-4 sm:px-6' : ''"
      >
        <div class="input-group relative flex items-center w-full">
          <div class="relative" :class="searchOpen ? 'w-full' : ''">
            <input
              id="lunrsearch"
              v-model="searchText"
              name="q"
              maxlength="255"
              type="text"
              aria-label="Search"
              class="peer pl-9 pr-4 py-2 h-10 text-sm leading-5 font-sans w-full rounded-xl bg-white text-muted-600 border border-muted-300 focus-visible:shadow-lg focus-visible:shadow-muted-300/50 dark:focus-visible:shadow-muted-800/50 placeholder:text-muted-300 dark:placeholder:text-muted-500 outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-muted-300 dark:focus-visible:outline-muted-600 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              :class="[
                isScrolled
                  ? 'dark:bg-muted-700 dark:text-muted-200 dark:border-muted-600'
                  : 'dark:bg-muted-800 dark:text-muted-200 dark:border-muted-700',
              ]"
              placeholder="Search posts..."
              @keyup.enter="lunrSearch()"
            />
            <button
              aria-label="Search Button"
              name="search"
              type="button"
              class="cursor-pointer absolute top-0 left-0 h-10 w-10 flex justify-center items-center text-muted-400 peer-focus:text-violet-500 peer-disabled:opacity-20 transition-colors duration-300"
              @click="lunrSearch()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="h-4 w-4"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21l-4.35-4.35"></path>
                </g>
              </svg>
            </button>
          </div>
          <!-- Close search -->
          <button
            class="h-16 w-16 flex ptablet:flex sm:hidden items-center justify-center text-muted-400"
            @click="searchOpen = false"
          >
            <Icon name="lucide:x" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="searchResults"
      class="relative z-50"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <Transition
        enter-active-class="ease-in-out duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in-out duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="searchResults"
          class="fixed inset-0 bg-gray-500/75 transition-opacity"
        >
          <div class="fixed inset-0 overflow-hidden">
            <div
              class="absolute inset-0 overflow-hidden"
              @click="searchResults = false"
            >
              <div
                class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
              >
                <div class="pointer-events-auto relative w-screen max-w-md">
                  <div
                    class="flex h-full flex-col overflow-y-scroll bg-white dark:bg-muted-800 shadow-xl"
                  >
                    <!-- Header -->
                    <div
                      class="h-20 flex items-center justify-between px-8 border-b border-muted-200 dark:border-muted-700/70 bg-muted-100 dark:bg-muted-900"
                    >
                      <div>
                        <h3 class="font-sans text-xl">Search Results</h3>
                      </div>
                      <div class="relative">
                        <button
                          type="button"
                          class="h-12 w-12 flex items-center justify-center text-muted-500 dark:text-muted-100"
                          @click="searchResults = false"
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
                          id="lunrsearchtitle"
                          class="modal-title mb-6 font-sans text-base font-medium text-muted-500 dark:text-muted-400"
                        >
                          Post results
                        </h3>
                      </div>
                      <div id="lunrsearchmodal" class="relative">
                        <div id="lunrsearchresults" class="overflow-hidden">
                          <ul class="space-y-8"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
