<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const { getAuthor } = useAuthorDetails()
</script>

<template>
  <NuxtLayout name="empty">

    <AuthorHero :author="slug" />
    <Articles 
      :filters="{ author: slug }"
      :limit="15"
      title="Publications"
    >
      <template #subtitle>
        Here are all the posts written by {{ getAuthor(slug)?.name ?? slug }}. We hope that you'll find what you are looking for. 
        If you like the content below, please consider supporting our author by connecting with them on social media.
      </template>
      <template #links>
        <TagLinks>
          <TagLink to="/authors"><Icon name="lucide:arrow-left" /><span>Authors</span></TagLink>
        </TagLinks>
      </template>
    </Articles>
  </NuxtLayout>
</template>