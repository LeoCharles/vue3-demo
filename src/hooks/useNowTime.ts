import { ref } from 'vue'

const nowTime = ref('0000年00月00日 00:00:00')

const getNowTime = () => {
  const now = new Date()
  const YY = now.getFullYear()
  const MM = now.getMonth() + 1
  const DD = now.getDate()
  const hh = now.getHours()
  const mm = now.getMinutes()
  const ss = now.getSeconds()

  nowTime.value = YY + '年' + MM + '月' + DD + '日' + hh + ':' + mm + ':' + ss

  setTimeout(getNowTime, 1000)
}

export { nowTime, getNowTime}