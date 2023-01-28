<template>
  <AppSection class="py-20">
    <AppContainer>
      <div class="w-full h-full flex items-center justify-center min-h-screen">
        <div class="relative w-full max-w-2xl mx-auto">
          <!--Error-->
          <div class="flex flex-col gap-4">
            <div class="relative w-full">
              <img
                class="relative block dark:hidden w-full max-w-sm mx-auto object-contain z-20"
                src="/img/illustrations/404.svg"
                alt="Error illustration"
                width="384"
                height="384"
              />
              <img
                class="relative hidden dark:block w-full max-w-sm mx-auto object-contain z-20"
                src="/img/illustrations/404-dark.svg"
                alt="Error illustration"
                width="384"
                height="384"
              />
              <div
                class="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden ptablet:block ltablet:block lg:block ptablet:-translate-x-10 ltablet:-translate-x-24 lg:-translate-x-24 z-10 text-center"
              >
                <span
                  class="font-sans font-extrabold text-[15rem] ptablet:text-[22rem] ltablet:text-[26rem] lg:text-[26rem] text-black dark:text-white opacity-5"
                >
                  201
                </span>
              </div>
            </div>
            <div class="text-center">
              <h2
                class="font-sans text-3xl leading-9 font-medium text-muted-800 dark:text-muted-100 mb-2"
              >
                Your page is empty
              </h2>
              <p
                class="w-full max-w-md mx-auto font-sans text-base text-muted-400"
              >
                This page exist but it is empty. You should add some content to
                the markdown file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>