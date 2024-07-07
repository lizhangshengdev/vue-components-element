<template>
  <div class="m--choose-icon-dialog-body-height">
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>
    <el-scrollbar>
      <el-dialog :title="title" v-model="visible">
        <div class="container">
          <div class="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index" @click="clickItem(item)">
            <div class="text">
              <component :is="`el-icon-${toLine(item)}`"></component>
            </div>
            <div>{{ item }}</div>
          </div>
        </div>
      </el-dialog>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import * as ElIcons from "@element-plus/icons-vue";
import { toLine } from "../../../utils";
import { useCopy } from "../../../hooks/useCopy";
const props = defineProps<{
  // 标题
  title: string;
}>();

const emits = defineEmits(["update:visible"]);

const visible = ref<boolean>(false);

const handleClick = () => {
  visible.value = !visible.value;
};

const clickItem = (item:string) => {
  let text = `<el-icon-${toLine(item)} />`
  console.log(text)
  useCopy(text)
  visible.value = !visible.value;
}

// watch(
//   () => visible,
//   (newValue, oldValue) => {
//     console.log('New value:', newValue);
//     console.log('Old value:', oldValue);
//   }
// );
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.text {
  font-size: 12px;
}

svg {
  width: 2em;
  height: 2em;
}
</style>
