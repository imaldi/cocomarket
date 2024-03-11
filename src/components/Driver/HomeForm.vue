<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl py-8 px-6 flex">
        <div class="w-5/6 flex">
          <div class="flex items-center justify-between">
            <img
              class="mr-4 rounded-full bg-white"
              src="../../assets/img/profile.svg"
              alt="Photo Profile"
              width="56"
              height="56"
            />

            <div class="flex flex-col justify-center">
              <div class="font-normal text-gray text-xs">Hello Rick,</div>
              <div class="font-semibold text-md">Welcome Back!</div>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-center">
          <iconnative icon="bell-red-dot" color="#000" width="20" />
        </div>
      </div>

      <div class="px-8 pt-10 bg-white h-[76vh] overflow-y-scroll">
        <div class="w-full mb-4">
          <div class="flex justify-between">
            <div class="font-bold">Currentlt Delivery Task</div>
            <div class="text-sm text-gray">See All</div>
          </div>
        </div>
        <div>
          <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
            <div class="w-full flex justify-between items-center">
              <div>
                <div class="text-xs">No.pengiriman</div>
                <div class="text-md font-semibold">#S-523-252-2555</div>
              </div>
              <div class="p-2 text-xs rounded-xl bg-[#EADFB4] font-bold">In Proccess</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2">
                <iconnative icon="circle-dot" color="#E68027" width="24" height="20" />
              </div>
              <div class="flex justify-between w-56">
                <div class="text-xs font-semibold">Jl. Raja Isa No.21, Bat..</div>
                <div class="text-[10px] text-gray">24 Jun, 11:09 PM</div>
              </div>
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
              <div class="flex justify-between w-56">
                <div class="text-xs font-semibold">Echa Hause - Jl. R......</div>
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

        <div>
          <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
            <div class="w-full flex justify-between items-center">
              <div>
                <div class="text-xs">No.pengiriman</div>
                <div class="text-md font-semibold">#S-523-252-2555</div>
              </div>
              <div class="p-2 text-xs rounded-xl bg-[#51F862] font-bold text-white">Completed</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2">
                <iconnative icon="circle-dot" color="#E68027" width="24" height="20" />
              </div>
              <div class="flex justify-between w-56">
                <div class="text-xs font-semibold">Jl. Raja Isa No.21, Bat..</div>
                <div class="text-[10px] text-gray">24 Jun, 11:09 PM</div>
              </div>
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
              <div class="flex justify-between w-56">
                <div class="text-xs font-semibold">Echa Hause - Jl. R......</div>
                <div class="text-[10px] text-gray">24 Jun, 11:09 PM</div>
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
  height: 100vh;
  color: #000000;
}
</style>
./mapsTracker.vue
