<script setup lang='ts'>

import { onMounted,defineCustomElement  } from "vue"

/**
 * 实现以下代码创建一个自定义元素.
 * 确保页面输出 "Hello Vue.js".
*/
const VueJs = defineCustomElement({
  props: {
    message: {
      type: String,
      default: 'Hello Vue.js'
    }
  },
  template: `
          <span>{{ message }}</span>
  `
})

// 确保自定义元素在 Vue 实例挂载后定义
onMounted(() => {
  customElements.define('vue-js', VueJs)
})

onMounted(() => {
  document.getElementById("app")!.innerHTML = "<vue-js message=\"Hello Vue.js\"></vue-js>"
})

</script>

<template>
  <div id="app"></div>
</template>