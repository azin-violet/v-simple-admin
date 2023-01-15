import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      collapse: false,
      mobile: false,
      title: 'ViteAdmin',
      repository: 'https://www.bing.com/',
    }
  },
  actions: {
    setCollapse(collapse: boolean) {
      this.collapse = collapse
    },
    setMobile(val: boolean) {
      this.mobile = val
    },
  },
})
