import { createRouter, createWebHistory } from "vue-router";
import MarkdownHome from "../views/MarkdownHome.vue";

const routes = [
  {
    path: "/",
    component: MarkdownHome
  },
  {
    path: "/:fileName",
    component: MarkdownHome
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
