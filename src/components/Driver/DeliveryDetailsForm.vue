<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div @click="router.back()" class="flex">
          <div>
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Delivery Details</div>
        </div>
      </div>

      <div>
        <div class="w-full">
          <div id="map" ref="map" style="height: 80px"></div>
        </div>
      </div>

      <div class="relative">
        <div class="fixed w-full h-[78vh] bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="flex justify-center">
            <div class="bg-gray rounded-full w-20 h-1 m-2"></div>
          </div>

          <div class="mt-2 px-10">
            <div>
              <div class="flex items-center justify-between pb-4 my-4">
                <img class="border border-solid border-gray rounded-full bg-white" src="../../assets/img/profile.svg"
                  alt="Cocomaret Logo" width="38" height="38" />

                <div class="flex flex-col justify-start mr-20">
                  <div class="font-bold text-md tracking-tighter">Mike Kasari</div>
                  <div class="font-normal text-gray text-sm">Customers</div>
                </div>

                <div class="flex">
                  <div v-if="!haveTrack"
                    class="p2 bg-white rounded-full text-[8px] font-bold border border-solid border-#E68027 mr-2"
                    @click="createTrack">
                    <p>Create Track</p>
                  </div>
                  <div class="p2 bg-white rounded-full text-[8px] font-bold border border-solid border-#E68027 mr-2">
                    <iconnative icon="chat-single" color="#E68027" width="24" height="20" />
                  </div>
                  <div class="p-2 bg-white rounded-full text-[8px] font-bold border border-solid border-#E68027">
                    <iconnative icon="phone" color="#E68027" width="24" height="20" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
                <div class="flex items-center">
                  <div class="mr-2">
                    <iconnative icon="circle-dot" color="#E68027" width="24" height="20" />
                  </div>
                  <div class="text-xs font-semibold">Jl. Raja Isa No.21, Batam Center, Keca...</div>
                </div>

                <div class="flex items-center">
                  <div>
                    <iconnative icon="line-dashed" color="#E68027" width="24" height="20" />
                  </div>
                  <div class="w-60 h-0.5px bg-gray"></div>
                </div>

                <div class="flex items-center">
                  <div>
                    <iconnative icon="location-orange" color="#E68027" width="24" height="20" />
                  </div>
                  <div class="text-xs font-semibold">Echa Hause - Jl. Raya Batam Centre Blo...</div>
                </div>
              </div>
            </div>

            <div>
              <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
                <div class="flex justify-between border border-solid border-x-0 border-t-0 border-gray py-2">
                  <div class="font-bold text-sm">Product Details</div>
                </div>

                <div class="py-2">
                  <div class="flex py-2">
                    <div class="w-1/4">
                      <img class="rounded-xl" src="../../assets/img/bakso2.png" alt="" width="60" />
                    </div>
                    <div class="w-3/4 flex flex-col justify-around">
                      <div class="text-sm font-bold">Bakso Campur Enak</div>
                      <div class="flex justify-between">
                        <div class="text-xs text-gray">x1</div>
                        <div class="text-xs font-semibold">Rp.25.000</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex py-2">
                    <div class="w-1/4">
                      <img class="rounded-xl" src="../../assets/img/teh.png" alt="" width="60" />
                    </div>
                    <div class="w-3/4 flex flex-col justify-around">
                      <div class="text-sm font-bold">Teh Obengk</div>
                      <div class="flex justify-between">
                        <div class="text-xs text-gray">x1</div>
                        <div class="text-xs font-semibold">Rp.7.000</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex py-2">
                    <div class="w-1/4">
                      <img class="rounded-xl" src="../../assets/img/meat 4.png" alt="" width="60" />
                    </div>
                    <div class="w-3/4 flex flex-col justify-around">
                      <div class="text-sm font-bold">Mie Ayam</div>
                      <div class="flex justify-between">
                        <div class="text-xs text-gray">x1</div>
                        <div class="text-xs font-semibold">Rp.28.000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-between my-4 text-sm font-semibold px-4">
                <div>Total Payment</div>
                <div class="font-bold text-[#E68027]">72.900</div>
              </div>
              <div class="flex justify-between my-4 text-sm font-semibold px-4">
                <div>Payment Method</div>
                <div class="font-bold text-green">Cash</div>
              </div>
            </div>
          </div>

          <div class="flex my-6 px-6">
            <div class="flex p-2 rounded-2xl bg-primary w-full justify-center">
              <div class="text-base font-semibold text-white">Start Delivery</div>
            </div>

            <!-- <div
                class="flex rounded-2xl bg-white w-full items-center justify-center border border-solid border-[#32BA7C] rounded-xl"
                >
                    <div class="mr-2 pt-2">
                        <iconnative
                            icon="circle-checklist"
                            color="#000"
                            width="28"

                        />
                    </div>
                    <div class="text-base font-semibold text-#32BA7C">Delivery has been Compeleted</div>
                </div> -->

            <!-- <div
                class="flex rounded-2xl bg-white w-full items-center justify-center border border-solid border-[#F44336] rounded-xl"
                >
                    <div class="mr-2 pt-2">
                        <iconnative
                            icon="circle-close"
                            color="#000"
                            width="28"

                        />
                    </div>
                    <div class="text-base font-semibold text-#F44336">You did not complete this delivery</div>
                </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import iconnative from "../../icon/index.vue";
