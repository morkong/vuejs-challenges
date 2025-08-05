<script setup lang="ts">
// 添加代码,使`count`值注入子组件
import { inject } from 'vue';
const count = inject('count', 0); // 默认值为0，如果没有提供
</script>

<template>
  {{ count }}
</template>