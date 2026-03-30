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

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewRequest = () => {
  return request({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotRequest = () => {
  return request({
    url: '/home/hot'
  })
}
