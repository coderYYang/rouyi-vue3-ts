import { Login, Logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import defAva from '@/assets/images/profile.jpg'
import { type LoginParams } from '@/typings/api/login'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: (): {
    token?: string
    name: string
    avatar: string
    roles: any[]
    permissions: string[]
  } => ({
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    permissions: []
  }),
  actions: {
    /**
     * @description: 登陆
     * @param {object} userInfo
     * @return {*}
     */
    login(userInfo: LoginParams) {
      return new Promise((resolve, reject) => {
        Login(userInfo)
          .then((res: any) => {
            setToken(res.token)
            this.token = res.token
            resolve(1)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 获取用户信息
    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((res: any) => {
            const user = res.user
            const avatar =
              user.avatar === '' || user.avatar == null ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar

            if (res.roles && res.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              this.roles = res.roles
              this.permissions = res.permissions
            } else {
              this.roles = ['ROLE_DEFAULT']
            }
            this.name = user.userName
            this.avatar = avatar
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 退出系统
    logOut() {
      return new Promise((resolve, reject) => {
        Logout()
          .then(() => {
            this.token = ''
            this.roles = []
            this.permissions = []
            removeToken()
            resolve(1)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
})

export default useUserStore
