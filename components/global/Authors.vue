<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const app = useAppConfig()
const authors = computed(() =>
  app.folio.authors.map((a) => a.slug).sort((a, b) => a.localeCompare(b))
)
</script>

<template>
  <AppSection class="bg-muted-100 dark:bg-muted-900">
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

      <div
        class="mt-6 grid sm:grid-cols-2 ltablet:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AuthorCard v-for="author in authors" :key="author" :author="author" />
      </div>
    </AppContainer>
  </AppSection>
</template>