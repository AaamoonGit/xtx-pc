import request from '@/utils/request'

export const loginRequest = (data) => {
  console.log(data)

  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
