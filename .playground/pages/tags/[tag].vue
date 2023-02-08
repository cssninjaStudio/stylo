<script setup lang="ts">
const route = useRoute()
const tag = computed(() => route.params.tag as string)

definePageMeta({
  documentDriven: false,
})
</script>

<template>
  <NuxtLayout name="empty">
    <Articles 
      :filters="{ tags: { $in: [tag] } }"
      :limit="15"
    >
      <template #title>
        Tagged With '{{ tag }}'
      </template>
      <template #subtitle>
        You can find all the posts that are associated with the tag you've selected below. 
        Tags act as a way to mark posts and classify them based on the kind of information they provide.
      </template>
      <template #links>
        <ButtonLinks>
          <ButtonLink to="/tags"><Icon name="lucide:arrow-left" /><span>Tags</span></ButtonLink>
        </ButtonLinks>
      </template>
    </Articles>
  </NuxtLayout>
</template>