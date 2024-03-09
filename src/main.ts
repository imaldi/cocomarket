import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { initVeeValidate } from "./plugins/vee-validate";
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import "leaflet/dist/leaflet.css";
import "./style.css";
import "virtual:uno.css";
import "../src/plugins/sweet-alert.css";
import "./assets/style/style.scss";
import { Icon } from "@iconify/vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia());
app.config.globalProperties.$swal = Swal;
app.use(initVeeValidate);
app.component("icon", Icon);
app.use(router).mount("#app");
