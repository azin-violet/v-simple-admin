import { defineStore }  from 'pinia'

export const useAppStore = defineStore({
    id: 'app',
    state: () => {return {
        collapse: false,
        mobile: false,
    }},
    getters: {
        getCollapse(): boolean {
            return this.collapse
        }
    },
    actions: {
        setCollapse(collapse: boolean) {
            this.collapse = collapse
        },
        setMobile(val: boolean) {
            this.mobile = val
        }
    }
})