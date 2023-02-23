<script setup lang="ts">
const appConfig = useAppConfig()
const route = useRoute()
const isScrolled = useLayoutScrolled()

const isMobileOpen = ref(false)
const isSearchOpen = ref(false)

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out"
    :class="[
      isScrolled
        ? 'bg-white dark:bg-muted-800 shadow-lg shadow-muted-400/10 dark:shadow-muted-800/10'
        : '',
    ]"
  >
    <div class="w-full px-4 lg:px-6">
      <div class="app-container">
        <div
          class="relative flex items-center ltablet:justify-start justify-between h-16"
        >
          <div
            class="flex-1 ltablet:flex-none lg:flex-none flex items-center lg:hidden"
          >
            <!-- Mobile menu button-->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-muted-700 dark:text-muted-100"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="isMobileOpen = !isMobileOpen"
            >
              <span class="sr-only">Open main menu</span>
              <Icon
                :class="{ hidden: isMobileOpen, block: !isMobileOpen }"
                class="block h-6 w-6"
                name="heroicons-outline:menu"
              />
            </button>
          </div>
          <div
            class="flex-1 ltablet:flex-none lg:flex-none flex items-center justify-center lg:items-stretch lg:justify-start ltablet:ml-6"
          >
            <NuxtLink
              v-if="
                appConfig.stylo.header?.displayTitle ||
                appConfig.stylo.header?.logo?.src
              "
              to="/"
              class="shrink-0 flex gap-2 items-center justify-center pb-1"
            >
              <img
                v-if="appConfig.stylo.header.logo.src"
                class="block dark:hidden h-9 lg:h-10"
                :src="appConfig.stylo.header.logo.src"
                :alt="appConfig.stylo.header.logo.alt"
              />
              <img
                v-if="
                  appConfig.stylo.header.logo.srcDark ||
                  appConfig.stylo.header.logo.src
                "
                class="hidden dark:block h-9 lg:h-10"
                :src="
                  appConfig.stylo.header.logo.srcDark ||
                  appConfig.stylo.header.logo.src
                "
                :alt="appConfig.stylo.header.logo.alt"
              />
              <div
                v-if="appConfig.stylo.header.displayTitle"
                class="hidden sm:block font-sans text-lg"
              >
                {{ appConfig.stylo.title }}
              </div>
            </NuxtLink>
            <div class="hidden lg:flex items-center lg:ml-6">
              <div class="h-9 items-center flex gap-x-4">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item._id"
                  :to="item._path"
                  :class="[
                    item._path.length > 1 && route.path.startsWith(item._path)
                      ? 'bg-primary-500/10 text-primary-500 dark:text-primary-500'
                      : '',
                  ]"
                  exact-active-class="bg-primary-500/10 text-primary-500 dark:text-primary-500"
                  class="h-9 flex gap-1 items-center justify-center px-4 font-sans text-sm rounded-lg transition-colors duration-300 hover:bg-muted-200/70 dark:hover:bg-muted-700 text-muted-500 hover:text-muted-800 dark:text-muted-400 dark:hover:text-muted-100"
                >
                  <Icon v-if="item.icon" :name="item.icon" />
                  <span>{{ item.title || item._path }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="flex-1 ltablet:flex-none lg:flex-none ltablet:ml-auto lg:ml-auto flex items-center ptablet:justify-end ltablet:justify-end lg:justify-end gap-4 sm:static"
          >
            <AppNavbarSearch />
            <AppNavbarTheme />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <Transition
      enter-active-class="transition-all ease-out duration-200"
      enter-from-class="opacity-0 -translate-x-full"
      enter-from-end="opacity-100 translate-x-0"
      leave-active-class="transition-all ease-in duration-200"
      leave-from-class="opacity-100 translate-x-0"
      leave-from-end="opacity-0 -translate-x-full"
    >
      <div
        v-if="isMobileOpen"
        id="mobile-menu"
        class="fixed top-0 left-0 h-screen w-72 z-50 b-white"
      >
        <div
          class="h-full flex flex-col border-r border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 shadow-lg shadow-muted-300/30 dark:shadow-muted-900/20"
        >
          <div class="h-16 w-full flex items-center justify-between px-6">
            <div class="flex items-center ga-2">
              <NuxtLink to="/">
                <div class="shrink-0 flex items-center">
                  <img
                    v-if="appConfig.stylo.header.logo.src"
                    class="block dark:hidden h-10 w-10"
                    :src="appConfig.stylo.header.logo.src"
                    :alt="appConfig.stylo.header.logo.alt"
                  />
                  <img
                    v-if="
                      appConfig.stylo.header.logo.srcDark ||
                      appConfig.stylo.header.logo.src
                    "
                    class="hidden dark:block h-10 w-10"
                    :src="
                      appConfig.stylo.header.logo.srcDark ||
                      appConfig.stylo.header.logo.src
                    "
                    :alt="appConfig.stylo.header.logo.alt"
                  />
                </div>
              </NuxtLink>
            </div>
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-primary-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="isMobileOpen = !isMobileOpen"
            >
              <span class="sr-only">Close mobile menu</span>
              <Icon
                :class="{ block: isMobileOpen, hidden: !isMobileOpen }"
                class="hidden h-6 w-6"
                aria-hidden="true"
                name="heroicons-outline:x"
              />
            </button>
          </div>
          <div class="h-[calc(100%_-_64px)] overflow-y-auto slimscroll">
            <div class="flex flex-col gap-4 p-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item._id"
                :to="item._path"
                :class="[
                  item._path.length > 1 && route.path.startsWith(item._path)
                    ? 'bg-primary-500/20 text-primary-500'
                    : '',
                ]"
                exact-active-class="bg-primary-500/20 text-primary-500"
                class="text-muted-500 dark:text-muted-400 font-sans py-3 px-4 rounded-lg"
              >
                <span>{{ item.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
