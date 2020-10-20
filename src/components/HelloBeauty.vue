<template>
  <div class="beauty">
    <p>
      <button @click="getBeauty" :disabled="loading">点击获取美女图片</button>
    </p>
    <div v-if="loading">loading...</div>
    <div v-if="imgSrc && !loading" class="img-box">
      <span class="del" @click="delImg" title="删除">X</span>
      <img class="img" :src="imgSrc" alt="beauty">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'HelloBeauty',
  setup() {

    const imgSrc = ref('')
    const loading = ref(false)
    
    // 随机获取美女图片
    const getBeauty = () => {
      loading.value = true

      axios.get('https://uploadbeta.com/api/pictures/random/?key=推女郎', {
        responseType: 'arraybuffer' // 设置响应数据类型为二进制数组
      }).then(res => {
        loading.value = false
        
        // 通过类型化数组来接收二进制数据
        const byteArray = new Uint8Array(res.data)
        
        // 将二进制数据转换成 UTF-16字符串
        const str  = byteArray.reduce((data, byte) => {
          return data + String.fromCharCode(byte)
        }, '')

        // 将字符串进行 base64 编码
        const base64 = btoa(str)

        // 图片地址拼接为 base64 格式的 data URL
        imgSrc.value = 'data:image/png;base64,' + base64

      }).catch(e => {
        loading.value = false
      })
    }

    const delImg = () => imgSrc.value = ''
    
    return {
      imgSrc,
      loading,
      getBeauty,
      delImg
    }
  }
});
</script>

<style scoped>
.beauty {
  width: 300px;
  text-align: center;
}
.img-box {
  position: relative;
}
.img-box:hover .del {
  opacity: 1;
}
.img {
  width: 300px;
  height: 300px;
  object-fit: contain;
}
.del {
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
  color: #42b983;
  opacity: 0;
}
</style>
