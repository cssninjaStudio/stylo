<script setup lang="ts">
const { page } = useContent()

const filters = computed(() => ({
  tags: { $in: page.value?._path },
}))
</script>

<template>
  <div>
    <Articles :mode="page.mode" :filters="filters" :limit="15">
      <template #title>{{ page.title }}</template>
      <template #subtitle>{{ page.description }}</template>
      <template #links>
        <ButtonLinks v-if="page.links?.length">
          <ButtonLink
            v-for="link in page.links"
            :key="link.key"
            :to="link.href"
            :target="link.target"
            :rel="link.rel"
          >
            <Icon v-if="link.icon" :name="link.icon" />
            <span>{{ link.text }}</span>
          </ButtonLink>
        </ButtonLinks>
      </template>
    </Articles>
  </div>
</template>
