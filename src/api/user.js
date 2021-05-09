import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sessions',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/sessions',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
