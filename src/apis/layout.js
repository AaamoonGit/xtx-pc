import request from '@/utils/request'

export const getHeaderNavRequest = () => {
  return request({
    url: '/home/category/head'
  })
}
