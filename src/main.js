import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/styles.scss";

import Button from "./components/UI/Button.vue";
import FileDisplay from "./components/UI/FileDisplay.vue";

createApp(App).use(router).component("v-button", Button).component("file-display", FileDisplay).mount("#app");
