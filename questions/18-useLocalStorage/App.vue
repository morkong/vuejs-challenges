<script setup lang='ts'>

import { ref,watch } from "vue"

/**
 * 实现`useLocalStorage`函数
*/
function useLocalStorage<T>(key: string, initialValue: T) {
  const stored = localStorage.getItem(key)
  const data = stored !== null ? JSON.parse(stored) : initialValue

  const state = ref<T>(data)

  watch(
    state,
    (newVal) => {
      localStorage.setItem(key, JSON.stringify(newVal))
    },
    { deep: true }
  )

  return state
}

const counter = useLocalStorage("counter", 0)

// 我们可以通过触发`counter`的`getter`来获取本地存储的值
console.log(counter.value)

// 同样地,我们也可以通过触发`counter`的`setter`来设置本地存储的值
const update = ()=>{
  counter.value = 1
}

</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="update">
    Update
  </button>
</template>
