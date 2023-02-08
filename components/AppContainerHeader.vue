<template>
  <div
    class="relative flex flex-col md:flex-row items-center justify-between gap-y-4"
  >
    <div class="max-w-md lg:max-w-xl space-y-2">
      <h2
        v-if="'title' in $slots"
        class="font-sans font-medium text-4xl capitalize text-muted-700 dark:text-white"
      >
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div
        v-if="'subtitle' in $slots"
        class="font-sans text-sm lg:text-base text-muted-500 dark:text-muted-400"
      >
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </div>
    </div>
    <ButtonLinks v-if="'links' in $slots" class="justify-start md:justify-end">
      <slot name="links"></slot>
    </ButtonLinks>
  </div>
</template>
