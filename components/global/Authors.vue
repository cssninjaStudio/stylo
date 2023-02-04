<script setup lang="ts">
import type { AuthorParsedContent } from '../../types'

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    filters?: Record<string, any>
    sort?: Record<string, any>
    skip?: number
    limit?: number
  }>(),
  {
    title: undefined,
    subtitle: undefined,
    skip: 0,
    limit: 30,
    filters: () => ({}),
    sort: () => ({ publishDate: -1 }),
  }
)

const { data: authors } = await useAsyncData(() =>
  queryContent<AuthorParsedContent>()
    .only(['_path', 'image', 'title', 'description'])
    .where({ layout: 'blog-author', ...props.filters })
    .sort(props.sort)
    .limit(props.limit)
    .skip(props.skip)
    .find()
)
</script>

<template>
  <AppSection class="min-h-screen bg-muted-100 dark:bg-muted-900">
    <AppContainer>
      <AppContainerHeader
        class="pt-20 mb-10"
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
          subtitle="We couldn't find any authors to display. Use your Nuxt Studio account to add authors in your theme configuration."
        >
          <img
            class="w-full max-w-sm mx-auto mb-6"
            src="/img/illustrations/placeholder/placeholder-3.svg"
            alt="Add some categories"
          />
        </SectionPlaceholder>
      </div>
      <!-- Authors list -->
      <div
        v-else
        class="mt-6 grid sm:grid-cols-2 ltablet:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AuthorCard
          v-for="author in authors"
          :key="author._path"
          :author="author"
        />
      </div>
    </AppContainer>
  </AppSection>
</template>
