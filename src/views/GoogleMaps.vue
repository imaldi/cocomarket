<template>
    <div class="mainWrapper">
        <p>Welcome to the Google Maps!</p>
        <p v-if="displayRoute.distanceMeters !== null">{{displayRoute.distanceMeters}} Meter</p>
        <p v-if="displayRoute.duration !== null">{{displayRoute.duration.split('s')[0]}} Detik</p>
        <div id="map"></div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { Loader } from "@googlemaps/js-api-loader"
import { dayjs } from 'element-plus';
import { decode } from '@mapbox/polyline';

// Membuat center atau menentukan titik tengah si tampilan Google Maps-nya
const center = { lat: 1.1149361954501316, lng: 104.04005742568758 };
// Menentukan seberapa zoom in tampilan Google Maps nya
const zoom = 15;
const displayRoute = ref({distanceMeters: null, duration: null});

onMounted(async () => {
    fetchData()
})

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
    console.log("This is Routes", routes)
    // Decoding Polyline ataupun garis yang menunjukkan arah perjalanan kurir menjadi kompatibel untuk tampilan di Google Map
    const decoded = decode(routes[0].polyline.encodedPolyline).map((poly: any) => ({ lat: poly[0], lng: poly[1] }))
    // Deklarasi atau memanggil fungsi yang dibutuhkan untuk menampilkan Maps + Garis yang mau dibuat
    const { Map, Polyline } = await loader.importLibrary("maps")
    const map = new Map(document.getElementById("map") as HTMLElement, {
        center,
        zoom,
    });

    // Membuat Polyline dengan path dan juga hal hal lain yang bisa dikustomisasi
    const path = new Polyline({
        path: decoded,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    // Menerapkan Polyline
    path.setMap(map);
    } catch (err) {
        alert(`Error Loading Maps with Code : ${err}`)
    }
}

const loader = new Loader({
    // Lebih ideal API Key di store dalam env files saja
    apiKey: "AIzaSyDPsaaxcm_RCNSF40DR0jOgV-vCeHAAACo",
    version: "weekly",
});
</script>

<style>
.mainWrapper {
    width: 100%;
    min-height: 100%;
}

p {
    color: black;
}

#map {
    height: 400px;
    width: 100%;
}
</style>