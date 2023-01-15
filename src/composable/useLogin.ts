import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

export const useLogin = () => {
  const userStore = useUserStore()
  const { push } = useRouter()
  const login = async (userInfo: User) => {
    await userStore.update(userInfo)
    push({ name: 'Dashboard' })
  }

  const logout = async () => {
    await userStore.update({
      username: null,
      password: null,
    })
    push({ name: 'Login' })
  }

  return {
    login,
    logout,
  }
}
