<script setup lang="ts">
import { hash } from 'ohash'
import type { CategoryPage } from '../../types'

const props = withDefaults(
  defineProps<{
    filters?: Record<string, any>
    sort?: Record<string, any>
    skip?: number
    limit?: number
    narrow?: boolean
    muted?: boolean
  }>(),
  {
    skip: 0,
    limit: 4,
    filters: () => ({}),
    sort: () => ({ publishDate: -1 }),
  }
)

const route = useRoute()
const requestKey = computed(() =>
  hash({ ...props, layout: 'category', path: route.path })
)

const { data: categories } = await useAsyncData(
  requestKey.value,
  () =>
    queryContent<CategoryPage>()
      .only([
        '_path',
        'cover',
        'author',
        'title',
        'description',
        'category',
        'publishDate',
      ])
      .where({ layout: 'category', ...props.filters })
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

      <div v-if="!categories?.length">
        <AppSectionPlaceholder
          title="No categories found"
          subtitle="We couldn't find any categories to display. Add your first category using your Nuxt studio account."
        >
          <ImagePlaceholderCategories class="w-full max-w-sm mx-auto mb-6" />
        </AppSectionPlaceholder>
      </div>
      <div v-else class="grid ptablet:grid-cols-2 md:grid-cols-4 gap-4">
        <NuxtLink
          v-for="category of categories"
          :key="category._path"
          :to="category._path"
          class="relative block group"
        >
          <CategoryCard :category="category" />
        </NuxtLink>
      </div>
    </AppContainer>
  </AppSection>
</template>
