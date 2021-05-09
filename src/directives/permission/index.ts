import { DirectiveOptions } from 'vue'
import { UserModule } from '@/store/modules/user'

export const permission: DirectiveOptions = {
  inserted(el, binding) {
    const { value } = binding
    const role = UserModule.role
    if (value && value.length > 0) {
      const permissionRoles = value
      const hasPermission = permissionRoles.includes(role)
      
      if (!hasPermission) {
        el.style.display = 'none'
      }
    } else {
      throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    }
  }
}
