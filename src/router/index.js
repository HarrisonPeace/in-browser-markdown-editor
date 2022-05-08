import { createRouter, createWebHistory } from "vue-router";
import MarkdownHome from "../views/MarkdownHome.vue";

const routes = [
  {
    // /search/screens -> /search?q=screens
    path: "/",
    redirect: () => {
      return { path: "/welcome" };
    }
  },
  {
    path: "/:fileName",
    name: "MarkdownHome",
    component: MarkdownHome
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
