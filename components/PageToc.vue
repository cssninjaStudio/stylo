<script setup lang="ts">
const { toc } = useContent()

function reduceIds(links: any): string[] {
  if (!links) return []
  return links?.reduce((acc: any, link: any) => {
    acc.push(link.id)
    if (link.children) {
      acc.push(...reduceIds(link.children))
    }
    return acc
  }, [] as string[])
}

const headerIds = computed(() => reduceIds(toc.value?.links))
const intersectingId = ref<string>()
let observer: IntersectionObserver

onMounted(() => {
  const headers = headerIds.value.map((id) => document.getElementById(id))
  if (!headers.length) return

  observer?.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingId.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '65px 0px -75% 0px',
    }
  )

  headers.forEach((header: HTMLElement | null) => {
    if (header) {
      observer.observe(header)
    }
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div>
    <template v-if="toc?.links?.length">
      <div
        class="pl-4 border-l-2 border-l-muted-100 dark:border-l-muted-700 pt-1 pb-2 text-muted-500 dark:text-muted-400 uppercase tracking-wide font-heading text-xs"
      >
        <span>On this page</span>
      </div>

      <ul class="text-sm">
        <li v-for="link in toc.links" :key="link.id">
          <a
            :href="`#${link.id}`"
            :title="link.text"
            :class="[
              intersectingId === link.id
                ? 'border-l-primary-400 dark:border-l-primary-600 text-muted-500 dark:text-muted-400'
                : 'border-l-muted-100 dark:border-l-muted-700 text-muted-400 dark:text-muted-500',
            ]"
            class="pl-4 truncate border-l-2 block pb-1 text-muted-400 hover:text-primary-500 dark:text-muted-500 dark:hover:text-primary-500 transition-colors duration-200"
          >
            <span>{{ link.text }}</span>
          </a>

          <ul v-if="link.children">
            <li v-for="sublink in link.children" :key="sublink.id">
              <a
                :href="`#${sublink.id}`"
                :title="sublink.text"
                :class="[
                  intersectingId === sublink.id
                    ? 'border-l-primary-400 dark:border-l-primary-600 text-muted-500 dark:text-muted-400'
                    : 'border-l-muted-100 dark:border-l-muted-700 text-muted-400 dark:text-muted-500',
                ]"
                class="pl-4 truncate border-l-2 block pb-1 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-200"
              >
                <span>{{ sublink.text }}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </div>
</template>
