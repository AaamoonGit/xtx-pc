import { defineStore } from 'pinia'
import { getHeaderNavRequest, getBannerRequest } from '@/apis/layout'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const NavList = ref([])
  const getHeaderNav = async () => {
    const res = await getHeaderNavRequest()
    // console.log(res.result)
    NavList.value = res.result
  }

  // 轮播图
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerRequest()
    console.log(res.result)
    bannerList.value = res.result
  }

  return { NavList, getHeaderNav, bannerList, getBanner }
})
