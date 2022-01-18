<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { NConfigProvider, NMessageProvider } from "naive-ui";
import { useStore } from "vuex";
const store = useStore();
const theme = computed(() => store.state.theme);
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  .n-config-provider{
    height: 100%;
  } 
}
</style>
