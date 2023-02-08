<script setup lang="ts">
import type { AuthorParsedContent, BlogParsedContent } from '../types'

const props = defineProps<{
  article: Partial<BlogParsedContent>
}>()

const { formatDate } = useDateFormatter()

const { data: author } = await useAsyncAuthorMeta(() => props.article.author)
</script>

<template>
  <AppCard class="p-3 rounded-xl">
    <div class="relative rounded-lg overflow-hidden">
      <div class="relative">
        <img
          v-if="props.article.cover"
          :src="props.article.cover.src"
          :alt="props.article.cover.alt"
          class="block dark:hidden w-full h-[420px] object-cover rounded-lg"
        />
        <img
          v-if="props.article.cover"
          :src="props.article.cover.src"
          :alt="props.article.cover.alt"
          class="hidden dark:block w-full h-[420px] object-cover rounded-lg"
        />
        <div v-if="props.article.category" class="absolute top-4 right-4 z-30">
          <ArticleBadgeCategory :path="props.article.category" />
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
            <p class="text-shadow font-sans text-xs">
              {{ formatDate(props.article.publishDate) }}
            </p>
          </div>
          <h3 class="font-sans font-light text-xl mb-2">
            <NuxtLink
              :to="props.article._path"
              class="text-shadow text-white hover:text-primary-300 transition-colors duration-300"
            >
              {{ props.article.title }}
            </NuxtLink>
          </h3>
          <div class="flex items-center justify-between">
            <div>
              <span v-if="author" class="flex items-center gap-2">
                <NuxtLink
                  v-if="author.avatar"
                  :to="author._path"
                  class="h-8 w-8 flex items-center justify-center shrink-0 rounded-full bg-white dark:bg-muted-800"
                >
                  <img
                    :src="author.avatar.src"
                    :alt="author.avatar.alt"
                    class="block dark:hidden h-8 w-8 rounded-full object-cover scale-90"
                  />
                  <img
                    :src="author.avatar.srcDark || author.avatar.src"
                    :alt="author.avatar.alt"
                    class="hidden dark:block h-8 w-8 rounded-full object-cover scale-90"
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
  </AppCard>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0 0 2px rgb(0 0 0 / 30%);
}
</style>