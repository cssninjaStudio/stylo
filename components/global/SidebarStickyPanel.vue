<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
  image?: string
  actionLink?: string
  actionLabel?: string
}>()
</script>

<template>
  <div
    class="static ptablet:sticky ltablet:sticky lg:sticky inset-x-0 top-24 px-4 py-6 bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 rounded-xl shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
  >
    <div class="text-3xl text-primary-400 mb-4">
      <div
        class="flex ptablet:flex-col ptablet:text-center items-center gap-2 lg:gap-4 mt-4 md:mt-0"
      >
        <div
          v-if="'image' in $slots || props.image"
          class="h-12 w-12 flex items-center justify-center"
        >
          <ContentSlot :use="$slots.image" unwrap="p">
            <img
              :src="props.image"
              class="w-full h-full mask mask-blob"
              alt=""
            />
          </ContentSlot>
        </div>
        <div>
          <h4
            v-if="'title' in $slots || props.title"
            class="font-sans font-semibold text-lg text-muted-800 dark:text-muted-100"
          >
            <ContentSlot :use="$slots.title" unwrap="p">
              {{ props.title }}
            </ContentSlot>
          </h4>
          <p
            v-if="'subtitle' in $slots || props.subtitle"
            class="font-sans text-sm text-muted-400"
          >
            <ContentSlot :use="$slots.subtitle" unwrap="p">
              {{ props.subtitle }}
            </ContentSlot>
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="'action' in $slots || (props.actionLink && props.actionLabel)"
      class="mt-2"
    >
      <ContentSlot :use="$slots.action" unwrap="p">
        <NuxtLink
          :to="props.actionLink"
          class="relative font-sans font-normal inline-flex items-center justify-center leading-5 no-underline space-x-1 text-white bg-primary-500 w-full h-12 px-5 py-3 text-base rounded-lg hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/20 tw-accessibility transition-all duration-300"
        >
          {{ props.actionLabel }}
        </NuxtLink>
      </ContentSlot>
    </div>
  </div>
</template>