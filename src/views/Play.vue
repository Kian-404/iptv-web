<template>
  <div class="play">
    <VuePlayer  />
  </div>
</template>

<script setup lang="ts">
import VuePlayer from "../components/common/VideoPlayer.vue";
const sourceUrl="http://39.134.115.163:8080/PLTV/88888910/224/3221225632/index.m3u8";
</script>

<style scoped>
.play{
  height: 100%;
}
</style>