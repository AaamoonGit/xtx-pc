import { defineStore } from 'pinia'
import { getHeaderNavRequest } from '@/apis/layout'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const NavList = ref([])
  const getHeaderNav = async () => {
    const res = await getHeaderNavRequest()
    // console.log(res.result)
    NavList.value = res.result
  }

  return { NavList, getHeaderNav }
})
