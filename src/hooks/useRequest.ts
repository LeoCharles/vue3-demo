import { onMounted, reactive, toRefs, isRef } from 'vue'

interface Option {
  url: string;
  params?: object;
  manual?: boolean;
}

const useRequest = (options: Option) => {
  const { url = '', params = {}, manual = false } = options

  const state = reactive({
    data: {},
    error: false,
    loading: false
  })

  const request = async () => {
    state.error = false
    state.loading = true

    try {
      const result = await fetch(url).then(res => res.json())
      state.data = result
    } catch (e) {
      state.error = true
    }
  }

  onMounted(() => {
    // 第一次是否需手动调用
    !manual && request()
  })

  return {
    request,
    ...toRefs(state)
  }
}

export default useRequest