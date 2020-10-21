<template>
  <div class="counter">
    <span>计数器：</span>
    <button @click="addCount">增加</button>
    <span class="count">{{count}}</span>
    <button @click="minusCount">减少</button>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'Counter',
  props: {},
  setup(props) {

    const count = ref(0)

    const addCount = () => {
      count.value++
    }
    const minusCount = () => {
      count.value--
    }

    watch(count, (newVal, oldVal) => {
      console.log('新值:' + count.value)
    })

    return {
      count,
      addCount,
      minusCount
    }
  }
}) 
</script>

<style>
.count {
  display: inline-block;
  width: 100px;
  text-align: center;
  font-weight: 700;
  color: #42b983;
}

</style>