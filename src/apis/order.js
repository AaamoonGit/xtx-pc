import request from '@/utils/request'

export const getOrderListRequest = () => {
  return request({
    url: '/member/order/pre'
  })
}
