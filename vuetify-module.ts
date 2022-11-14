import type { UserConfig } from 'vite'

import { defineNuxtModule, extendViteConfig } from '@nuxt/kit'
import vuetify from 'vite-plugin-vuetify'

export const vuetifyModule = defineNuxtModule({
  meta: {
    name: 'modle',
  },

  async setup(options, nuxt) {
    nuxt.options.build.transpile.push('vuetify')

    nuxt.hook('vite:extendConfig', (config) => {
      config.plugins = [
        ...(config.plugins || []),
        vuetify({
          styles: {
            configFile: 'scss/settings.scss',
          }
        }),
      ]

      config.define = {
        ...(config.define || {}),
        'process.env.DEBUG': 'false',
      }
      
      const vuePluginIndex = config.plugins.findIndex((p: any) => p.name === 'vite:vue')
      if (vuePluginIndex !== -1) {
        const vuePlugin = config.plugins.splice(vuePluginIndex, 1)[0]
        config.plugins.unshift(vuePlugin)
      }
    })
  },
})
