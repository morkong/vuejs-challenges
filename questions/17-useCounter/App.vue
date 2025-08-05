<script setup lang='ts'>
import { ref } from 'vue'
interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * 实现计数器函数,确保功能正常工作
 * 1. 加 (+)
 * 2. 减 (-)
 * 3. 重置 
 * 4. 最小值 & 最大值 选项支持
*/
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const count = ref(initialValue)
  const { min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY } = options

  function inc() {
    if (count.value < max) {
      count.value++
    }
  }

  function dec() {
    if (count.value > min) {
      count.value--
    }
  }

  function reset() {
    count.value = initialValue
  }

  return { count, inc, dec, reset }
}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })

</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="inc">
    inc
  </button>
  <button @click="dec">
    dec
  </button>
  <button @click="reset">
    reset
  </button>
</template>
