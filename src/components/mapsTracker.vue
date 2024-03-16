<template>
  <div>
    <div id="map" ref="map" style="height: 300px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import L, { LatLngExpression } from "leaflet";
import { decode } from '@mapbox/polyline';
import "leaflet/dist/leaflet.css";
import apiClient from '../store/apiClient';
import { useRoute } from "vue-router"

interface OrderModel {
  orderId: string | undefined
  lat: number | undefined
  long: number | undefined
  time: number | undefined
  distance: number | undefined
  polyline: LatLngExpression[] | undefined
}

interface GetTrackResponse {
  order_id?: string | undefined
  orderId: string
  lat: number
  long: number
  polyline: string
  time: number
  distance: number
}

let map: L.Map | null = null;
let interval: any = null;

const route = useRoute()
const { id: orderId } = route.params
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const courrierLocation = ref<LatLngExpression>([0, 0])
const userLocation = ref<LatLngExpression>([0, 0])
const orderDetails = ref<OrderModel>({
  orderId: undefined,
  distance: undefined,
  lat: undefined,
  long: undefined,
  polyline: undefined,
  time: undefined
})

onMounted(async () => {
  try {
    currentLocation();
    await fetchData();
  } catch (err) {
    alert(err);
  } finally {
    map = initializeMap();
    interval = setInterval(fetchData, 15000);
  }
});

onBeforeUnmount(() => { clearInterval(interval) })

watch(courrierLocation, () => {
  if (interval !== null) map = updateMap()
})

const currentLocation = () => {
  navigator.geolocation.getCurrentPosition(
    position => {
      const current = userLocation.value as Array<number>
      if (current[0] !== position.coords.latitude && current[1] !== position.coords.longitude)
        userLocation.value = [position.coords.latitude, position.coords.longitude]
    },
    error => {
      console.error('Error getting user location:', error.message);
    }
  )
}

const initializeMap = () => {
  const orderDetail = { ...orderDetails.value }
  const courrierLoc = courrierLocation.value as Array<number>
  const map = L.map("map").setView(courrierLoc[0] === 0 && courrierLoc[1] === 0 ? userLocation.value : courrierLocation.value, 15);
  let polylines = null

  L.tileLayer(
    `https://{s}.google.com/vt/lyrs=m@189&hl=en&x={x}&y={y}&z={z}&apistyle=s.t%3A131%7Cs.e%3Alight%7Cs.g%3A%23EAEAEA%7Cs.l%3A%23EAEAEA%7Cs.c%3A%23EAEAEA%7Cs.f%3A%23EAEAEA%7Cs.l%3A%23EAEAEA%7Cs.t%3A60%7Cs.e%3Ag.s%7Cs.g%3A%23E5E5E5%7Cs.l%3A%23E5E5E5%7Cs.f%3A%23E5E5E5%7Cs.f%3Ag.s&scale=2&style=47%2C37%7Csmartmaps&apiKey=${apiKey}`,
    {
      attribution: "&copy; Google",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  ).addTo(map);

  if (courrierLoc[0] === 0 && courrierLoc[1] === 0)
    L.marker(userLocation.value).addTo(map).bindPopup("Kamu");
  else
    L.marker(courrierLocation.value).addTo(map).bindPopup("Kurir");

  if (orderDetail.polyline !== undefined) {
    polylines = L.polyline(orderDetail.polyline, { color: "blue" }).addTo(map);

    // Membuat MAP fokus ke keseluruhan perjalanan bukan ke titik mereka
    // map.fitBounds(polylines.getBounds());

    // Ubah isi Marker menjadi Latitude dan Longitude tujuan yang didapatkan dari API Server
    // Gunakan setIcon() untuk mengubah Icon dari Marker
    L.marker([1.1354661680715685, 104.0073575377535]).addTo(map).bindPopup("Tujuan");
  }

  return map;
};

const updateMap = () => {
  if (map) {
    // Clear previous layers
    map.eachLayer(layer => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map?.removeLayer(layer);
      }
    });

    let polylines = null
    const orderDetail = { ...orderDetails.value }

    L.marker(courrierLocation.value).addTo(map).bindPopup("Kurir");

    if (orderDetail.polyline !== undefined) {
      polylines = L.polyline(orderDetail.polyline, { color: "blue" }).addTo(map);
      map.fitBounds(polylines.getBounds());
      // Ubah isi Marker menjadi Latitude dan Longitude tujuan yang didapatkan dari API Server
      // Gunakan setIcon() untuk mengubah Icon dari Marker
      L.marker([1.1354661680715685, 104.0073575377535]).addTo(map).bindPopup("Tujuan");
    }
  }

  return map;
}

const fetchData = async () => {
  try {
    const responseApi: GetTrackResponse | Array<any> = await apiClient.get(`api/orders/tracking/${orderId}`) as GetTrackResponse
    if (Array.isArray(responseApi)) {
      currentLocation()
    } else {
      courrierLocation.value = [responseApi.lat, responseApi.long]
      orderDetails.value = {
        ...responseApi,
        orderId: orderId as string,
        polyline: decode(responseApi.polyline),
      }
    }
  } catch (err) {
    alert(`Error Loading Maps Module with Code : ${err}`)
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
