<template>
  <Timer />
  <HelloBeauty />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUpdated, onRenderTracked, onRenderTriggered } from 'vue'
import Timer from './components/Timer.vue'
import HelloBeauty from './components/HelloBeauty.vue'

export default defineComponent({
  name: 'App',
  components: {
    Timer,
    HelloBeauty,
  },
  setup() {
  
    return {}
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
button {
  cursor: pointer;
}
</style>
