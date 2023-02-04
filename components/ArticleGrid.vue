<script setup lang="ts">
import type { AuthorParsedContent, BlogParsedContent } from '../types'

const props = defineProps<{
  article: Partial<BlogParsedContent>
}>()

const { formatDate } = useDateFormatter()

const image = computed(() => props.article.image || props.article.cover)

const { data: author } = await useAsyncData(() =>
  !props.article._path 
    ? Promise.resolve(null) 
    : queryContent<AuthorParsedContent>()
      .only(['_path', 'image', 'title'])
      .where({ layout: 'blog-author', _path: props.article._path })
      .findOne()
)
</script>

<template>
  <Card class="p-3 rounded-xl">
    <div class="relative rounded-lg overflow-hidden">
      <div class="relative">
        <img
          v-if="image"
          :src="image"
          alt=""
          class="block w-full h-[420px] object-cover rounded-lg"
        />
        <div v-if="props.article.category" class="absolute top-4 right-4 z-30">
          <ArticleCategoryBadge :path="props.article.category" />
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 w-full h-2/3 z-10 bg-gradient-to-t from-muted-1000"
      />
      <div
        class="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end"
      >
        <div class="p-6">
          <div class="flex items-center gap-2 mb-1 mt-4 text-muted-100">
            <Icon name="ph:calendar-blank-duotone" class="w-4 h-4" />
            <p class="font-sans text-xs">
              {{ formatDate(props.article.publishDate) }}
            </p>
          </div>
          <h3 class="font-sans font-light text-xl mb-2">
            <NuxtLink
              :to="props.article._path"
              class="text-white hover:text-primary-300 transition-colors duration-300"
            >
              {{ props.article.title }}
            </NuxtLink>
          </h3>
          <div class="flex items-center justify-between">
            <div>
              <span v-if="author" class="flex items-center gap-2">
                <NuxtLink
                  :to="author._path"
                  class="h-8 w-8 flex items-center justify-center shrink-0 rounded-full bg-white dark:bg-muted-800"
                >
                  <img
                    v-if="author?.image"
                    :src="author?.image"
                    alt=""
                    class="h-8 w-8 rounded-full object-cover scale-90"
                  />
                </NuxtLink>
                <div>
                  <h4 class="font-sans text-sm">
                    <NuxtLink
                      :to="author._path"
                      class="text-white hover:text-primary-300 transition-colors duration-300"
                    >
                      {{ author.title }}
                    </NuxtLink>
                  </h4>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>