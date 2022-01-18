<template>
  <n-layout-sider
    class="sider"
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="toggleCollapsed"
    @expand="toggleCollapsed"
  >
    <div class="logo">
      <n-icon size="40" color="#0e7a0d">
        <AutoAwesomeOutlined />
      </n-icon>
      <h2 v-show="!collapsed">logo name</h2>
    </div>
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      @update:value="handleUpdateValue"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import {
  NLayoutSider,
  NButton,
  NIcon,
  NMenu,
  useMessage,
  NImage,
} from "naive-ui";
import {
  HomeOutlined,
  FormatListBulletedFilled,
  DataExplorationOutlined,
  AutoAwesomeOutlined,
} from "@vicons/material";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, h, ref } from "vue";
const route = useRouter();
const store = useStore();
console.log(route);
const message = useMessage();
const menuOptions = [
  {
    key: "home",
    path: "/",
    label: "home",
    icon: renderIcon(DataExplorationOutlined),
     children: [
      {
        key: "home",
        path: "home",
        label: "home1",
      },
      {
        key: "home2",
        path: "home2",
        label: "home2",
      },
      {
        key: "home3",
        path: "home3",
        label: "home3",
      },
     ]
  },
  {
    key: "about",
    path: "/about",
    label: "about",
    icon: renderIcon(FormatListBulletedFilled),
    children: [
      {
        key: "about",
        path: "/about",
        label: "about",
        icon: renderIcon(FormatListBulletedFilled),
      },
      {
        key: "about",
        path: "/about",
        label: "about",
        icon: renderIcon(FormatListBulletedFilled),
      },
      {
        key: "about",
        path: "/about",
        label: "about",
        icon: renderIcon(FormatListBulletedFilled),
      },
    ],
  },
];
const collapsed = computed(() => store.state.collapsed);
function toggleCollapsed() {
  store.commit("toggleCollapsed");
}
function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
function handleUpdateValue(key: any, item: any) {
  // message.info("[onUpdate:value]: " + JSON.stringify(item));
  route.push(item.path);
}
</script>

<style lang="less" scoped>
.sider {
  border-right: 1px solid var(--border-color);
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>