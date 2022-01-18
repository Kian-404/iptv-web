<template>
  <div class="not-found">
    <n-empty description="你什么也找不到">
      <template #extra>
        <n-button size="small" @click="router.push('/')">Home</n-button>
      </template>
    </n-empty>
  </div>
</template>

<script setup lang="ts">
import { NEmpty, NButton } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="less" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>