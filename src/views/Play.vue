<template>
  <div class="play">
    <VuePlayer/>
  </div>
</template>

<script setup lang="ts">
import VuePlayer from "../components/common/VideoPlayer.vue";
let videoOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8",
      type: "application/x-mpegURL",
       withCredentials: false,
    },
  ],
};
</script>

<style scoped>
.play{
  height: 100%;
}
</style>