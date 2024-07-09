import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.ts";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from "./utils/index.ts";
import mUI from "./components";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // console.log(`el-icon-${toLine(key)}`)
  app.component(`el-icon-${toLine(key)}`, component); // 全局注册图标 牺牲一点性能
}

app.use(router);
app.use(ElementPlus);
app.use(mUI);
app.mount("#app");
