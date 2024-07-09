<template>
  <div style="display: flex;gap: 10px;">
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areas" :key="item.code" :value='item.code' :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disbaled="!province" placeholder="请选择城市" v-model="city">
      <el-option v-for="item in selectCity" :key="item.code" :value='item.code' :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disbaled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :value='item.code' :label="item.name"></el-option>
    </el-select>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import allAreas from './lib/pca-code.json'
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
console.log(allAreas)
let areas = ref(allAreas)

let selectCity = ref<any>([])

let selectArea = ref<any>([])

watch(()=> province.value,(val)=> {
  if(val){
    let cities = areas.value.find(item => item.code === province.value)!.children
    selectCity.value =  cities
  }
  city.value = ''
  area.value = ''
})

watch(()=> city.value,(val)=> {
  if(val){
    let area = selectCity.value.find(item => item.code === city.value)!.children
    selectArea.value =  area
  }
  area.value = ''
})
</script>

<style lang='scss' scoped>
</style>