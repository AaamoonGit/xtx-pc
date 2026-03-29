import request from '@/utils/request'

export const getIndexRequest = () => {
  return request({
    url: '/home/category/head'
  })
}
