<script setup lang="ts">
import type { BlogParsedContent } from '../types'

const { page }: { page: BlogParsedContent } = useContent()
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
            <div class="pb-16">
              <a
                class="flex items-center gap-2 font-sans text-sm no-underline text-primary-500"
                href="/blog"
              >
                <Icon name="lucide:arrow-left" class="inline-block w-4 h-4" />
                <span>Back to blog</span>
              </a>
            </div>
          </div>
        </AppContainer>
      </AppSection>
    </div>
  </div>
</template>
