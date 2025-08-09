<script setup lang='ts'>

import { ref,watchEffect } from "vue"

/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 * 
*/
const VActiveStyle = {
  mounted(el,binding){
    const [style,condition] = binding.value

     watchEffect(() => {
       Object.keys(style).forEach(key=>{
          el.style[key] = condition() ? style[key] : null
        })
     })
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  console.log(index)
  activeTab.value = index
}

</script>

<template>
  <ul>
    <li
      v-for="(item,index) in list"
      :key="index"
      v-active-style="[{'color':'red'},() => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>