import apiClient from "../../store/apiClient";
import { useRoute } from "vue-router"
import axios from "axios";
import L, { LatLngExpression } from "leaflet";
import { dayjs } from 'element-plus';
import { decode } from '@mapbox/polyline';

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
let intervalFunction = null

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const router = useRoute()

const { id: orderId } = router.params
const map = ref<L.Map | null>(null);
const haveTrack = ref<boolean | null>(null)
const currLocation = ref<LatLngExpression>([0, 0])
const estimationTime = ref({ second: 0, minute: 0, hour: 0 })
const orderDetails = ref<OrderModel>({
  orderId: undefined,
  distance: undefined,
  lat: undefined,
  long: undefined,
  polyline: undefined,
  time: undefined
})

watch(currLocation, () => {
  updateTrack()
})

onMounted(async () => {
  try {
    intervalFunction = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const current = currLocation.value as Array<number>
          console.log("Checking to Update!", current[0] !== position.coords.latitude && current[1] !== position.coords.longitude)
          if (current[0] !== position.coords.latitude && current[1] !== position.coords.longitude)
            currLocation.value = [position.coords.latitude, position.coords.longitude]
        },
        error => {
          console.error('Error getting location:', error.message);
        }
      )
    }, 15000)

    const responseApi: GetTrackResponse | Array<any> = await apiClient.get(`api/orders/tracking/${orderId}`) as GetTrackResponse

    if (Array.isArray(responseApi) && responseApi.length === 0) {
      haveTrack.value = false
    } else {
      haveTrack.value = true
      orderDetails.value = { ...responseApi, polyline: decode(responseApi.polyline) }
    }
  } catch (err) {
    alert(err)
  } finally {
    map.value = initializeMap()
  }
})


const initializeMap = () => {
  const maps = L.map("map").setView(currLocation.value, 15);
  let polylines = null
  const orderDetail = { ...orderDetails.value }

  L.tileLayer(
    `https://{s}.google.com/vt/lyrs=m@189&hl=en&x={x}&y={y}&z={z}&apistyle=s.t%3A131%7Cs.e%3Alight%7Cs.g%3A%23EAEAEA%7Cs.l%3A%23EAEAEA%7Cs.c%3A%23EAEAEA%7Cs.f%3A%23EAEAEA%7Cs.l%3A%23EAEAEA%7Cs.t%3A60%7Cs.e%3Ag.s%7Cs.g%3A%23E5E5E5%7Cs.l%3A%23E5E5E5%7Cs.f%3A%23E5E5E5%7Cs.f%3Ag.s&scale=2&style=47%2C37%7Csmartmaps&apiKey=${apiKey}`,
    {
      attribution: "&copy; Google",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  ).addTo(maps);


  L.marker(currLocation.value).addTo(maps).bindPopup("Kurir");
  if (orderDetail.polyline !== undefined) {
    polylines = L.polyline(orderDetail.polyline, { color: "blue" }).addTo(maps);
    maps.fitBounds(polylines.getBounds());
    // Ubah isi Marker menjadi Latitude dan Longitude tujuan yang didapatkan dari API Server
    // Gunakan setIcon() untuk mengubah Icon dari Marker
    L.marker([1.1354661680715685, 104.0073575377535]).addTo(maps).bindPopup("Tujuan");
  }

  return maps;
};

const createTrack = async () => {
  // https://dev.vin.web.id/api/orders/tracking
  try {
    const currentLocation = currLocation.value as Array<number>

    const { data: { routes } } = await axios.post('https://routes.googleapis.com/directions/v2:computeRoutes', {
      // Ketika integrasi, Origin yang akan selalu berubah-ubah sesuai dengan titik lokasi kurir
      "origin": {
        "location": {
          "latLng": {
            "latitude": currentLocation[0],
            "longitude": currentLocation[1]
          }
        }
      },
      // Destinasi tidak perlu berubah karena tujuan akan selalu sama selama orderan berjalan
      "destination": {
        "location": {
          "latLng": {
            "latitude": 1.1354661680715685,
            "longitude": 104.0073575377535
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
    const totalEstimation = Number.parseInt(routes[0].duration.split('s')[0])
    const second = totalEstimation % 60
    const minute = Number.parseInt(`${totalEstimation / 60}`)
    const hour = Number.parseInt(`${totalEstimation / 3600}`)
    estimationTime.value = { second, minute, hour }
    const body = {
      polyline: routes[0].polyline.encodedPolyline,
      lat: currentLocation[0],
      long: currentLocation[1],
      time: totalEstimation, // Satuan detik
      distance: routes[0].distanceMeters, // Satuan Meter
      order_id: orderId,
    }

    await apiClient.post('api/orders/tracking', body)

    orderDetails.value = {
      ...body,
      orderId: orderId as string,
    }
    map.value?.remove()
    map.value = initializeMap()
  } catch (err) {
    alert(err)
  }
}

const updateTrack = async () => {
  try {
    const currentLocation = currLocation.value as Array<number>
    const body = {
      lat: currentLocation[0],
      long: currentLocation[1],
      order_id: orderId,
    }

    await apiClient.put('api/orders/tracking', body)
  } catch (err) {
    alert(err)
  } finally {
    map.value?.remove()
    map.value = initializeMap()
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #000000;
}
</style>
./mapsTracker.vue
