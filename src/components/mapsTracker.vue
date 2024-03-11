<template>
  <div>
    <div id="map" ref="map" style="height: 300px"></div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from "vue";
import L, { LatLngExpression } from "leaflet";
import { dayjs } from 'element-plus';
import { decode } from '@mapbox/polyline';
import "leaflet/dist/leaflet.css";
import apiClient from '../store/apiClient';

interface RoutesMeta {
  distanceMeters: number,
  duration: number
}

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const currLocation = ref({ latitude: 0, longitude: 0 })
const map = ref<L.Map | null>(null);
// Membuat center atau menentukan titik tengah si tampilan Google Maps-nya
const center: LatLngExpression = [1.1149361954501316, 104.04005742568758];
// Menentukan seberapa zoom in tampilan Google Maps nya
const polyline = ref<LatLngExpression[]>();
const displayRoute = ref<RoutesMeta | null>({ distanceMeters: 0, duration: 0 });

const initializeMap = () => {
  const map = L.map("map").setView(center, 10);
  let polylines = null

  L.tileLayer(
    `https://{s}.google.com/vt/lyrs=m@189&hl=en&x={x}&y={y}&z={z}&apistyle=s.t%3A131%7Cs.e%3Alight%7Cs.g%3A%23EAEAEA%7Cs.l%3A%23EAEAEA%7Cs.c%3A%23EAEAEA%7Cs.f%3A%23EAEAEA%7Cs.l%3A%23EAEAEA%7Cs.t%3A60%7Cs.e%3Ag.s%7Cs.g%3A%23E5E5E5%7Cs.l%3A%23E5E5E5%7Cs.f%3A%23E5E5E5%7Cs.f%3Ag.s&scale=2&style=47%2C37%7Csmartmaps&apiKey=${apiKey}`,
    {
      attribution: "&copy; Google",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  ).addTo(map);

  L.marker(center).addTo(map).bindPopup("Kurir");
  if (polyline.value !== undefined) {
    polylines = L.polyline(polyline.value, { color: "blue" }).addTo(map);
    map.fitBounds(polylines.getBounds());
  }

  return map;
};

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    position => {
      currLocation.value = { latitude: position.coords.latitude, longitude: position.coords.longitude }
      fetchData()
    },
    error => {
      console.error('Error getting location:', error.message);
    }
  );
});

const fetchData = async () => {
  try {
    // Mendapatkan rute yang harus dilewati oleh Kurir menggunakan moda transportasi tertentu
    // Dokumentasi : https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes#request-body

    const { data: { routes } } = await axios.post('https://routes.googleapis.com/directions/v2:computeRoutes', {
      // Ketika integrasi, Origin yang akan selalu berubah-ubah sesuai dengan titik lokasi kurir
      "origin": {
        "location": {
          "latLng": {
            "latitude": 1.1149361954501316,
            "longitude": 104.04005742568758
          }
        }
      },
      // Destinasi tidak perlu berubah karena tujuan akan selalu sama selama orderan berjalan
      "destination": {
        "location": {
          "latLng": {
            "latitude": 1.1355836265175647,
            "longitude": 104.00739431132627
          }
        }
      },
      "travelMode": "DRIVE",
      "routingPreference": "TRAFFIC_AWARE_OPTIMAL",
      "departureTime": dayjs().add(1, 'minute'),
      "computeAlternativeRoutes": false,
      "routeModifiers": {
        "avoidTolls": true,
        "avoidHighways": true,
        "avoidFerries": true
      },
      "languageCode": "en-US",
      "units": "METRIC",
      // "polylineQuality": "HIGH_QUALITY",
    }, {
      'headers': {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': 'AIzaSyDPsaaxcm_RCNSF40DR0jOgV-vCeHAAACo',
        'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline'
      }
    })
    displayRoute.value = routes[0]
    console.log(routes[0])
    const totalSecond = Number.parseInt(routes[0].duration.split('s')[0])
    const second = totalSecond % 60
    const minute = Number.parseInt(`${totalSecond / 60}`)
    const hour = Number.parseInt(`${totalSecond / 3600}`)
    console.log({ second, minute, hour })

    // Decoding Polyline ataupun garis yang menunjukkan arah perjalanan kurir menjadi kompatibel untuk tampilan di Google Map
    polyline.value = decode(routes[0].polyline.encodedPolyline)
    map.value = initializeMap();
  } catch (err) {
    alert(`Error Loading Maps with Code : ${err}`)
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
