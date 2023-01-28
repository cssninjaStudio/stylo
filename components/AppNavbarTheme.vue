
<script setup lang="ts">
const colorMode = useColorMode()

function toggleTheme() {
  //
}
</script>

<template>
  <div
    class="relative p-1 rounded-full max-w-[104px] bg-muted-100 dark:bg-muted-900"
  >
    <div class="relative flex">
      <button
        id="theme-option-0"
        class="relative z-10 h-8 w-8 flex items-center justify-center"
        role="option"
        data-theme="system"
        @click="colorMode.preference = 'system'"
      >
        <span class="pointer-events-none">
          <Icon
            class="h-4 w-4"
            :class="
              colorMode.preference === 'system'
                ? 'text-primary-500'
                : 'text-muted-400 dark:text-muted-600'
            "
            name="ph:monitor-duotone"
          />
        </span>
      </button>
      <button
        id="theme-option-1"
        class="relative z-10 h-8 w-8 flex items-center justify-center"
        role="option"
        @click="colorMode.preference = 'light'"
      >
        <span class="pointer-events-none">
          <Icon
            class="h-4 w-4"
            name="ph:sun-duotone"
            :class="
              colorMode.preference === 'light'
                ? 'text-yellow-400'
                : 'text-muted-400 dark:text-muted-600'
            "
          />
        </span>
      </button>
      <button
        id="theme-option-2"
        class="relative z-10 h-8 w-8 flex items-center justify-center"
        role="option"
        @click="colorMode.preference = 'dark'"
      >
        <span class="pointer-events-none">
          <Icon
            class="h-4 w-4"
            name="ph:moon-duotone"
            :class="
              colorMode.preference === 'dark'
                ? 'text-yellow-400'
                : 'text-muted-400 dark:text-muted-600'
            "
          />
        </span>
      </button>
      <div
        class="absolute top-0 left-0 w-8 h-8 rounded-full bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 z-0 transition-all duration-300"
        :class="[
          colorMode.preference === 'system' ? 'ml-0' : '',
          colorMode.preference === 'light' ? 'ml-[33.3%]' : '',
          colorMode.preference === 'dark' ? 'ml-[66.6%]' : '',
        ]"
      ></div>
    </div>
  </div>
</template>
