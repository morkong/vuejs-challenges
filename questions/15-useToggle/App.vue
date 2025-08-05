<script setup lang='ts'>
import { ref } from 'vue'
/**
 * 实现一个切换状态的可组合函数
 * 确保该功能正常工作
*/
function useToggle(_start: boolean = false) {
  const state = ref(_start)

  return [
    state,
    () => {
      state.value = !state.value
    }
  ]
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>