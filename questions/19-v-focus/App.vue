<script setup lang='ts'>
import { ref } from "vue"

const state = ref(false)

/**
 * 实现一个自定义指令,让元素获取焦点
 * 确保当切换`state`时,元素随着状态值获取/失去焦点
 *
*/

const VFocus = {
  updated(el, binding, vnode, prevVnode) {
    if (binding.value) {
      el.focus()
    }else {
      el.blur()
    }
  },
}

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>

<template>
  <input v-focus="state" type="text">
</template>
