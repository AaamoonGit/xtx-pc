<script setup>
import { getIndexRequest } from './apis/test'
/**
 * 请求测试
 */
const getIndex = async () => {
  const res = await getIndexRequest()
  console.log(res)
}
getIndex()
</script>
<template>
  <div>123</div>
  <el-button type="primary">新色</el-button>
</template>
