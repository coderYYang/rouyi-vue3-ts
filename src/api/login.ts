import request from '@/utils/request'
import { type LoginParams } from '@/typings/api/login'

/**
 * @description: 登录方法
 * @param {object} data
 * @return {*}
 */
export function Login(data: LoginParams) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

/**
 * @description: 注册方法
 * @param {any} data
 * @return {*}
 */
export function register(data: any) {
  return request({
    url: '/register',
    method: 'post',
    data,
    headers: { isToken: false }
  })
}

/**
 * @description: 获取用户详细信息
 * @return {*}
 */
export function getInfo() {
  return request({
    url: '/getInfo'
  })
}

/**
 * @description: 退出方法
 * @return {*}
 */
export function Logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

/**
 * @description: 获取验证码
 * @return {*}
 */
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    timeout: 20000,
    headers: { isToken: false }
  })
}
