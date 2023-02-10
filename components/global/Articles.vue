<script setup lang="ts">
import { hash } from 'ohash'
import type { ArticlePage } from '../../types'

const props = withDefaults(
  defineProps<{
    filters?: Record<string, any>
    sort?: Record<string, any>
    skip?: number
    limit?: number
    narrow?: boolean
    muted?: boolean
    mode?: 'grid' | 'card' | 'wide'
  }>(),
  {
    skip: 0,
    limit: 4,
    mode: 'card',
    filters: () => ({}),
    sort: () => ({ publishDate: -1 }),
  }
)

const route = useRoute()
const requestKey = computed(() =>
  hash({ ...props, layout: 'article', path: route.path })
)

const { data: articles } = await useAsyncData(
  requestKey.value,
  () =>
    queryContent<ArticlePage>()
      .only([
        '_path',
        'image',
        'cover',
        'author',
        'title',
        'description',
        'category',
        'publishDate',
        'readingTime',
      ])
      .where({ layout: 'article', ...props.filters })
      .sort(props.sort)
      .limit(props.limit)
      .skip(props.skip)
      .find(),
  {
    watch: [
      () => props.filters,
      () => props.sort,
      () => props.skip,
      () => props.limit,
    ],
  }
)
</script>

<template>
  <AppSection
    class="pb-0"
    :class="
      props.muted
        ? 'bg-muted-100 dark:bg-muted-1000'
        : 'bg-white dark:bg-muted-900'
    "
  >
    <AppContainer class="pb-20 border-b border-muted-200 dark:border-muted-800">
      <AppContainerHeader
        v-if="'title' in $slots || 'subtitle' in $slots || 'links' in $slots"
        class="mb-10"
        :class="props.narrow ? '' : 'pt-20'"
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

      <div v-if="!articles?.length">
        <AppSectionPlaceholder
          title="No articles found"
          subtitle="We couldn't find any posts to display. Start by writing your first blog post using your Nuxt studio account."
        >
          <ImagePlaceholderArticles class="w-full max-w-md mx-auto mb-6" />
        </AppSectionPlaceholder>
      </div>
      <template v-else>
        <div
          v-if="props.mode === 'card'"
          class="grid md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 ltablet:gap-4 gap-6"
        >
          <ArticleCard
            v-for="article in articles"
            :key="article._path"
            :article="article"
          />
        </div>
        <div
          v-else-if="props.mode === 'grid'"
          class="relative grid ptablet:grid-cols-2 md:grid-cols-4 gap-4 -mt-2"
        >
          <ArticleGrid
            v-for="article in articles"
            :key="article._path"
            :article="article"
          />
        </div>
        <div
          v-else
          class="relative grid ptablet:grid-cols-2 md:grid-cols-3 gap-2 pt-4"
        >
          <ArticleWide
            v-for="article of articles"
            :key="article._path"
            :article="article"
          />
        </div>
      </template>
    </AppContainer>
  </AppSection>
</template>
