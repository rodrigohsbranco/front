/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import request from '@/utils/request'

export const getUsers = (params: any) =>
  request({
    url: '/users',
    method: 'get',
    params
  })

export const getUserInfo = (data: any) =>
  request({
    url: '/users',
    method: 'get',
    data
  })

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'get'
  })

export const updateUser = (username: string, data: any) =>
  request({
    url: `/users/${username}`,
    method: 'put',
    data
  })

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'delete'
  })

export const login = (data: any) =>
  request({
    url: '/sessions',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })

export const register = (data: any) =>
  request({
    url: '/users',
    method: 'post',
    data
  })
