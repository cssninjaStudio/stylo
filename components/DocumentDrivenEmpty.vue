
<script setup lang="ts">
const { page, type, layout } = useContent()

const snippetLayout = ref('default')

function wrap(key: string) {
  return `<span class="text-muted-300">${key}</span>`
}

const snippet = computed(() => {
  switch (snippetLayout.value) {
    case 'article':
      return [
        '---',
        `${wrap('layout')}: ${snippetLayout.value}`,
        `${wrap('title')}: My First Article`,
        `${wrap('featured')}: true`,
        `${wrap('description')}: Lorem ipsum dolor sit amet, ...`,
        `${wrap('publishDate')}: ${new Date().toISOString()}`,
        `${wrap('cover')}:`,
        `  ${wrap('src')}: /path/to/cover.png`,
        `  ${wrap('alt')}: My First Article Cover`,
        `${wrap('author')}: /path/to/author`,
        `${wrap('category')}: /path/to/category`,
        '---',
        '',
        '# My Article',
        '',
        'Lorem ipsum dolor sit amet, ...',
      ].join('\n')
    case 'category':
      return [
        '---',
        `${wrap('layout')}: ${snippetLayout.value}`,
        `${wrap('title')}: My Category`,
        `${wrap('featured')}: true`,
        `${wrap('description')}: Lorem ipsum dolor sit amet, ...`,
        `${wrap('cover')}:`,
        `  ${wrap('src')}: /path/to/cover.png`,
        `  ${wrap('alt')}: My Category Cover`,
        '---',
      ].join('\n')
    case 'author':
      return [
        '---',
        `${wrap('layout')}: ${snippetLayout.value}`,
        `${wrap('title')}: My Author`,
        `${wrap('subtitle')}: Tedious Writer`,
        `${wrap('location')}: Miami, FL`,
        `${wrap('company')}: Freelance`,
        `${wrap('featured')}: true`,
        `${wrap('description')}: >`,
        '  Lorem ipsum dolor sit amet, ...',
        `${wrap('avatar')}:`,
        `  ${wrap('src')}: /path/to/avatar.png`,
        `  ${wrap('alt')}: My Author Avatar`,
        `${wrap('social')}:`,
        `  - ${wrap('title')}: Twitter`,
        `    ${wrap('href')}: https://twitter.com/cssninjaStudio`,
        `    ${wrap('icon')}: brandico:twitter`,
        '---',
      ].join('\n')
    case 'list-articles':
      return [
        '---',
        `${wrap('layout')}: ${snippetLayout.value}`,
        `${wrap('title')}: My Blog`,
        `${wrap('description')}: >`,
        '  Lorem ipsum dolor sit amet, ...',
        `${wrap('links')}:`,
        `  - ${wrap('text')}: Authors`,
        `    ${wrap('href')}: /authors`,
        `  - ${wrap('text')}: Categories`,
        `    ${wrap('href')}: /categories`,
        '---',
      ].join('\n')
    case 'list-authors':
      return [
        '---',
        `${wrap('layout')}: ${snippetLayout.value}`,
        `${wrap('title')}: All Authors`,
        `${wrap('description')}: >`,
        '  Lorem ipsum dolor sit amet, ...',
        `${wrap('links')}:`,
        `  - ${wrap('text')}: Back to Articles`,
        `    ${wrap('href')}: /blog`,
        '---',
      ].join('\n')
    case 'list-categories':
      return [
        '---',
        `${wrap('layout')}: ${snippetLayout.value}`,
        `${wrap('title')}: All Categories`,
        `${wrap('description')}: >`,
        '  Lorem ipsum dolor sit amet, ...',
        `${wrap('links')}:`,
        `  - ${wrap('text')}: Back to Articles`,
        `    ${wrap('href')}: /blog`,
        '---',
      ].join('\n')
    case 'default':
    default:
      return [
        '---',
        `${wrap('layout')}: ${snippetLayout.value}`,
        `${wrap('title')}: My Page`,
        `${wrap('description')}: My Page Description`,
        '---',
        '',
        '# My Page',
        '',
        'Lorem ipsum dolor sit amet, ...',
      ].join('\n')
  }
})

// unwrap snippet
const snippetText = computed(() =>
  snippet.value
    .replaceAll('<span class="text-muted-300">', '')
    .replaceAll('</span>', '')
)
</script>

<template>
  <div :class="layout === 'empty' ? 'w-full py-20 px-4 lg:px-6' : ''">
    <AppContainer>
      <div class="w-full h-full flex items-center justify-center pt-10 pb-32">
        <div class="relative w-full max-w-2xl mx-auto">
          <!--Error-->
          <div class="flex flex-col gap-4">
            <!-- <div class="relative w-full">
              <ImagePlaceholderNotFound
                class="relative w-full max-w-sm mx-auto object-contain z-20"
              />
              <div
                class="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden ptablet:block ltablet:block lg:block ptablet:-translate-x-10 ltablet:-translate-x-24 lg:-translate-x-24 z-10 text-center"
              >
                <span
                  class="font-sans font-extrabold text-[15rem] ptablet:text-[22rem] ltablet:text-[26rem] lg:text-[26rem] text-black dark:text-white opacity-5"
                >
                  201
                </span>
              </div>
            </div> -->
            <div class="text-center">
              <h2
                class="font-sans text-3xl leading-9 font-medium text-muted-800 dark:text-muted-100 mb-2"
              >
                Your page is empty
              </h2>
              <div
                class="w-full max-w-md mx-auto font-sans text-base text-muted-400"
              >
                Add content to this page by editing
                <!-- eslint-disable prettier-vue/prettier -->
                <code
                  class="font-semibold text-primary-500 dark:text-primary-400"
                >content/{{ page._file }}</code>
                <!-- eslint-enable prettier-vue/prettier -->

                <ProseCode :code="snippetText" language="markdown">
                  <div class="relative prose-muted">
                    <pre
                      class="text-left mt-4 text-muted-400"
                    ><code v-html="snippet"></code></pre>
                    <select
                      v-model="snippetLayout"
                      class="bg-[var(--tw-prose-pre-bg)] text-primary-500 absolute top-[39px] xxl:top-[44px] left-[75px] font-mono text-sm"
                    >
                      <optgroup
                        label="Content"
                        class="text-muted-200 font-sans"
                      >
                        <option value="article">article</option>
                        <option value="author">author</option>
                        <option value="category">category</option>
                        <option disabled value="tag">tag</option>
                      </optgroup>
                      <optgroup
                        label="Listing"
                        class="text-muted-200 font-sans"
                      >
                        <option value="list-articles">list-articles</option>
                        <option value="list-authors">list-authors</option>
                        <option value="list-categories">list-categories</option>
                        <option disabled value="list-tags">list-tags</option>
                      </optgroup>
                      <optgroup label="Custom" class="text-muted-200 font-sans">
                        <option disabled value="home">home</option>
                        <option disabled value="about">about</option>
                        <option value="default">default</option>
                        <option value="empty">empty</option>
                      </optgroup>
                    </select>
                  </div>
                </ProseCode>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>