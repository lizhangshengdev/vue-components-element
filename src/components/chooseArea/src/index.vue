<template>
  <div style="display: flex;gap: 10px;">
    <el-select placeholder="请选择省份" v-model="province">
      <el-option>1</el-option>
    </el-select>
    <el-select placeholder="请选择城市" v-model="city">
      <el-option>2</el-option>
    </el-select>
    <el-select placeholder="请选择区域" v-model="area">
      <el-option>3</el-option>
    </el-select>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
</script>

<style lang='scss' scoped>
</style>