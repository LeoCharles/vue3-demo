<template>
  <div class="counter">
    <span>计数器：</span>
    <button @click="addCount">增加</button>
    <span class="count">{{count}}</span>
    <button @click="minusCount">减少</button>
  </div>
</template>

<script>
import { defineComponent, ref, watch, computed } from 'vue'

export default defineComponent({
  name: 'Counter',
  props: {},
  setup(props, context) {
    console.log(context.attrs)
    console.log(context.slots)
    console.log(context.slots)


    const count = ref(0)

    const addCount = () => {
      count.value++
    }
    const minusCount = () => {
      count.value--
    }

    watch(count, (newVal, oldVal) => {
      console.log('watch:', newVal, oldVal)
    })

    const twiceCount = computed(() => {
      return count.value * 2
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