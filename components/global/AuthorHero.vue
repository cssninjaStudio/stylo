<script setup lang="ts">
const props = defineProps<{
  author: string
}>()

const { getAuthor } = useAuthorDetails()
const author = computed(() => getAuthor(props.author))
</script>

<template>
  <AppSection v-if="author" class="bg-white dark:bg-muted-900">
    <AppContainer>
      <div class="max-w-xl mx-auto pt-10 mb-8">
        <div>
          <img
            v-if="author.image"
            :src="author.image"
            alt=""
            class="mb-4 h-28 w-28 mx-auto rounded-full object-center object-cover"
          />
          <div class="text-center max-w-md mx-auto mb-4">
            <h1
              class="font-sans font-medium text-2xl text-muted-800 dark:text-white"
            >
              {{ author.name ?? author }}
            </h1>
            <p class="mb-2 font-sans text-muted-400">
              {{ author.description }}
            </p>
            <p class="font-sans text-sm text-muted-500 dark:text-muted-400">
              {{ author.bio }}
            </p>
          </div>
          <div
            class="flex items-center justify-center divide-x divide-muted-200 dark:divide-muted-700"
          >
            <div class="flex items-center gap-2 px-4 text-muted-400">
              <Icon name="lucide:map-pin" class="w-4 h-4" />
              <span class="font-sans text-sm">{{ author.location }}</span>
            </div>
            <div v-if="author.social" class="flex items-center px-4">
              <a
                v-for="link in author.social"
                :key="link.link"
                :href="link.link"
                class="h-7 w-7 flex items-center justify-center rounded-full hover:bg-muted-200 text-muted-400 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
                rel="noopener nofollow"
                target="_blank"
              >
                <Icon v-if="link.icon" :name="link.icon" class="h-3 w-3" />
                <span class="sr-only">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>