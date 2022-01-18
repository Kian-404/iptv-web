<template>
  <n-layout has-sider class="layout">
    <Sidebar />
    <n-layout >
      <n-layout-header class="header">
        <Header />
      </n-layout-header>
      <n-layout-content class="main" content-style="padding: 24px;">
        <router-view></router-view>
      </n-layout-content>
      <Footer class="footer" />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Header from "./Header/index.vue";
import Sidebar from "./Sidebar/index.vue";
import Footer from "./Footer/index.vue";
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,
  useMessage
} from "naive-ui";
(window as any) .$message = useMessage()
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  .header {
    height: 60px;
  }
  .main {
    height: calc(100vh - 100px);
  }
  .footer {
    height: 40px;
  }
}
</style>