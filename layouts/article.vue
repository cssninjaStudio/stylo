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

  globals: any
  navigation: any
  surround: any
  excerpt: any
  toc: any
  type: any
  layout: any
} = useContent()
</script>

<template>
  <div v-if="page" class="relative">
    <ArticleHero :article="page" />
    <AppSection class="relative bg-white dark:bg-muted-900 min-h-[75vh]">
      <AppContainer>
        <div
          :class="
            page.toc
              ? 'max-w-4xl xxl:max-w-5xl justify-center mx-auto flex w-full'
              : 'max-w-2xl xxl:max-w-3xl mx-auto'
          "
        >
          <div
            :class="page._empty ? 'mx-auto' : ''"
            class="w-full grow prose-img:rounded-xl prose prose-muted prose-primary xxl:prose-lg dark:prose-invert"
          >
            <slot />
          </div>

          <div
            v-if="page.toc"
            class="absolute top-12 left-4 sm:left-24 ltablet:relative ltablet:left-0 ltablet:top-0 ltablet:pl-12 ltablet:pt-12 ltablet:shrink-0 ltablet:w-72 lg:relative lg:left-0 lg:top-0 lg:pl-12 lg:pt-12 lg:shrink-0 lg:w-72 xxl:pl-24"
          >
            <AppPageToc class="sticky top-36" />
          </div>
        </div>

        <div class="max-w-2xl xxl:max-w-3xl mx-auto">
          <!-- Tags -->
          <div
            class="py-10 mt-10 border-t border-muted-200 dark:border-muted-700/60"
          >
            <ArticleTags :tags="page.tags" />
          </div>

          <!-- Back -->
          <div class="pb-16 flex justify-between">
            <div class="w-1/3">
              <NuxtLink
                v-if="next && next.layout === 'article'"
                class="group font-sans text-sm no-underline"
                :to="next._path"
              >
                <span class="flex flex-col gap-1">
                  <span
                    class="flex items-center gap-2 text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500"
                  >
                    <Icon
                      name="lucide:arrow-left"
                      class="w-4 h-4 translate-x-0 group-hover:-translate-x-1 group-focus:-translate-x-1 transition-transform duration-300"
                    />
                    <span>Newer article</span>
                  </span>
                  <span class="truncate text-muted-500" :title="next.title">
                    {{ next.title }}
                  </span>
                </span>
              </NuxtLink>
            </div>

            <div class="w-1/3">
              <NuxtLink
                v-if="prev && prev.layout === 'article'"
                class="group font-sans text-sm no-underline"
                :to="prev._path"
              >
                <span class="flex flex-col gap-1">
                  <span
                    class="flex justify-end items-center gap-2 text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500"
                  >
                    <span>Older article</span>
                    <Icon
                      name="lucide:arrow-right"
                      class="w-4 h-4 translate-x-0 group-hover:translate-x-1 group-focus:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                  <span class="truncate text-muted-500" :title="prev.title">
                    {{ prev.title }}
                  </span>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </AppContainer>
    </AppSection>
  </div>
</template>
