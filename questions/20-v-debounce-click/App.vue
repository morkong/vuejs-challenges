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

/**
 * 自定义指令：v-debounce-click
 * 为元素添加防抖点击事件
 */
const VDebounceClick = {
  mounted(el: HTMLElement, binding: any) {
    const delay = binding.arg ? parseInt(binding.arg) : 200
    const handler = binding.value
    
    if (typeof handler !== 'function') {
      console.warn('v-debounce-click directive expects a function as value')
      return
    }
    
    const debouncedHandler = debounce(handler, delay)
    el._debouncedClickHandler = debouncedHandler
    el.addEventListener('click', debouncedHandler)
  },
  
  beforeUnmount(el: HTMLElement) {
    if (el._debouncedClickHandler) {
      el.removeEventListener('click', el._debouncedClickHandler)
      delete el._debouncedClickHandler
    }
  }
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
