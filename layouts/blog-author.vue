<script setup lang="ts">
const { page } = useContent()

const filters = computed(() => ({
  author: page.value?._path
}))
</script>

<template>
  <div class="min-h-screen">
    <AuthorHero :author="page" />
    <Articles 
      :filters="filters"
      :limit="15"
    >
      <template #title>Publication</template>
      <template #subtitle>
        Here are all the posts written by {{ page.name }}. We hope that you'll find what you are looking for. 
        If you like the content below, please consider supporting our author by connecting with them on social media.
      </template>
      <template #links>
        <TagLinks>
          <TagLink to="/authors"><Icon name="lucide:arrow-left" /><span>Authors</span></TagLink>
        </TagLinks>
      </template>
    </Articles>
  </div>
</template>
