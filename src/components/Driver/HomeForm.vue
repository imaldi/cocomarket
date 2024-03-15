<template>
  <div>
    <div class="container pb-20">
      <div class="bg-white shadow-md pt-10 pb-6 px-6 flex">
        <div class="w-5/6 flex">
          <div class="flex items-center justify-between">
            <div class="mr-4 rounded-full bg-white flex justify-center items-center overflow-hidden">
              <img src="../../assets/img/profile.svg" alt="Photo Profile" width="56" height="56" />
            </div>

            <div class="flex flex-col justify-center">
              <div class="font-normal text-gray text-xs">Hello Rick,</div>
              <div class="font-bold text-md">Welcome Back!</div>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-center">
          <iconnative icon="bell-red-dot" color="#000" width="26" />
        </div>
      </div>

      <div class="px-8 pt-4 bg-white">
        <div class="w-full mb-4">
          <div class="flex justify-between">
            <div class="font-bold">Currentlt Delivery Task</div>
            <div class="text-sm text-gray">See All</div>
          </div>
        </div>

        <div>
          <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
            <div
              class="w-full flex justify-between items-center border border-solid border-t-0 border-x-0 border-[#C3C3C3] pb-2 mb-2"
            >
              <div>
                <div class="text-xs text-[#525964] mb-2">No.pengiriman</div>
                <div class="text-md font-bold">#S-523-252-2555</div>
              </div>
              <div class="px-2 py-1 text-xs rounded-xl bg-[#EADFB4] font-bold text-[#B49000]">In Proccess</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 w-1/12">
                <iconnative icon="circle-dot" color="#E68027" width="24" height="20" />
              </div>
              <div class="w-1/1 flex justify-between">
                <div class="w-2/3 text-xs font-semibold">Jl. Raja Isa No.21, Bat..</div>
                <div class="w-1/3 text-[10px] text-gray flex justify-end pr-4">24 Jun, 11:09 PM</div>
              </div>
            </div>

            <div class="flex items-center">
              <div>
                <iconnative icon="line-dashed" color="#E68027" width="24" height="20" />
              </div>
              <div class="w-68 h-0.5px bg-gray"></div>
            </div>

            <div class="flex items-center">
              <div class="mr-2 w-1/12">
                <iconnative icon="location-orange" color="#E68027" width="24" height="20" />
              </div>
              <div class="w-1/1 flex justify-between">
                <div class="w-2/3 text-xs font-semibold">Echa Hause - Jl. R......</div>
                <div class="w-1/3 text-[10px] text-gray flex justify-end pr-4">-</div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-4">
          <div class="flex justify-between">
            <div class="font-bold">Shipment History</div>
            <div class="text-sm text-gray">See All</div>
          </div>
        </div>

        <div v-for="n in 4" :key="n">
          <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
            <div
              class="w-full flex justify-between items-center border border-solid border-t-0 border-x-0 border-[#C3C3C3] pb-2 mb-2"
            >
              <div>
                <div class="text-xs text-[#525964] mb-2">No.pengiriman</div>
                <div class="text-md font-bold">#S-523-252-2555</div>
              </div>
              <div class="px-2 py-1 text-xs rounded-xl bg-[#51F862] font-bold text-white">Completed</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 w-1/12">
                <iconnative icon="circle-dot" color="#E68027" width="24" height="20" />
              </div>
              <div class="w-1/1 flex justify-between">
                <div class="w-2/3 text-xs font-semibold">Jl. Raja Isa No.21, Bat..</div>
                <div class="w-1/3 text-[10px] text-gray flex justify-end pr-4">24 Jun, 11:09 PM</div>
              </div>
            </div>

            <div class="flex items-center">
              <div>
                <iconnative icon="line-dashed" color="#E68027" width="24" height="20" />
              </div>
              <div class="w-68 h-0.5px bg-gray"></div>
            </div>

            <div class="flex items-center">
              <div class="mr-2 w-1/12">
                <iconnative icon="location-orange" color="#E68027" width="24" height="20" />
              </div>
              <div class="w-1/1 flex justify-between">
                <div class="w-2/3 text-xs font-semibold">Echa Hause - Jl. R......</div>
                <div class="w-1/3 text-[10px] text-gray flex justify-end pr-4">24 Jun, 11:19 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconnative from "../../icon/index.vue";
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  // height: 100vh;
  color: #000000;
}
</style>
./mapsTracker.vue
