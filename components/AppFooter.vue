<script setup lang="ts">
// @todo config
const SiteMetadata = {
  social: [] as any[],
}

const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 bg-muted-100 dark:bg-muted-800">
    <AppContainer>
      <div
        class="w-full flex flex-col md:flex-row items-center justify-between gap-x-12 gap-y-4 px-4 lg:px-6"
      >
        <span class="flex-none flex flex-row items-center">
          <NuxtLink
            class="flex title-font font-medium items-center lg:justify-start justify-center text-muted-800 dark:text-muted-100"
            to="/home"
          >
            <img src="/img/logo/logo.svg" alt="" class="h-8 w-8" />
            <span class="sr-only">Logo</span>
          </NuxtLink>
          <p
            class="font-sans text-sm ml-4 pl-4 border-l border-muted-300 dark:border-muted-600/60 text-muted-500 dark:text-muted-400"
          >
            © {{ year }}
            <a
              href="https://cssninja.io"
              class="font-sans text-sm text-primary-500"
              rel="noopener noreferrer"
              target="_blank"
            >
              cssninja.io
            </a>
          </p>
        </span>
        <span class="flex items-center gap-x-6">
          <p class="text-sm text-muted-600 dark:text-muted-300">
            <NuxtLink
              href="/home"
              class="font-sans text-sm text-muted-500 dark:text-muted-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              Home
            </NuxtLink>
          </p>
          <p class="text-sm text-muted-600 dark:text-muted-300">
            <NuxtLink
              to="/privacy"
              class="font-sans text-sm text-muted-500 dark:text-muted-400"
            >
              Privacy
            </NuxtLink>
          </p>
          <p class="text-sm text-muted-600">
            <NuxtLink
              to="/rss.xml"
              class="font-sans text-sm text-muted-500 dark:text-muted-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              RSS
            </NuxtLink>
          </p>
        </span>
        <span
          class="grow inline-flex lg:ml-auto justify-center sm:justify-end mt-2 sm:mt-0"
        >
          <NuxtLink
            v-for="s in SiteMetadata.social"
            :key="s.name"
            :to="s.link"
            class="h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted-200 text-muted-500 dark:text-muted-400 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon pack="brandico" :name="s.icon" class="h-4 w-4" />
            <span class="sr-only">{{ s.name }}</span>
          </NuxtLink>
        </span>
      </div>
    </AppContainer>
  </footer>
</template>
