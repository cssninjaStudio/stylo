<template>
  <div class="not-prose">
    <ul class="space-y-4">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </ul>
  </div>
</template>