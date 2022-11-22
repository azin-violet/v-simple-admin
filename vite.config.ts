import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import {resolve} from 'path'

const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
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

