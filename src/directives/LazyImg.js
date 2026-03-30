import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 指令书写
    app.directive('lazy-img', {
      mounted(el, binging) {
        // console.log(el,binging.value);
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          // console.log(isIntersecting);

          if (isIntersecting) {
            el.src = binging.value
            stop()
          }
        })
      }
    })
  }
}
