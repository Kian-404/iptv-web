<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-12-17 13:55:12
 * @LastEditTime: 2021-12-20 14:07:33
-->
<template>
  <!-- <n-image src="https://upload.wikimedia.org/wikipedia/zh/6/65/CCTV-1_Logo.png" alt="" /> -->
  <n-card>
    <n-space>
      <n-button type="primary" @click="theme = darkTheme">深色</n-button>
      <n-button @click="theme = null">浅色</n-button>
      <n-button type="success" @click="fillterChannel('卫视')">卫视</n-button>
      <n-button type="success" @click="fillterChannel('CCTV')">CCTV</n-button>
    </n-space>
  </n-card>
  <n-spin :show="show" :description="description">
    <n-grid
      cols="1 s:3 m:4 l:5 xl:6 2xl:6"
      :x-gap="12"
      :y-gap="8"
      responsive="screen"
    >
      <n-grid-item v-for="channel in channelList" :key="channel['tvg-id']">
        <n-card :title="channel.title" hoverable @click="playChannel(channel)">
          <div class="light-green">
            <n-image
              width="100"
              preview-disabled
              :src="
                channel['tvg-logo'].length > 0
                  ? channel['tvg-logo']
                  : 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
              "
            />
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </n-spin>
  <n-modal v-model:show="showModal" style="width:50%" preset="dialog" title="Dialog">
    <template #header>
      <div>标题</div>
    </template>
    <VideoPlayer :resource="resource"/>
  </n-modal>
</template>

<script lang="ts" setup>
interface ChannelType {
  "group-title": string;
  title: string;
  "tvg-country": string;
  "tvg-id": string;
  "tvg-language": string;
  "tvg-logo": string;
  url: string;
}
import { defineComponent, onMounted, ref } from "vue";
import {
  zhCN,
  dateZhCN,
  darkTheme,
  NConfigProvider,
  NImage,
  NCard,
  NSpace,
  NButton,
  NDatePicker,
  NGrid,
  NGridItem,
  NSpin,
  NModal,
} from "naive-ui";
import VideoPlayer from "../components/common/VideoPlayer.vue";
import { getChannel, getChannel1 } from "../api/list";
import setup from "naive-ui/lib/radio/src/use-radio";
let theme = ref();
let locale = ref();
let dateLocale = ref();
let channelAll = ref();
let channelList = ref();
let description = "数据加载中";
let show = ref(false);
let showModal = ref(false);
let resource = ref()

onMounted(() => {
  show.value = true;
  getChannel().then((res: { data: any; }) => {
    console.log(res);
    show.value = false;
    channelAll.value = res.data;
  });
});
function fillterChannel(key: string) {
  show.value = true;
  console.log(channelAll.value);
  channelList.value = channelAll.value.filter((item: ChannelType) =>
    item.title.includes(key)
  );
  show.value = false;
  console.log(channelList.value);
}
function playChannel(item:ChannelType) {
  resource.value = item;
  showModal.value = true;
}
</script>
<style>
.n-space {
  margin-bottom: 30px;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>