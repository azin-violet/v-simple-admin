import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// jsx
import vueJsx from '@vitejs/plugin-vue-jsx'
// plugins
import ElementPlus from 'unplugin-element-plus/vite'
import WindiCss from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'

import {resolve} from 'path'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ElementPlus(),
    WindiCss(),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  }
})

