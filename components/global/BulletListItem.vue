<template>
  <li class="flex gap-4">
    <div
      class="flex items-center justify-center h-7 w-7 min-w-[1.75rem] rounded-full bg-teal-100 dark:bg-teal-500 dark:text-white text-teal-500"
    >
      <Icon name="lucide:check" class="w-3 h-3" />
    </div>
    <div class="font-sans text-muted-500">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </li>
</template>