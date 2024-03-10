<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex" @click="router.push('profile')">
          <div>
            <iconnative
              icon="arrow-circle-black"
              color="#000"
              width="28"
              height="28"
            />
          </div>
          <div class="w-full justify-center flex font-bold">Add Address</div>
        </div>
      </div>

      <div>
        <div class="w-full">
          <div id="google-map" style="height: 300px"></div>
        </div>
      </div>

      <div class="relative">
        <div class="fixed w-full h-[54vh] bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="flex justify-center">
            <div class="bg-gray rounded-full w-20 h-1 m-2"></div>
          </div>

          <div class="mt-4 px-10">
            <div>
              <div class="flex font-semibold text-gray">
                Save an address as
                <div class="text-red">*</div>
              </div>
            </div>

            <div class="flex my-4">
              <div class="px-4 py-2 bg-[#7ACDD6] rounded-2xl font-semibold text-white text-sm">Home</div>
              <div class="px-4 py-2 bg-[#D9D9D9] rounded-2xl font-semibold text-black text-sm mx-2">Work</div>
              <div class="px-4 py-2 bg-[#D9D9D9] rounded-2xl font-semibold text-black text-sm">Other</div>
            </div>

            <div>
              <div class="flex font-semibold text-black mb-3">Address Detail</div>
              <Form v-slot="{ errors }" @submit="addAddress()" class="text-xs" action="">
                <div class="rounded-xl flex bg-[#F2F2F2] justify-between px-6 my-0 py-0">
                  <input
                    ref="autocompleteInput"
                    class="w-5/6 border-none rounded-xl bg-[#F2F2F2] px-0 py-2 my-2"
                    type="text"
                    name="address"
                    rules="required"
                    id=""
                    placeholder="Street Name, Building, Home Number"
                  />
                  <div class="flex items-center justify-center">
                    <icon class="rounded-full py-2" icon="mingcute:right-line" width="15" color="gray"></icon>
                  </div>
                  <div v-if="FieldEmpty" class="text-red-500 text-sm">Wajib Diisi !.</div>
                </div>

                <Field
                  class="w-5/6 border-0 rounded-xl bg-[#F2F2F2] px-6 py-4 my-2"
                  type="text"
                  name="namaJalan"
                  rules="required"
                  v-model="namaJalan"
                  id=""
                  placeholder="Street Name, Building, Home Number"
                />
                <p class="text-danger text-left text-sm mt-0">
                  {{ errors.namaJalan }}
                </p>
                <input
                  class="w-5/6l border-0 rounded-xl bg-[#F2F2F2] px-6 py-4"
                  type="text"
                  name=""
                  id=""
                  placeholder="Other"
                />

                <button
                  type="submit"
                  class="my-8 w-full flex justify-around px-10 py-4 bg-[#EFFDFF] border-dotted border-2 rounded-3xl border-[#7ACDD6] text-[#7ACDD6]"
                >
                  Save Address
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <popup-notif
        v-model="notifConfirm"
        :message="`Address Add Successfully`"
        :title="`Back To Profile`"
        @confirm="goToProfile"
      >
      </popup-notif>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useAddressStore } from "../store/modules/address";
import { Form, Field } from "vee-validate";
import PopupNotif from "../components/dialog/SuccessDialog.vue";
import iconnative from "../icon/index.vue";
// import { Map } from "googlemaps";

const notifConfirm = ref(false);
const FieldEmpty = ref(false);
const addressStore = useAddressStore();
const namaJalan = ref("");
const latitude = ref(0);
const longitude = ref(0);
const addAddress = async () => {
  if (!latitude || !longitude) {
    console.error("Latitude and longitude are required.");
    return;
  }
  if (!latitude || !longitude) {
    FieldEmpty.value = true;
    return;
  }
  const payload = {
    latitude: latitude.value,
    longitude: longitude.value,
    name: namaJalan.value,
  };

  try {
    const res = await addressStore.addAddress(payload);
    console.log(res);
    notifConfirm.value = true;
  } catch (error) {
    console.error("Error adding address:", error);
  }
};
const goToProfile = () => {
  router.push("/profile");
};

const router = useRouter();
const autocompleteInput = ref<HTMLInputElement | null>(null);
let map: typeof google.maps.Map | null = null;
let marker: typeof google.maps.Marker | null = null;

const initMap = () => {
  const mapElement = document.getElementById("google-map");
  if (!mapElement) return;

  map = new google.maps.Map(mapElement, {
    center: { lat: -7.797068, lng: 110.370529 },
    zoom: 15,
  });
  const autocomplete = new google.maps.places.Autocomplete(autocompleteInput.value!, { types: ["geocode"] });
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      return;
    }
    if (map) {
      map.setCenter(place.geometry.location);
      map.setZoom(15);
      if (marker) {
        marker.setMap(null);
      }

      marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
        title: place.name || place.formatted_address,
      });
    }

    latitude.value = place.geometry.location.lat();
    longitude.value = place.geometry.location.lng();
  });
};

onMounted(() => {
  initMap();
});
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
