import request from '@/utils/request'

export const getHeaderNavRequest = () => {
  return request({
    url: '/home/category/head'
  })
}

export const getBannerRequest = (id = '1') => {
  return request({
    url: `/home/banner`,
    params: {
      distributionSite: id
    }
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

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsRequest = () => {
  return request({
    url: '/home/goods'
  })
}

/**
 * @description: 获取商品详情
 * @param {*}
 * @return {*}
 */
export const getDetailRequest = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}
