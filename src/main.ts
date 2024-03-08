import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { initVeeValidate } from "./plugins/vee-validate";
import "./style.css";
import "virtual:uno.css";
import "./assets/style/style.scss";
import { Icon } from "@iconify/vue";

const app = createApp(App);

app.use(createPinia());
app.use(initVeeValidate);
app.component("icon", Icon);
app.use(router).mount("#app");

