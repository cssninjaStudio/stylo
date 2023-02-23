<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="app-section bg-white dark:bg-muted-1000">
    <div class="app-container">
      <div class="relative">
        <div class="text-center mb-8">
          <h2
            class="mb-1 font-sans font-medium text-2xl text-muted-700 dark:text-white"
          >
            {{ appConfig.stylo.footer.action.title }}
          </h2>
          <div
            class="max-w-sm mx-auto font-sans text-muted-500 dark:text-muted-400"
          >
            {{ appConfig.stylo.footer.action.text }}
          </div>
        </div>
        <div
          v-if="appConfig.stylo.footer.action.link"
          class="flex flex-col md:flex-row w-full max-w-md mx-auto justify-center gap-3"
        >
          <a
            :href="appConfig.stylo.footer.action.link.href"
            :target="appConfig.stylo.footer.action.link.target"
            :rel="appConfig.stylo.footer.action.link.rel"
            class="shrink-0 px-4 py-2 font-sans text-base font-medium text-white bg-primary-600 rounded-lg shadow-md hover:bg-primary-700 outline-none outline-offset-2 focus:outline-dashed focus:outline-primary-500"
          >
            {{ appConfig.stylo.footer.action.link.text }}
          </a>
        </div>
        <!-- <form
          class="flex flex-col md:flex-row w-full max-w-md mx-auto gap-3"
          action="#"
          method="post"
        >
          <div class="relative grow">
            <input
              id="email"
              name="email"
              type="text"
              class="rounded-lg flex-1 appareance-none border border-muted-300 dark:border-muted-700/70 w-full py-2 px-4 bg-white dark:bg-muted-800 font-sans text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-700 shadow-sm text-base outline-none outline-offset-2 focus:outline-dashed focus:outline-primary-500 transition-all duration-300"
              placeholder="Email"
            />
          </div>

          <button
            class="shrink-0 px-4 py-2 font-sans text-base font-medium text-white bg-primary-600 rounded-lg shadow-md hover:bg-primary-700 outline-none outline-offset-2 focus:outline-dashed focus:outline-primary-500"
            type="submit"
          >
            Subscribe
          </button>
        </form> -->
      </div>
    </div>
  </div>
</template>
