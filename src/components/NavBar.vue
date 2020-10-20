<template>
  <ul class="nav-list">
    <li class="nav-item"><a href="/">首页</a></li>
    <li class="nav-item"><a href="/news">看新闻</a></li>
    <li class="nav-item"><a href="/beauty">看美女</a></li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>

<style scoped>
.nav-list {
  list-style: none;
  display: flex;
  padding: 0;
}
.nav-item {
  padding: 0 10px;
}
</style>