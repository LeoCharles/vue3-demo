<template>
  <header class="header">
    <NavBar />
    <Timer />
  </header>
  <main class="main">
    <Counter />
    <HelloBeauty />
    <HackerNews />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import Timer from './components/Timer.vue'
import Counter from './components/Counter.vue'
import HelloBeauty from './components/HelloBeauty.vue'
import HackerNews from './components/HackerNews.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Timer,
    Counter,
    HelloBeauty,
    HackerNews,
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
  color: #2c3e50;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0 50px;
}
button {
  cursor: pointer;
}
a {
  cursor: pointer;
  color: #42b983;
}
</style>
