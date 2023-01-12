import { defineStore } from "pinia";
import { UserInfo } from "@/constant";
import storage from "@/utils/storage";


export const useUserStore = defineStore({
    id: 'user',
    state: (): User => {
        return {
            username: storage.get<string>(UserInfo.USERNAME),
            password: storage.get<string>(UserInfo.PASSWORD) 
        }
    },
    getters: {
        isAuthorized: (state) => {
            return state.username !== null
        }
    },
    actions: {
        async update(newVal: User) {
            this.$patch(newVal)
            storage.set<string | null>(UserInfo.USERNAME, newVal.username)
            storage.set<string | null>(UserInfo.PASSWORD, newVal.password)
        }
    }
})