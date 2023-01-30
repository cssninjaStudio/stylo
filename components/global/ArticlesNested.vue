<script setup lang="ts">
import type { BlogParsedContent } from '../../types'

const props = defineProps<{
  title?: string
  subtitle?: string
  path?: string
}>()

const route = useRoute()
const path = computed(() => props.path ?? route.path.substring(1))

const { data: articles } = await useAsyncData(() =>
  queryContent<BlogParsedContent>()
    .only([
      '_path',
      'image',
      'cover',
      'author',
      'title',
      'description',
      'categories',
      'publishDate',
    ])
    .where({ layout: 'blog-post', _file: { $contains: path.value } })
    .sort({ publishDate: -1 })
    .find()
)
</script>

<template>
  <AppSection class="bg-muted-100 dark:bg-muted-900">
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

      <div
        class="grid md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 ltablet:gap-4 gap-6 mb-20"
      >
        <ArticleCard
          v-for="article in articles"
          :key="article._path"
          :article="article"
        />
      </div>
    </AppContainer>
  </AppSection>
</template>