<template>
  <div class="play">
    <video autoplay controls width="100%" height="500" id="myVideo"></video>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import flvjs from "flv.js";
function videoPlayer() {
  if (flvjs.isSupported()) {
    var videoElement: any = document.getElementById("myVideo");
    var flvPlayer = flvjs.createPlayer({
      type: "flv",
      isLive: true,
      cors: true,
      url: "http://39.134.115.163:8080/PLTV/88888910/224/3221225618/index.m3u8", //你的url地址
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
  }
}
onMounted(() => {
  nextTick(() => {
    videoPlayer();
  });
});
</script>

<style scoped lang="less">
.play{
  width: 100%;
  #myVideo{
    width: 100%;
  }
}
</style>