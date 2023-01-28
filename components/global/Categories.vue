<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const app = useAppConfig()
const { getCategory } = useCategoryDetails()
const categories = computed(() => Object.keys(app.folio.categories).sort((a, b) => a.localeCompare(b)))
</script>

<template>
  <AppSection class="bg-white dark:bg-muted-900 pb-0">
    <AppContainer class="pb-20 border-b border-muted-200 dark:border-muted-800">
      <div class="relative">
        <AppContainerHeader class="pt-20 mb-10" :title="props.title" :subtitle="props.subtitle">
          <template #title><slot name="title"></slot></template>
          <template #subtitle><slot name="subtitle"></slot></template>
          <template #links><slot name="links"></slot></template>
        </AppContainerHeader>

        <div class="grid ptablet:grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink
            v-for="category of categories"
            :key="category"
            :to="`/categories/${category}`"
            class="relative block group"
          >
            <Card class="p-3 rounded-xl">
              <div class="relative">
                <img
                  v-if="getCategory(category)?.image"
                  :src="getCategory(category)?.image"
                  alt=""
                  class="relative w-full h-64 bg-muted-100 dark:bg-muted-700/20 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover transition-opacity duration-300"
                />
              </div>
              <div class="mt-2">
                <h3
                  class="font-sans font-medium text-lg capitalize text-muted-700 group-hover:text-primary-500 dark:text-muted-100 dark:group-hover:text-primary-500 transition-colors duration-300"
                >
                  {{ getCategory(category)?.name ?? category }}
                </h3>
                <p v-if="getCategory(category)" class="font-sans text-xs text-muted-500 dark:text-muted-400">
                  {{ getCategory(category)?.description }}
                </p>
              </div>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>