<script setup>
import { watch,customRef  } from "vue"

/**
 * 补全以下函数来实现防抖ref :
*/
function useDebouncedRef(value, delay = 200) {  
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
const text = useDebouncedRef("hello")

/**
 * 确保在输入框快速输入时, 只触发一次回调。
*/
watch(text, (value) => {
  console.log(value)
})
</script>

<template>
  <input v-model="text" />
</template>
