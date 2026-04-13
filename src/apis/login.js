import request from '@/utils/request'

export const loginRequest = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

export const getLikeListRequest = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
