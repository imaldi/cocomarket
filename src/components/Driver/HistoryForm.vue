<template>
  <div>
    <div class="container pb-20">
      <div class="bg-white shadow-md rounded-xl pt-6">
        <div class="w-full justify-center flex font-bold text-xl pb-4">History</div>

        <div class="flex justify-evenly px-14">
          <div class="flex flex-col">
            <div class="font-bold mb-2">Completed</div>
            <!-- <div :class="activeSelect == 0 ? 'bg-[#7ACDD6] h-2 rounded-t-4' : ''"></div> -->
          </div>
          <div class="flex flex-col">
            <div class="font-bold mb-2">Not Finished</div>
            <!-- <div :class="activeSelect == 1 ? 'bg-[#7ACDD6] h-2 rounded-t-4' : ''"></div> -->
          </div>
        </div>
      </div>

      <div class="mx-6 mt-6">
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

        <div>
          <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
            <div
              class="w-full flex justify-between items-center border border-solid border-t-0 border-x-0 border-[#C3C3C3] pb-2 mb-2"
            >
              <div>
                <div class="text-xs text-[#525964] mb-2">No.pengiriman</div>
                <div class="text-md font-bold">#S-523-252-2555</div>
              </div>
              <div class="px-2 py-1 text-xs rounded-xl bg-[#FF0000] font-bold text-white">Not Finished</div>
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
                <div class="w-1/3 text-[10px] text-gray flex justify-end pr-4">
                  <!-- 24 Jun, 11:19 PM -->
                </div>
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
  color: #000000;
}
</style>
