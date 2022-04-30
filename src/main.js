import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/styles.scss";

import Button from "./components/UI/Button.vue";
import FileDisplay from "./components/UI/FileDisplay.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("v-button", Button);
app.component("file-display", FileDisplay);
app.mount("#app");
