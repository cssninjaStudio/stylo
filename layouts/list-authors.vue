<script setup lang="ts">
const { page } = useContent()

const filters = computed(() => ({
  _file: { $contains: page.value?._path?.substring(1) },
}))
</script>

<template>
  <div>
    <Authors :mode="page.mode" :filters="filters" :limit="15" muted fullscreen>
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
    </Authors>
  </div>
</template>
