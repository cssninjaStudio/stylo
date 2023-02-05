<script setup lang="ts">
const { toc } = useContent()
const mobileTocOpen = ref(false)
const target = ref(null)

onClickOutside(target, (event) => (mobileTocOpen.value = false))

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
  <div ref="target" class="relative z-10">
    <div class="block ltablet:hidden lg:hidden mb-4 ltablet:mb-0 lg:mb-0">
      <button
        type="button"
        class="w-10 h-10 flex items-center justify-center rounded-lg bg-muted-200 dark:bg-muted-800 text-muted-500 dark:text-muted-100"
        @click="mobileTocOpen = true"
      >
        <Icon name="lucide:menu" class="w-4 h-4" />
      </button>
    </div>
    <template v-if="toc?.links?.length">
      <div
        class="w-72 ltablet:w-auto lg:w-auto p-5 ltablet:p-0 lg:p-0 border border-muted-200 ltablet:border-none lg:border-none rounded-lg ltablet:rounded-none lg:rounded-none bg-white ltablet:bg-transparent lg:bg-transparent shadow-xl shadow-muted-300/30 ltablet:shadow-none lg:shadow-none"
        :class="mobileTocOpen ? 'block' : 'hidden lg:block ltablet:block'"
      >
        <div
          class="pl-6 border-l-2 border-l-muted-100 dark:border-l-muted-700 pt-1 pb-5 text-muted-500 dark:text-muted-400 uppercase tracking-wide font-heading text-xs"
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
                  ? 'border-l-primary-400 dark:border-l-primary-600 text-muted-600 dark:text-muted-100'
                  : 'border-l-muted-100 dark:border-l-muted-700 text-muted-400 dark:text-muted-500',
              ]"
              class="pl-6 truncate line-clamp-1 border-l-2 block py-1.5 transition-colors duration-200"
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
                      ? 'border-l-primary-400 dark:border-l-primary-600 text-muted-600 dark:text-muted-100'
                      : 'border-l-muted-100 dark:border-l-muted-700 text-muted-400 dark:text-muted-500',
                  ]"
                  class="pl-6 truncate line-clamp-1 border-l-2 block pb-1 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-200"
                >
                  <span>{{ sublink.text }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
