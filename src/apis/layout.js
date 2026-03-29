import request from '@/utils/request'

export const getHeaderNavRequest = () => {
  return request({
    url: '/home/category/head'
  })
}

export const getBannerRequest = () => {
  return request({
    url: '/home/banner'
  })
}
