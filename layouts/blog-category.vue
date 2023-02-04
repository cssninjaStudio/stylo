<script setup lang="ts">
const { page } = useContent()

const filters = computed(() => ({
  category: page.value?._path
}))
</script>

<template>
  <div class="min-h-screen">
    <Articles :filters="filters" :limit="15">
      <template #title>{{ page.title }}</template>
      <template #subtitle>{{ page.description }}</template>
      <template #links>
        <TagLinks>
          <TagLink to="/categories">
            <Icon name="lucide:arrow-left" />
            <span>Categories</span>
          </TagLink>
        </TagLinks>
      </template>
    </Articles>
  </div>
</template>
