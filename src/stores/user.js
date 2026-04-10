import { defineStore } from 'pinia'
import { ref } from 'vue'

import { loginRequest } from '@/apis/login'
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})

    const getUserInfo = async (data) => {
      const res = await loginRequest(data)
      // console.log(res)
      // const {token} = res.result
      userInfo.value = res.result
    }

    const clearUserInfo = () => {
      userInfo.value = {}
    }

    return { userInfo, getUserInfo, clearUserInfo }
  },
  {
    persist: true
  }
)
