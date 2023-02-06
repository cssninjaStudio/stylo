<template>
  <div class="space-y-8">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>