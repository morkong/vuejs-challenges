<script setup>
import { ref,nextTick } from "vue"

const count = ref(0)
const counter = ref(null);
function increment() {
  count.value++

  /**
   * DOM还未更新,如何确保DOM已经更新 ?
   * 请保证以下输出为true
  */
  nextTick(()=>{
    console.log(+counter.value.textContent === 1)
  })
  
}
</script>

<template>
  <button ref="counter" @click="increment">
    {{ count }}
  </button>
</template>