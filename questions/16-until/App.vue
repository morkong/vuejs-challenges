<script setup lang='ts'>
import { ref } from "vue"

const count = ref(0)

/**
 * 实现`until`函数
*/

function until(initial) {
  function toBe(value) {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (initial.value === value) {
          clearInterval(interval)
          resolve(1)
        }
      }, 100)
    })
  }

  return {
    toBe,
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // 确保输出为true
}
</script>

<template>
  <div>
    <h1>Until Challenge</h1>
    <p @click="increase">
      {{ count }}
    </p>
  </div>
</template>