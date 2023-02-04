<script setup lang="ts">
import type { AuthorParsedContent } from '../../types'

const props = defineProps<{
  title?: string
  description?: string
  cover?: string
  publishDate?: string
  author?: string
  categories?: string[]
}>()

const { data: author } = await useAsyncData(() =>
  !props.author
    ? Promise.resolve(null) 
    : queryContent<AuthorParsedContent>()
      .only(['_path', 'image', 'title'])
      .where({ layout: 'blog-author', _path: props.author })
      .findOne()
)
// @todo: https://github.com/harlan-zw/nuxt-og-image/blob/main/src/runtime/nitro/routes/__og_image__/html.ts#L64
</script>

<template>
  <div
    class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-800"
  >
    <div class="h-2 bg-primary-500 flex absolute bottom-0 left-0 w-full"></div>

    <img src="/favicon.svg" width="99" class="absolute bottom-10 right-10" />
    <div class="pb-10 justify-center items-center flex flex-col">
      <img v-if="cover" :src="cover" width="432" height="243" />
      <h1 class="truncate max-w-5xl mt-10">
        {{ title }}
      </h1>
      <p class="truncate max-w-5xl mx-10 mt-5 text-gray-700">
        {{ description }}
      </p>
      <div v-if="author" class="flex items-center mt-8">
        <img
          v-if="author.image"
          :src="author.image"
          width="80"
          height="80"
          class="rounded-full mr-5"
        />
        <div class="flex flex-col">
          <div class="text-3xl" :style="{ whiteSpace: 'pre' }">
            {{ author.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
