import request from '@/utils/request'
export const getOrderDetailRequest = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}
