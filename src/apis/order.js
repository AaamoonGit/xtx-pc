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

/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrderRequest = (params) => {
  return request({
    url: '/member/order',
    method: 'GET',
    params
  })
}
