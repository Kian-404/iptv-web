<template>
  <div>
    <vue-player :options="videoOptions" />
  </div>
</template>

<script setup lang="ts">
import VuePlayer from "../components/common/VideoPlayer.vue";
let videoOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "http://223.110.245.167/ott.js.chinamobile.com/PLTV/3/224/3221226942/index.m3u8",
      type: "application/x-mpegURL",
       withCredentials: false,
    },
  ],
};
</script>

<style scoped>
</style>