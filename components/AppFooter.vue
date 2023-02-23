<script setup lang="ts">
const appConfig = useAppConfig()

// @todo config
const SiteMetadata = {
  social: [] as any[],
}

const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 bg-muted-100 dark:bg-muted-800">
    <div class="app-container">
      <div
        class="w-full flex flex-col md:flex-row items-center justify-between gap-x-12 gap-y-4 px-4 lg:px-6"
      >
        <span class="flex-none flex flex-row items-center">
          <NuxtLink
            v-if="appConfig.stylo.footer.logo.src"
            class="flex title-font font-medium items-center lg:justify-start justify-center text-muted-800 dark:text-muted-100 mr-4 pr-4 border-r border-muted-300 dark:border-muted-600/60"
            to="/"
          >
            <img
              :src="appConfig.stylo.footer.logo.src"
              :alt="appConfig.stylo.footer.logo.alt"
              class="block dark:hidden h-8 w-8"
            />
            <img
              :src="
                appConfig.stylo.footer.logo.srcDark ||
                appConfig.stylo.footer.logo.src
              "
              :alt="appConfig.stylo.footer.logo.alt"
              class="hidden dark:block h-8 w-8"
            />
          </NuxtLink>
          <p
            v-if="appConfig.stylo.footer.copyright.enabled"
            class="font-sans text-sm text-muted-500 dark:text-muted-400"
          >
            © {{ year }}
            <a
              :href="appConfig.stylo.footer.copyright.href"
              class="font-sans text-sm text-primary-500"
              :rel="appConfig.stylo.footer.copyright.rel"
              :target="appConfig.stylo.footer.copyright.target"
            >
              {{ appConfig.stylo.footer.copyright.text }}
            </a>
          </p>
        </span>
        <span class="flex items-center gap-x-6">
          <p
            v-for="link in appConfig.stylo.footer.links"
            :key="link.href"
            class="text-sm text-muted-600 dark:text-muted-300"
          >
            <NuxtLink
              :href="link.href"
              :rel="link.rel"
              :target="link.target"
              class="font-sans text-sm text-muted-500 dark:text-muted-400"
            >
              {{ link.text }}
            </NuxtLink>
          </p>
        </span>
        <span
          class="grow inline-flex gap-1 lg:ml-auto justify-center sm:justify-end mt-2 sm:mt-0"
        >
          <NuxtLink
            v-for="social in appConfig.stylo.footer.social"
            :key="social.href"
            :to="social.href"
            :title="social.title"
            :target="social.target"
            :rel="social.rel"
            class="h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted-200 text-muted-500 dark:text-muted-400 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
          >
            <Icon :name="social.icon" class="h-4 w-4" />
          </NuxtLink>
        </span>
      </div>
    </div>
  </footer>
</template>
