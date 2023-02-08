<script setup lang="ts">
const { page } = useContent()

const filters = computed(() => ({
  category: page.value?._path,
}))
</script>

<template>
  <div>
    <Articles :filters="filters" :limit="15">
      <template #title>{{ page.title }}</template>
      <template #subtitle>{{ page.description }}</template>
      <template #links>
        <ButtonLinks>
          <ButtonLink to="/categories">
            <Icon name="lucide:arrow-left" />
            <span>Categories</span>
          </ButtonLink>
        </ButtonLinks>
      </template>
    </Articles>
  </div>
</template>
