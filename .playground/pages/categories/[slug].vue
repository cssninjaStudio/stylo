<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const { getCategory } = useCategoryDetails()

definePageMeta({
  documentDriven: false,
})
</script>

<template>
  <NuxtLayout name="empty">
    <Articles 
      :filters="{ categories: { $in: [slug] } }"
      :limit="15"
      :title="getCategory(slug)?.name ?? slug"
      :subtitle="getCategory(slug)?.description"
    >
      <template #links>
        <TagLinks>
          <TagLink to="/categories"><Icon name="lucide:arrow-left" /><span>Categories</span></TagLink>
        </TagLinks>
      </template>
    </Articles>
  </NuxtLayout>
</template>