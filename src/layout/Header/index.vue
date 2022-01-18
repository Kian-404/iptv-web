<template>
  <div class="header">
    <div class="left"></div>
    <div class="main">
      <h2 class="title">title</h2>
    </div>
    <div class="right">
      <n-button
        text
        v-show="theme === null"
        @click="store.commit('darkTheme')"
        style="font-size: 24px"
      >
        <n-icon>
          <DarkModeOutlined />
        </n-icon>
      </n-button>
      <n-button
        text
        v-show="theme !== null"
        @click="store.commit('lightTheme')"
        style="font-size: 24px"
      >
        <n-icon>
          <LightModeOutlined />
        </n-icon>
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NIcon, NSpace, NDropdown } from "naive-ui";
import { DarkModeOutlined, LightModeOutlined } from "@vicons/material";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const theme = computed(() => store.state.theme);
const darkTheme = () => {
  store.commit("darkTheme");
  console.log(theme.value);
};
onMounted(() => {
  console.log(theme);
});
</script>

<style lang="less" scoped>
.header {
  display: flex;
  padding: 10px 30px;
  .main {
    flex: 1;
    .title {
      margin: 0px;
      //  line-height: 60px;
    }
  }
}
</style>