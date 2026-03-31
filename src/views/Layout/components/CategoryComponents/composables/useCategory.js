// 获取分类相关代码
import { getCategoryBreadNavRequest } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export const useCategory = () => {
  const route = useRoute()
  // console.log(route.params.id)
  const breadName = ref('')
  const categoryData = ref([])
  const getBreadNav = async (id) => {
    const res = await getCategoryBreadNavRequest(id || route.params.id)
    // console.log(res)
    breadName.value = res.result.name
    categoryData.value = res.result
  }
  onMounted(() => {
    getBreadNav()
  })

  onBeforeRouteUpdate((to) => {
    console.log(123)
    console.log(to)

    getBreadNav(to.params.id)
  })

  return { breadName, categoryData }
}
