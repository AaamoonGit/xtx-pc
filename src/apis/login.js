import request from '@/utils/request'

export const loginRequest = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
