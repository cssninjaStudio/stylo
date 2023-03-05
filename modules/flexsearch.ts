import {
  defineNuxtModule,
  createResolver,
} from '@nuxt/kit'

export interface ModuleOptions {
}


export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'flexsearch'
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.devStorage = nitroConfig.devStorage || {}
      nitroConfig.devStorage['flexsearch'] = {
        driver: 'fs',
        base: resolve(nuxt.options.buildDir, 'flexsearch')
      }
    })
  }
})