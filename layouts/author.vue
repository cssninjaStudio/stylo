<script setup lang="ts">
const { page } = useContent()

const filters = computed(() => ({
  author: page.value?._path,
}))
</script>

<template>
  <div>
    <AuthorHero :author="page" muted />
    <Articles :filters="filters" :limit="15" narrow>
      <template #title>Chef recipes</template>
      <template #subtitle>
        Here are all the posts written by {{ page.title }}. We hope that you'll
        find what you are looking for. If you like the content below, please
        consider supporting our author by connecting with them on social media.
      </template>
      <template #links>
        <ButtonLinks>
          <ButtonLink to="/authors">
            <Icon name="lucide:arrow-left" />
            <span>Authors</span>
          </ButtonLink>
        </ButtonLinks>
      </template>
    </Articles>
  </div>
</template>
