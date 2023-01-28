<template>
  <AppSection class="bg-white dark:bg-muted-900">
    <AppContainer>
      <div class="relative">
        <div class="text-center mb-8">
          <h2
            class="mb-1 font-sans font-medium text-2xl text-muted-700 dark:text-white"
          >
            Subscribe to our Newsletter
          </h2>
          <p
            class="max-w-sm mx-auto font-sans text-muted-500 dark:text-muted-400"
          >
            Keep up with the latest news, updates and exclusive content by
            subscribing to our newsletter!
          </p>
        </div>
        <form
          class="flex flex-col md:flex-row w-full max-w-md mx-auto gap-3"
          action="#"
        >
          <div class="relative grow">
            <input
              id="email"
              type="text"
              class="rounded-lg border-transparent flex-1 appareance-none border border-muted-300 dark:border-muted-700/70 w-full py-2 px-4 bg-white dark:bg-muted-800 font-sans text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-700 shadow-sm text-base outline-none outline-offset-2 focus:outline-dashed focus:outline-primary-500 transition-all duration-300"
              placeholder="Email"
            />
          </div>

          <button
            class="shrink-0 px-4 py-2 font-sans text-base font-medium text-white bg-primary-600 rounded-lg shadow-md hover:bg-primary-700 outline-none outline-offset-2 focus:outline-dashed focus:outline-primary-500"
            type="button"
          >
            Subscribe
          </button>
        </form>
      </div>
    </AppContainer>
  </AppSection>
</template>
