<script setup lang="ts">
const props = defineProps<{
  image?: string
}>()
</script>

<template>
  <AppSection class="bg-muted-100 dark:bg-muted-1000 pb-0 overflow-hidden">
    <AppContainer>
      <div
        class="flex flex-col ltablet:flex-row lg:flex-row ltablet:items-stretch lg:items-stretch"
      >
        <div class="flex-1 flex items-center">
          <div
            class="max-w-md ptablet:mx-auto text-center ltablet:text-left lg:text-left pt-10 ltablet:pt-0 lg:pt-0"
          >
            <h1
              v-if="'title' in $slots"
              class="font-sans text-4xl sm:text-5xl font-medium leading-tight text-muted-800 dark:text-white"
            >
              <ContentSlot :use="$slots.title" unwrap="p" />
            </h1>
            <h3
              v-if="'subtitle' in $slots"
              class="py-2 font-sans font-medium uppercase text-base tracking-widest text-primary-500"
            >
              <ContentSlot :use="$slots.subtitle" unwrap="p" />
            </h3>
            <p class="font-sans text-muted-500 dark:text-muted-400">
              <ContentSlot :use="$slots.default" unwrap="p" />
            </p>
          </div>
        </div>
        <div class="flex-1 flex flex-col items-end">
          <div
            class="relative w-full min-h-[390px] sm:min-h-[480px] flex flex-col justify-end"
          >
            <ContentSlot :use="$slots.image" unwrap="p">
              <img
                :src="props.image"
                class="relative z-10 max-w-[240px] sm:max-w-[290px] mx-auto"
                alt=""
              />
            </ContentSlot>
            <div
              class="absolute top-1/2 left-1/2 translate-x-[-55%] sm:translate-x-[-60%] -translate-y-1/3 h-[380px] w-[380px] mx-auto rounded-full bg-primary-500/20"
            ></div>
          </div>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>