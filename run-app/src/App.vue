<script setup lang='ts'>

import { ref } from "vue"

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
*/
const VOhModel = {
  mounted(el, binding) {
    el.value = binding.value
    el.addEventListener('input', () => {
      value.value = el.value
    })
  },
  update(el, binding) {
    el.value = binding.value
  }
}

const value = ref("Hello Vue.js")

</script>

<template>
  <input v-oh-model:value="value" type="text" />
  <div>{{ value }}</div>
</template>
