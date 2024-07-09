<template>
  <div>
    <div class="inside-shadow"></div>
    <canvas
      width="1500px"
      height="600px"
      id="c"
      style="border: 1px solid #ccc"
      class="design-stage-grid"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { Canvas, Rect } from "fabric"; // browser

const init = () => {
  const canvas = new Canvas("c"); // 这里传入的是canvas的id
  // 创建一个长方形
  const rect = new Rect({
    top: 30, // 距离容器顶部 30px
    left: 30, // 距离容器左侧 30px
    width: 100, // 宽 100px
    height: 60, // 高 60px
    fill: "red", // 填充 红色
  });
  canvas.add(rect);
};

onMounted(() => {
  init();
});
</script>

<style scoped>
.inside-shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 9px 2px #0000001f;
  z-index: 2;
  pointer-events: none;
}
.design-stage-grid {
  --offsetX: 0px;
  --offsetY: 0px;
  --size: 16px;
  --color: #dedcdc;
  background-image: linear-gradient(
      45deg,
      var(--color) 25%,
      transparent 0,
      transparent 75%,
      var(--color) 0
    ),
    linear-gradient(
      45deg,
      var(--color) 25%,
      transparent 0,
      transparent 75%,
      var(--color) 0
    );
  background-position: var(--offsetX) var(--offsetY),
    calc(var(--size) + var(--offsetX)) calc(var(--size) + var(--offsetY));
  background-size: calc(var(--size) * 2) calc(var(--size) * 2);
}
</style>
