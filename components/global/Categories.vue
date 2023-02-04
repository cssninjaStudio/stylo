<script setup lang="ts">
import type { CategoryParsedContent } from '../../types'

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
    limit: 4,
    filters: () => ({}),
    sort: () => ({ publishDate: -1 }),
  }
)

// const app = useAppConfig()
// const { getCategory } = useCategoryDetails()
// const categories = computed(() =>
//   app.folio.categories.map((c) => c.slug).sort((a, b) => a.localeCompare(b))
// )
const { data: categories } = await useAsyncData(() =>
  queryContent<CategoryParsedContent>()
    .only([
      '_path',
      'image',
      'cover',
      'author',
      'title',
      'description',
      'category',
      'publishDate',
    ])
    .where({ layout: 'blog-category', ...props.filters })
    .sort(props.sort)
    .limit(props.limit)
    .skip(props.skip)
    .find()
)
</script>

<template>
  <AppSection class="bg-white dark:bg-muted-900 pb-0">
    <AppContainer class="pb-20 border-b border-muted-200 dark:border-muted-800">
      <div class="relative">
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
        <div v-if="categories?.length === 0">
          <SectionPlaceholder
            title="No categories found"
            subtitle="We couldn't find any categories to display. Add your first category using your Nuxt studio account."
          >
            <img
              class="w-full max-w-sm mx-auto mb-6"
              src="/img/illustrations/placeholder/placeholder-2.svg"
              alt="Add some categories"
            />
          </SectionPlaceholder>
        </div>
        <!-- Categories list -->
        <div v-else class="grid ptablet:grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink
            v-for="category of categories"
            :key="category._path"
            :to="category._path"
            class="relative block group"
          >
            <Card class="p-3 rounded-xl">
              <div class="relative">
                <img
                  v-if="category.image"
                  :src="category.image"
                  alt=""
                  class="relative w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300"
                />
              </div>
              <div class="mt-2">
                <h3
                  class="font-sans font-medium text-lg capitalize text-muted-700 group-hover:text-primary-500 dark:text-muted-100 dark:group-hover:text-primary-500 transition-colors duration-300"
                >
                  {{ category.title }}
                </h3>
                <p class="font-sans text-xs text-muted-500 dark:text-muted-400">
                  {{ category.description }}
                </p>
              </div>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>