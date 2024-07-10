<template>
  <div>
    <m-choose-area @change="changeArea" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
const changeArea = (val: any) => {
  console.log(val);
};
</script>

<style lang="less" scoped></style>
