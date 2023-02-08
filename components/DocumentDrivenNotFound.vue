<script setup lang="ts">
</script>

<template>
  <AppContainer>
    <div class="w-full h-full flex items-center justify-center">
      <div class="relative w-full max-w-2xl mx-auto">
        <!--Error-->
        <div class="flex flex-col gap-4">
          <div class="relative w-full">
            <ImagePlaceholderNotFound
              class="relative w-full max-w-sm mx-auto object-contain z-20"
            />

            <div
              class="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden ptablet:block ltablet:block lg:block ptablet:-translate-x-10 ltablet:-translate-x-24 lg:-translate-x-24 z-10 text-center"
            >
              <span
                class="font-sans font-extrabold text-[15rem] ptablet:text-[22rem] ltablet:text-[26rem] lg:text-[26rem] text-black dark:text-white opacity-5"
              >
                404
              </span>
            </div>
          </div>
          <div class="text-center">
            <h2
              class="font-sans text-3xl leading-9 font-medium text-muted-800 dark:text-muted-100 mb-2"
            >
              We couldn't find that page
            </h2>
            <p
              class="w-full max-w-md mx-auto font-sans text-base text-muted-400"
            >
              Sorry, looks like this page doesn't exist. If you run into this
              again, please contact a site administrator.
            </p>
            <!--Link-->
            <NuxtLink
              class="group inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors duration-300 cursor-pointer mt-4"
              to="/"
            >
              <Icon
                name="lucide:arrow-left"
                class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              />
              <span class="font-sans font-medium text-base">Take me Back</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</template>