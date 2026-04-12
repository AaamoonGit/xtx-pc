import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

export const usePayCountDown = () => {
  const formatTime = ref(30)

  const formattedTime = computed(() => {
    return dayjs.unix(formatTime.value).format('mm分ss秒')
  })

  let timer = null
  const startCount = (time) => {
    formatTime.value = time
    // 倒计时
    timer = setInterval(() => {
      formatTime.value--

      if (formatTime.value <= 0) {
        clearInterval(timer)
        timer = null
      }
    }, 1000)

    // const {start} =  useCountdown(formatTime.value,{
    //   onFinish: () => {
    //     formatTime.value = 0
    //   },
    //   onTick: () => {
    //     formatTime.value --
    //     // console.log(formatTime.value);

    //   }
    // })

    // start(formatTime.value)
  }

  onUnmounted(() => {
    timer && clearInterval(timer)
    timer = null
  })

  return { formatTime, startCount, formattedTime }
}
