<template>
  <div>
    <div id="wrapper"></div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import Chimee from "chimee";
import hls from "chimee-kernel-hls";
import ChimeePluginControlbar from "chimee-plugin-controlbar";
let player: any = null;
const prop = defineProps(["resource"]);
Chimee.install(ChimeePluginControlbar);
onMounted(() => {
  nextTick(() => {
    console.log(prop.resource.url);
    player = new Chimee({
      src: prop.resource.url,
      // 编解码容器
      box: "hls", // flv hls mp4
      // dom容器
      wrapper: "#wrapper",
      // video
      width: "100%",
      height: "100%",
      kernels: {
        hls,
      },
      plugin: [
        ChimeePluginControlbar.name, // 或者 'chimeeControl'
      ],
      crossOrigin: true,
      isLive: true,
      autoplay: true,
      controls: true,
      muted: true,
    });
  });
});
</script>

<style scoped>
</style>