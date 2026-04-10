import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartInfo = ref([])

    /**
     * 添加购物车
     * action
     * @param {*} data
     */
    const addCart = (data) => {
      // cartInfo.value.push(data)
      console.log(data)

      const item = cartInfo.value.find((item) => item.skuId === data.skuId)
      if (item) {
        item.count += data.count
      } else {
        cartInfo.value.push(data)
      }
    }

    return { cartInfo, addCart }
  },
  { persist: true }
)
