import { defineStore }  from 'pinia'

export const useAppStore = defineStore({
    id: 'app',
    state: () => {return {
        collapse: false
    }},
    getters: {
        getCollapse(): boolean {
            return this.collapse
        }
    },
    actions: {
        setCollapse(collapse: boolean) {
            this.collapse = collapse
        }
    }
})