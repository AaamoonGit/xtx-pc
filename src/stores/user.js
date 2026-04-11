import { defineStore } from 'pinia'
import { ref } from 'vue'

import { loginRequest } from '@/apis/login'

import { useCartStore } from './cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})

    const getUserInfo = async (data) => {
      const res = await loginRequest(data)
      // console.log(res)
      // const {token} = res.result
      userInfo.value = res.result

      // 合并购物车
      const cartStore = useCartStore()
      const localCart = cartStore.cartInfo
      // console.log(localCart.map(item=>{
      //   return {
      //     skuId: item.skuId,
      //     count: item.count,
      //     selected: item.selected
      //   }
      // }));

      cartStore.mergeCart(
        localCart.map((item) => {
          return {
            skuId: item.skuId,
            count: item.count,
            selected: item.selected
          }
        })
      )
      cartStore.getCurrentCartList()
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
