<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div @click="router.back()" class="flex">
          <div>
            <icon
              icon="ion:arrow-back-circle-outline"
              color="#000"
              width="28"
              height="28"
            />
          </div>
          <div class="w-full justify-center flex font-bold">Track Order</div>
        </div>
      </div>

      <div>
        <div class="w-full">
          <Map />
        </div>
      </div>

      <div class="relative">
        <div
          class="fixed w-full h-[54vh] bg-white rounded-lg shadow-md"
          style="bottom: 0"
        >
          <div class="flex justify-center">
            <div class="bg-gray rounded-full w-20 h-1 m-2"></div>
          </div>

          <div class="mt-2 px-10">
            <div>
              <div class="flex font-300 justify-center text-gray">
                Estimated Arrival Time
              </div>
              <div class="flex font-bold justify-center text-xl">
                12:30 PM - 02:00 PM
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between pb-4 my-4">
                <img
                  class="border border-solid border-gray rounded-full bg-white p-2"
                  src="../assets/img/gerobak.png"
                  alt="Cocomaret Logo"
                  width="28"
                  height="28"
                />

                <div class="flex flex-col justify-center mr-2">
                  <div class="font-bold text-md tracking-tighter">
                    Bakso Solo Kang Em...
                  </div>
                  <div class="font-normal text-gray text-sm">
                    Pedagang Gerobak
                  </div>
                </div>

                <div class="flex">
                  <div
                    class="p2 bg-white rounded-full text-[8px] font-bold border border-solid border-#E68027 mr-2"
                  >
                    <icon
                      icon="humbleicons:chat"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div
                    class="p-2 bg-white rounded-full text-[8px] font-bold border border-solid border-#E68027"
                  >
                    <icon
                      icon="mingcute:phone-fill"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between"
              >
                <div class="flex items-center">
                  <div class="mr-2">
                    <icon
                      icon="vaadin:dot-circle"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="text-xs font-semibold">
                    Jl. Raja Isa No.21, Batam Center, Keca...
                  </div>
                </div>

                <div class="flex items-center">
                  <div>
                    <icon
                      icon="memory:box-light-dashed-vertical"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="w-60 h-0.5px bg-gray"></div>
                </div>

                <div class="flex items-center">
                  <div>
                    <icon
                      icon="ph:map-pin-fill"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="text-xs font-semibold">
                    Echa Hause - Jl. Raya Batam Centre Blo...
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between"
              >
                <div
                  class="flex justify-between border border-solid border-x-0 border-t-0 border-gray py-2"
                >
                  <div class="font-bold text-sm">Product Details</div>
                </div>

                <div class="py-2">
                  <div class="flex py-2">
                    <div class="w-1/4">
                      <img
                        class="rounded-xl"
                        src="../assets/img/bakso2.png"
                        alt=""
                        width="60"
                      />
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
                      <img
                        class="rounded-xl"
                        src="../assets/img/teh.png"
                        alt=""
                        width="60"
                      />
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
                      <img
                        class="rounded-xl"
                        src="../assets/img/meat 4.png"
                        alt=""
                        width="60"
                      />
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
              <div class="flex w-full justify-between my-6">
                <div
                  class="flex p-2 rounded-2xl bg-primary w-full justify-center"
                >
                  <div class="text-2xl text-white">Confirm Order</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between my-6 px-6">
            <div
              class="flex border-2 border-dashed border-red p-2 rounded-2xl bg-white w-full justify-center"
            >
              <div class="text-2xl text-red">Cancel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import  Map  from "./mapsTracker.vue"
import { useTrackingStore } from "../store/modules/tracking";
const router = useRouter();

const trackingStore = useTrackingStore();
const getListAddress = async () => {
  try {
    const res = await trackingStore.allTrackingByOrderId();
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  getListAddress();
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
</style>./mapsTracker.vue
