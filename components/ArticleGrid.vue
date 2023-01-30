<script setup lang="ts">
import type { BlogParsedContent } from '../types'

const props = defineProps<{
  article: Partial<BlogParsedContent>
}>()

const { getAuthor } = useAuthorDetails()
const { formatDate } = useDateFormatter()

const image = computed(() => props.article.image || props.article.cover)
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
        <div class="absolute top-4 right-4 z-30">
          <ArticleCategoryBadges :categories="props.article.categories" />
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
              <span v-if="props.article.author" class="flex items-center gap-2">
                <NuxtLink
                  :to="`/authors/${props.article.author}`"
                  class="h-8 w-8 flex items-center justify-center shrink-0 rounded-full bg-white dark:bg-muted-800"
                >
                  <img
                    v-if="getAuthor(props.article.author)?.image"
                    :src="getAuthor(props.article.author)?.image"
                    alt=""
                    class="h-8 w-8 rounded-full object-cover scale-90"
                  />
                </NuxtLink>
                <div>
                  <h4 class="font-sans text-sm">
                    <NuxtLink
                      :to="`/authors/${props.article.author}`"
                      class="text-white hover:text-primary-300 transition-colors duration-300"
                    >
                      {{
                        getAuthor(props.article.author)?.name ??
                        props.article.author
                      }}
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