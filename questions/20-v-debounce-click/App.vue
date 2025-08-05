<script setup lang='ts'>

/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持防抖延迟时间选项, 用法如 `v-debounce-click:ms`
 *
*/

function debounce(fn,duration){
  let timer = null 
  return (...args)=>{
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this,args)
    }, duration);
  }
}

const VDebounceClick = {
  mounted(el, binding, vnode) {
    const fn = binding.value
    const duration = binding.arg
    const newFn = debounce(fn,duration)
    el.addEventListener("click",newFn)
  },
}

function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>
