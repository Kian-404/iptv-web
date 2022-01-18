import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Layout",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home1",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
      },
      {
        path: "/home2",
        name: "Home2",
        component: () =>
          import(
            /* webpackChunkName: "Home2" */ "../views/Home/home-preview.vue"
          ),
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/play",
        name: "Play",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Play" */ "../views/Play.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () =>
          import(/* webpackChunkName: "404Page" */ "../views/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
