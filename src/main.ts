import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { initVeeValidate } from "./plugins/vee-validate";
import 'leaflet/dist/leaflet.css';

import "./style.css";
import "virtual:uno.css";
import "./assets/style/style.scss";
import { Icon } from "@iconify/vue";

const app = createApp(App);

app.use(createPinia());
app.use(initVeeValidate);
app.component("icon", Icon);
app.use(router).mount("#app");

// const apiKey = process.env.GOOGLE_API_KEY;
// const map = new Map('map').setView([0, 0], 2);
// const googleMapsLayer = new GoogleMapsLayer({
//   apiKey,
//   type: 'roadmap',
// });

// map.addLayer(googleMapsLayer);
// app.mount('#app');