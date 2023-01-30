<script setup lang="ts">
import type { Ref } from 'vue'
import type { ParsedContentMeta } from '@nuxt/content/dist/runtime/types'
import type { BlogParsedContent } from '../types'

const {
  page,
  next,
  prev,
}: {
  page?: Ref<BlogParsedContent>
  next?: Ref<ParsedContentMeta>
  prev?: Ref<ParsedContentMeta>
} = useContent()
</script>

<template>
  <div v-if="page" class="relative">
    <ArticleHero :article="page" />
    <AppSection class="bg-white dark:bg-muted-900">
      <AppContainer>
        <div
          class="max-w-2xl xxl:max-w-3xl mx-auto prose prose-purple xxl:prose-lg dark:prose-invert"
        >
          <slot />

          <!-- Tags -->
          <div
            class="py-10 mt-10 border-t border-muted-200 dark:border-muted-700/60"
          >
            <ArticleTags :tags="page.tags" />
          </div>

          <!-- Back -->
          <div class="pb-16 flex justify-between">
            <NuxtLink
              v-if="next"
              class="w-1/3 flex items-center gap-2 font-sans text-sm no-underline text-primary-500"
              :to="next._path"
            >
              <Icon name="lucide:arrow-left" class="inline-block w-6 h-6" />
              <span class="truncate">{{ next.title }}</span>
            </NuxtLink>

            <NuxtLink
              v-if="prev"
              class="w-1/3 flex items-center gap-2 font-sans text-sm no-underline text-primary-500"
              :to="prev._path"
            >
              <span class="truncate">{{ prev.title }}</span>
              <Icon name="lucide:arrow-right" class="inline-block w-6 h-6" />
            </NuxtLink>
          </div>
        </div>
      </AppContainer>
    </AppSection>
  </div>
</template>
