import { ref } from "vue";
import { createStore } from "vuex";
import { darkTheme } from "naive-ui";
const Store = createStore({
  state: {
    count: 0,
    theme: ref(null),
    collapsed: ref(true),
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    lightTheme(state) {
      state.theme = ref(null);
    },
    darkTheme(state) {
      (state.theme as any) = darkTheme;
    },
    toggleCollapsed(state){
      state.collapsed = ref(!state.collapsed);
    }
  },
  actions: {},
  modules: {},
});

export default Store;
