<script setup lang="ts">
import type { TagPage } from '../types'

const props = defineProps<{
  tag: Partial<TagPage>
}>()
</script>

<template>
  <NuxtLink :to="props.tag._path" class="group">
    <div class="relative">
      <div
        class="flex items-center gap-4 p-4 rounded-lg border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 group-hover:border-primary-500 dark:group-hover:border-primary-500 group-hover:shadow-xl group-hover:shadow-muted-300/30 dark:group-hover:shadow-muted-900/50 transition-all duration-300"
      >
        <ContentSlot :use="$slots.icon" unwrap="p">
          <Icon
            v-if="props.tag.icon"
            :name="props.tag.icon"
            class="w-6 h-6 text-muted-400 group-hover:text-primary-500 transition-colors duration-200"
          />
        </ContentSlot>
        <div>
          <h3
            class="font-sans text-muted-800 dark:text-muted-100 text-sm font-semibold leading-tight"
          >
            {{ props.tag.short }}
          </h3>
          <!-- <p
            v-if="typeof props.count === 'number'"
            class="font-sans text-muted-400 text-sm font-medium"
          >
            <span>
              {{ props.count }}
              <span>
                {{ props.count > 1 ? 'matching posts' : 'matching post' }}
              </span>
            </span>
          </p> -->
        </div>
      </div>
    </div>
  </NuxtLink>
</template>