/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-04-23 17:28:52
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-04-23 20:38:36
 * @FilePath: /RuoYi-Vue3-ts/src/api/menu.ts
 * @Description: 获取路由
 */

import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/getRouters'
  })
}
