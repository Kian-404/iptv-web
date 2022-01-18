<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>v

<script setup lang="ts">
import videojs, {VideoJsPlayer, VideoJsPlayerOptions} from "video.js";
import { onMounted, onUnmounted, ref} from "vue";
const props = defineProps({
  options: {
    type: Object,
    default: ''
  }
})
let videoPlayer = ref('videoPlayer')
let player:VideoJsPlayer;
onMounted(() => {
  player = videojs(
    videoPlayer.value,
    props.options,
    function onPlayerReady() {
      console.log("onPlayerReady");
    }
  );
});
onUnmounted(() => {
  if (player) {
    player.dispose();
  }
});
</script>

<style scoped>
</style>