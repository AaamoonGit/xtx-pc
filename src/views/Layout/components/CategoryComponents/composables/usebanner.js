// 轮播图相关代码
import { getBannerRequest } from '@/apis/layout'
import { ref, onMounted } from 'vue'

export const useBanner = () => {
  // 获取banner
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerRequest('2')
    // console.log(res)
    bannerList.value = res.result
  }

  onMounted(() => getBanner())

  return { bannerList }
}
