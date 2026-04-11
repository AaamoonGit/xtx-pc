import request from '@/utils/request'

/**
 * @description: 添加购物车
 * @param {*} data
 * @return {*}
 */
export const addCartRequest = (data) => {
  const { skuId, count } = data
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

/**
 * @description: 获取购物车列表
 * @return {*}
 */
export const getCartListRequest = () => {
  return request({
    url: '/member/cart'
  })
}

/**
 * @description: 删除购物车商品(单个/批量)
 * @param {Array} ids
 * @return {*}
 */
export const deleteCartRequest = (ids) => {
  console.log(ids)

  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}
