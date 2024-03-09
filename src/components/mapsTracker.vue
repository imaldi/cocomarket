<template>
  <div>
    <div id="map" ref="map" style="height: 300px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import L, { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const initializeMap = () => {
  const map = L.map("map").setView([-6.2088, 106.8456], 10);

  L.tileLayer(
    `https://{s}.google.com/vt/lyrs=m@189&hl=en&x={x}&y={y}&z={z}&apistyle=s.t%3A131%7Cs.e%3Alight%7Cs.g%3A%23EAEAEA%7Cs.l%3A%23EAEAEA%7Cs.c%3A%23EAEAEA%7Cs.f%3A%23EAEAEA%7Cs.l%3A%23EAEAEA%7Cs.t%3A60%7Cs.e%3Ag.s%7Cs.g%3A%23E5E5E5%7Cs.l%3A%23E5E5E5%7Cs.f%3A%23E5E5E5%7Cs.f%3Ag.s&scale=2&style=47%2C37%7Csmartmaps&apiKey=${apiKey}`,
    {
      attribution: "&copy; Google",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  ).addTo(map);

  L.marker(new LatLng(-6.946196, 107.624861)).addTo(map).bindPopup("Bandung");
  L.marker(new LatLng(-6.2088, 106.8456)).addTo(map).bindPopup("Jakarta");

  const latlngs: LatLng[] = [
    new LatLng(-6.946196, 107.624861), 
    new LatLng(-6.837565, 107.472050),
  ];

  L.polyline(latlngs, { color: "blue" }).addTo(map);

  return map;
};

const map = ref<L.Map | null>(null);

onMounted(() => {
  map.value = initializeMap();
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
