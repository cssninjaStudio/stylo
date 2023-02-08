<script setup lang="ts">
import type { AuthorParsedContent, BlogParsedContent } from '../types'

const props = defineProps<{
  article: Partial<BlogParsedContent>
}>()

const { formatDate } = useDateFormatter()

const { data: author } = await useAsyncData(
  `author-meta-${props.article.author}`,
  () =>
    !props.article.author
      ? Promise.resolve(null)
      : queryContent<AuthorParsedContent>()
          .only(['_path', 'avatar', 'title', 'subtitle'])
          .where({ layout: 'author', _path: props.article.author })
          .findOne(),
  {
    watch: [() => props.article.author],
  }
)
</script>

<template>
  <div class="relative overflow-hidden last:ptablet:hidden">
    <div v-if="props.article.cover" class="relative">
      <img
        :src="props.article.cover.src"
        :alt="props.article.cover.alt"
        class="block dark:hidden w-full h-[420px] object-cover"
      />
      <img
        :src="props.article.cover.srcDark || props.article.cover.src"
        :alt="props.article.cover.alt"
        class="hidden dark:block w-full h-[420px] object-cover"
      />
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
            {{ formatDate(props.article?.publishDate) }}
          </p>
        </div>
        <h3 class="font-sans font-light text-2xl ptablet:text-xl mb-2">
          <NuxtLink
            :to="props.article._path"
            class="text-white hover:text-primary-300 transition-colors duration-300"
          >
            {{ props.article?.title }}
          </NuxtLink>
        </h3>
        <div class="flex items-center justify-between">
          <div v-if="author" class="flex items-center gap-2">
            <NuxtLink
              v-if="author?.avatar"
              :to="author._path"
              class="h-9 w-9 flex items-center justify-center shrink-0 rounded-full bg-white dark:bg-muted-800"
            >
              <img
                :src="author.avatar.src"
                :alt="author.avatar.alt"
                class="block dark:hidden h-9 w-9 rounded-full object-cover scale-90"
              />
              <img
                :src="author.avatar.srcDark || author.avatar.src"
                :alt="author.avatar.alt"
                class="hidden dark:block h-9 w-9 rounded-full object-cover scale-90"
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
          </div>
          <div
            v-if="props.article.readingTime"
            class="font-sans text-sm text-muted-100"
          >
            <span class="pr-2">—</span>
            <span>{{ props.article.readingTime.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>