<template>
  <input v-model="input"/>
  <button @click="setQuery">搜索</button>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Something went wrong ...</div>
  <ul v-else class="news-list">
    <li v-for="item of newsList" :key="item.objectId">
      <a :href="item.url" target="_blank">{{item.title}}</a>
    </li>
  </ul>
  
</template>

<script>
import { defineComponent, onMounted, reactive, watchEffect, toRefs } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'HackerNews',
  setup() {
    const state = reactive({
      input: '',
      query: '',
      newsList: [],
      error: false,
      loading: false,
    })

    const getNews = async (query) => {
      state.error = false
      state.loading = true
      try {
        const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
        state.newsList = res.data.hits
      } catch {
        state.error = true
      }
      state.loading = false
    }

    const setQuery = () => {
      state.query = state.input
    }

    onMounted(() => {
      watchEffect(() => {
        getNews(state.query)
      })
    })

    return {
      ...toRefs(state),
      setQuery
    }
  }
})
</script>

<style scoped>

</style>