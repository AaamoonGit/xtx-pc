import request from '@/utils/request'

export const getOrderListRequest = () => {
  return request({
    url: '/member/order/pre'
  })
}

export const createOrderRequest = (data) => {
  return request({
    url: '/member/order',
    method: 'POST',
    data
  })
}
