<template>
  <ul class="news-list">
    <li v-for="item in newsList" :key="item.objectId">
      <a :href="item.path" target="_blank">{{item.title}}</a>
    </li>
  </ul>
  
</template>

<script>
import { defineComponent, onMounted, reactive, watchEffect } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'HackerNews',
  setup() {
    const state = reactive({
      query: '',
      newsList: []
    })

    const getNews = async (query) => {
      const res = await axios.post(`https://hn.algolia.com/api/v1/search?query=${query}`)
      state.newsList = res.data.result
    }

    onMounted(() => {
      watchEffect(() => {
        getNews(state.query)
      })
    })

    return state
  }
})
</script>

<style scoped>

</style>