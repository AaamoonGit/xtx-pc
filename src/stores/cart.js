import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './user'
import {
  addCartRequest,
  getCartListRequest,
  deleteCartRequest
} from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartInfo = ref([])
    const userStore = useUserStore()
    const isToken = computed(() => userStore.userInfo.token)

    /**
     * 获取购物车列表
     */
    const getCurrentCartList = async () => {
      if (isToken.value) {
        const res = await getCartListRequest()
        cartInfo.value = res.result
      }
    }

    /**
     * 添加购物车
     * action
     * @param {*} data
     */
    const addCart = async (data) => {
      console.log(data)

      if (isToken.value) {
        // 上传服务器购物车
        await addCartRequest(data)
        getCurrentCartList()
      } else {
        // 本地购物车保存
        const item = cartInfo.value.find((item) => item.skuId === data.skuId)
        if (item) {
          item.count += data.count
        } else {
          cartInfo.value.push(data)
        }
      }
    }

    /**
     * 删除购物车商品
     * @param {*} skuId
     */
    const delCart = async (skuId) => {
      if (isToken.value) {
        // 删除服务器数据
        // delCartRequest(skuId)
        await deleteCartRequest([skuId])
        getCurrentCartList()
      } else {
        cartInfo.value = cartInfo.value.filter((item) => item.skuId !== skuId)
      }
    }

    /**
     * 获取购物车商品总数(不包括每个商品具体的数量)
     */
    const getTotalCart = computed(() => {
      return cartInfo.value.length
    })

    /**
     * 获取购物车商品总价(包括每个商品具体的数量)
     */
    const getTotalPrice = computed(() => {
      return cartInfo.value.reduce((pre, cur) => {
        return pre + cur.price * cur.count
      }, 0)
    })

    const allChecked = ref(false)
    /**
     * 是否选中-单个商品
     * @param {*} skuId
     */
    const CheckedChange = (skuId, selected) => {
      const target = cartInfo.value.find((item) => item.skuId === skuId)
      // console.log(target.skuId, selected)
      target.selected = selected
    }

    /**
     * 单选控制全选
     */
    const isAllChecked = computed(() => {
      // return cartInfo.value.length === 0 ? false : cartInfo.value.every((item) => item.selected === true)
      return (
        cartInfo.value.length > 0 &&
        cartInfo.value.every((item) => item.selected === true)
      )
    })

    /**
     * 全选控制单选
     */
    const CheckedAll = (value) => {
      // console.log(value);

      // allChecked.value = !allChecked.value
      cartInfo.value.forEach((item) => (item.selected = value))
    }

    /**
     * 选中的数量
     */
    const checkedCount = computed(() => {
      return cartInfo.value.filter((item) => item.selected).length
    })

    /**
     * 选中的商品总价
     */
    const checkedPrice = computed(() => {
      return cartInfo.value
        .filter((item) => item.selected)
        .reduce((pre, item) => pre + item.price * item.count, 0)
    })

    return {
      cartInfo,
      addCart,
      delCart,
      getTotalCart,
      getTotalPrice,
      CheckedChange,
      CheckedAll,
      allChecked,
      checkedCount,
      checkedPrice,
      isAllChecked,
      getCurrentCartList
    }
  },
  { persist: true }
)
