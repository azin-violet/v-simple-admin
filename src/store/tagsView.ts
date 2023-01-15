import { defineStore } from 'pinia'

interface tag {
  title: string
  path: string
}

interface TagsViewState {
  visitedViews: tag[]
}

export const useTagStore = defineStore({
  id: 'tagsView',
  state: (): TagsViewState => ({
    visitedViews: [],
  }),
  actions: {
    addTag(tagVal: tag) {
      if (this.visitedViews.some((tag) => tag.path === tagVal.path)) return
      this.visitedViews.push(tagVal)
    },
    delTag(tagVal: tag) {
      for (const [index, val] of this.visitedViews.entries()) {
        if (val.path === tagVal.path) {
          this.visitedViews.splice(index, 1)
          break
        }
      }
    },
    clearOtherTags(path: string) {
      this.visitedViews = this.visitedViews.filter((record) => record.path === path)
    },
    clearAllTags() {
      this.visitedViews = []
    },
  },
})
