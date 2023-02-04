<script setup lang="ts">
import type { AuthorParsedContent } from '../types'

const props = defineProps<{
  path: string
}>()

const { data: author } = await useAsyncData(`author-meta-${props.path}`, () =>
  queryContent<AuthorParsedContent>()
    .only(['_path', 'image', 'title'])
    .where({ layout: 'blog-author', _path: props.path })
    .findOne()
)
</script>

<template>
  <span v-if="author" class="flex items-center gap-2">
    <NuxtLink
      :to="author._path"
      class="h-9 w-9 flex items-center justify-center shrink-0 rounded-full bg-white dark:bg-muted-800"
    >
      <img
        v-if="author?.image"
        :src="author?.image"
        alt=""
        class="h-9 w-9 rounded-full object-cover scale-90"
      />
    </NuxtLink>
    <div>
      <h4 class="font-sans text-sm">
        <NuxtLink
          :to="author._path"
          class="text-white hover:text-primary-300 transition-colors duration-300"
        >
          {{ author?.title }}
        </NuxtLink>
      </h4>
    </div>
  </span>
</template>