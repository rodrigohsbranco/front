import { VuexModule, Module, Action, Mutation, getModule,config } from 'vuex-module-decorators'
import { login, logout, getUserInfo } from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import store from '@/store'
// Set rawError to true by default on all @Action decorators
config.rawError = true
export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  role: string
  email: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken() || ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public role = ''
  public email = ''

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(role: string) {
    this.role = role
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }

  @Action
  public async Login(userInfo: { username: string, password: string}) {
    const { username, password } = userInfo
    username.trim()
    const { data } = await login({ username, password })
    setToken(data.token)
    this.SET_TOKEN(data.token)
  }

  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES('')
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const { data } = await getUserInfo({})
    // console.log(data)
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const { role, name, email } = data.user
    alert(data.user)
    // roles must be a non-empty array
    if (!role || role.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    this.SET_ROLES(role)
    this.SET_NAME(name)
    // this.SET_AVATAR(avatar)
    // this.SET_INTRODUCTION(introduction)
    this.SET_EMAIL(email)
  }

  @Action
  public async ChangeRoles(role: string) {
    alert(role)
    // Dynamically modify permissions
    const token = role + '-token'
    this.SET_TOKEN(token)
    setToken(token)
    await this.GetUserInfo()
    resetRouter()
    // Generate dynamic accessible routes based on roles
    PermissionModule.GenerateRoutes(this.role)
    // Add generated routes
    PermissionModule.dynamicRoutes.forEach(route => {
      router.addRoute(route)
    })
    // Reset visited views and cached views
    TagsViewModule.delAllViews()
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    await logout()
    removeToken()
    resetRouter()

    // Reset visited views and cached views
    TagsViewModule.delAllViews()
    this.SET_TOKEN('')
    this.SET_ROLES('')
  }
}

export const UserModule = getModule(User)
