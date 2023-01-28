<script setup lang="ts">
import { ParsedContentMeta } from '@nuxt/content/dist/runtime/types';
import type { BlogParsedContent } from '../types'

const { page, next, prev }: { 
  page: BlogParsedContent,
  next?: ParsedContentMeta,
  prev?: ParsedContentMeta
} = useContent()
</script>

<template>
  <div>
    <div class="relative">
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
                class="w-1/3 flex items-center gap-2 font-sans text-sm no-underline text-primary-500"
                :to="next._path"
                v-if="next"
              >
                <Icon name="lucide:arrow-left" class="inline-block w-6 h-6" />
                <span class="truncate">{{ next.title }}</span>
              </NuxtLink>

              <NuxtLink
                class="w-1/3 flex items-center gap-2 font-sans text-sm no-underline text-primary-500"
                :to="prev._path"
                v-if="prev"
              >
                <span class="truncate">{{ prev.title }}</span>
                <Icon name="lucide:arrow-right" class="inline-block w-6 h-6" />
              </NuxtLink>
            </div>
          </div>
        </AppContainer>
      </AppSection>
    </div>
  </div>
</template>
