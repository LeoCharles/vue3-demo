<template>
  <div class="timer">{{nowTime}}</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { nowTime, getNowTime } from '../hooks/useNowTime'

export default defineComponent({
  name: 'Timer',
  setup() {
    getNowTime()
    return {
      nowTime
    }
  }
})
</script>

<style scoped>
.timer {
  font-size: 16px;
  color: #42b983;
}
</style>