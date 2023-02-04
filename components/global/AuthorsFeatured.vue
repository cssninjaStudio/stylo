<script setup lang="ts">
import type { AuthorParsedContent } from '../../types'

const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const { data: authors } = await useAsyncData(() =>
  queryContent<AuthorParsedContent>()
    .only(['_path', 'image', 'title', 'description'])
    .where({ layout: 'blog-author', featured: true })
    .limit(5)
    .find()
)
</script>

<template>
  <AppSection class="bg-white dark:bg-muted-900">
    <AppContainer>
      <AppContainerHeader
        class="py-10"
        :title="props.title"
        :subtitle="props.subtitle"
      >
        <template #title>
          <ContentSlot :use="$slots.title" unwrap="p" />
        </template>
        <template #subtitle>
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </template>
        <template #links>
          <ContentSlot :use="$slots.links" unwrap="p" />
        </template>
      </AppContainerHeader>
      <!-- Placeholder -->
      <div v-if="authors?.length === 0">
        <SectionPlaceholder
          title="No authors found"
          subtitle="We couldn't find any authors to display. Start by writing your first blog post and you'll end up here."
        >
          <img
            class="w-full max-w-md mx-auto mb-6"
            src="/img/illustrations/placeholder/placeholder-3.svg"
            alt="Write some articles"
          />
        </SectionPlaceholder>
      </div>
      <!-- Authors list -->
      <div
        v-else
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8"
      >
        <AuthorGrid
          v-for="author in authors"
          :key="author._path"
          :author="author"
        />
      </div>
    </AppContainer>
  </AppSection>
</template>
