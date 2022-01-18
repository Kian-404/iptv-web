<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-12-17 11:15:02
 * @LastEditTime: 2021-12-17 14:50:47
-->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex';
import {NButton} from 'naive-ui';
import {AcUnitFilled} from "@vicons/material"
defineProps<{ msg: string }>()
onMounted(() =>{
  console.log('hello page')
  console.log(count);
})
const store = useStore();
const count = computed(() => store.state.count)

const increment = () => store.commit('increment');
</script>

<template>
  <h1>{{ msg }}</h1>
  <AcUnitFilled/>
  <n-button type="primary"  @click="increment">count is: {{ count }}</n-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
