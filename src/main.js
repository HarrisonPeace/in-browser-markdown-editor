import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/styles.scss";

import Button from "./components/UI/Button.vue";
import Modal from "./components/UI/Modal.vue";
import FileDisplay from "./components/UI/FileDisplay.vue";

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
app.use(pinia);
app.use(router);
app.component("v-button", Button);
app.component("v-modal", Modal);
app.component("file-display", FileDisplay);
app.mount("#app");
