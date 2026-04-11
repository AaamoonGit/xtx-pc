import { useUserStore } from '@/stores/user'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

/**
 * 检查用户是否登录，未登录则跳转到登录页
 * @param {string} message - 提示信息
 * @returns {boolean} - 是否已登录
 */
export const checkLogin = (message = '请先登录') => {
  const userStore = useUserStore()

  if (!userStore.userInfo?.token) {
    ElMessage.warning(message)
    return false
  }

  return true
}
