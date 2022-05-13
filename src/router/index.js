import { createRouter, createWebHistory } from "vue-router";
import MarkdownHome from "../views/MarkdownHome.vue";

const routes = [
  {
    path: "/:fileName",
    name: "MarkdownHome",
    component: MarkdownHome,
    alias: "/"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
