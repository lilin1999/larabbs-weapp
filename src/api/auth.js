import { request } from '@/utils/request'

export function refresh(token) {
  return request('authorizations/current', {
    method: 'put',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}
export function login(data) {
  return request('weapp/authorizations', {
    method: 'post',
    data: data
  })
}
export function logout(token) {
  return request('authorizations/current', {
    method: 'delete',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}
