import request from '@/utils/request'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryBreadNavRequest = (id) => {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}
