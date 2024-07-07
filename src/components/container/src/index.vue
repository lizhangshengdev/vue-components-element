<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <!--需要修改父组件的值 通过v-model修改-->
        <nav-header v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import NavSide from "./navSide/index.vue";
import NavHeader from "./navHeader/index.vue";
const isCollapse = ref(false);
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
