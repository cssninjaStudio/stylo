<script setup lang="ts">
import { hash } from 'ohash'
import type { AuthorPage } from '../../types'

const props = withDefaults(
  defineProps<{
    filters?: Record<string, any>
    sort?: Record<string, any>
    skip?: number
    limit?: number
    mode?: 'grid' | 'card'
  }>(),
  {
    skip: 0,
    limit: 30,
    mode: 'card',
    filters: () => ({}),
    sort: () => ({ publishDate: -1 }),
  }
)

const route = useRoute()
const requestKey = computed(() =>
  hash({ ...props, layout: 'author', path: route.path })
)

const { data: authors } = await useAsyncData(
  requestKey.value,
  () =>
    queryContent<AuthorPage>()
      .only(['_path', 'avatar', 'title', 'subtitle'])
      .where({ layout: 'author', ...props.filters })
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
  <AppSection class="bg-muted-100 dark:bg-muted-900 pb-0">
    <AppContainer class="pb-20 border-b border-muted-200 dark:border-muted-800">
      <AppContainerHeader
        v-if="'title' in $slots || 'subtitle' in $slots || 'links' in $slots"
        class="pt-20 mb-10"
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

      <div v-if="!authors?.length">
        <AppSectionPlaceholder
          title="No authors found"
          subtitle="We couldn't find any authors to display. Use your Nuxt Studio account to add authors in your theme configuration."
        >
          <ImagePlaceholderAuthors class="w-full max-w-sm mx-auto mb-6" />
        </AppSectionPlaceholder>
      </div>
      <template v-else>
        <div
          v-if="props.mode === 'card'"
          class="mt-6 grid sm:grid-cols-2 ltablet:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AuthorCard
            v-for="author in authors"
            :key="author._path"
            :author="author"
          />
        </div>
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
      </template>
    </AppContainer>
  </AppSection>
</template>
