<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <AppNavbar />
    <div>
      <slot />
    </div>
    <AppFooterAction v-if="appConfig.stylo.footer?.action?.enabled" />
    <AppFooter />
  </div>
</template>
