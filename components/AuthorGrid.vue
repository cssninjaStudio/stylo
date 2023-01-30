<script setup lang="ts">
const props = defineProps<{
  author: string
}>()

const { getAuthor } = useAuthorDetails()
</script>

<template>
  <div class="group relative flex flex-col justify-center text-center">
    <div
      class="relative h-20 w-20 ptablet:h-24 ptablet:w-24 ltablet:h-24 ltablet:w-24 md:h-28 md:w-28 mx-auto mb-4"
    >
      <img
        v-if="getAuthor(author)?.image"
        :src="getAuthor(author)?.image"
        alt="{author}"
        class="w-full h-full object-center object-cover rounded-full"
      />
    </div>
    <h3 class="font-sans text-lg text-muted-800 dark:text-muted-100">
      <NuxtLink :to="`/authors/${author}`">
        <span class="absolute inset-0" />
        {{ getAuthor(author)?.name ?? author }}
      </NuxtLink>
    </h3>
    <p
      v-if="getAuthor(author)?.description"
      class="font-sans text-sm text-muted-400"
    >
      {{ getAuthor(author)?.description }}
    </p>
  </div>
</template>