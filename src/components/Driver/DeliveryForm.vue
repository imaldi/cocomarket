<template>
    <div>
      <div class="container pb-20">
        <div class="bg-white shadow-md rounded-xl pt-6">
          <div class="w-full justify-center flex font-bold text-xl pb-4">History</div>
  
          <div class="flex justify-evenly px-14">
            <div class="flex flex-col">
              <div class="font-bold mb-2">In Progress</div>
              <!-- <div :class="activeSelect == 0 ? 'bg-[#7ACDD6] h-2 rounded-t-4' : ''"></div> -->
            </div>
            <div class="flex flex-col">
              <div class="font-bold mb-2">Pending</div>
              <!-- <div :class="activeSelect == 1 ? 'bg-[#7ACDD6] h-2 rounded-t-4' : ''"></div> -->
            </div>
          </div>
        </div>


        <div class="mx-6 mt-6">
            <div>
              <div
                class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between"
              >
              <div class="w-full flex justify-between items-center">
                <div>
                    <div class="text-xs">No.pengiriman</div>
                    <div class="text-md font-semibold">#S-523-252-2555</div>
                </div>
                <div class="p-2 text-xs rounded-xl bg-[#EADFB4] font-bold">
                    In Proccess
                </div>
              </div>
                <div class="flex items-center">
                  <div class="mr-2">
                    <iconnative
                      icon="circle-dot"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="flex justify-between w-56">              
                      <div class="text-xs font-semibold">
                        Jl. Raja Isa No.21, Bat..
                      </div>
                      <div class="text-[10px] text-gray">
                        24 Jun, 11:09 PM
                      </div>
                  </div>
                </div>

                <div class="flex items-center">
                  <div>
                    <iconnative
                      icon="line-dashed"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="w-60 h-0.5px bg-gray"></div>
                </div>

                <div class="flex items-center">
                  <div>
                    <iconnative
                      icon="location-orange"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="flex justify-between w-56">              
                    <div class="text-xs font-semibold">
                    Echa Hause - Jl. R......
                  </div>

                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between"
              >
              <div class="w-full flex justify-between items-center">
                <div>
                    <div class="text-xs">No.pengiriman</div>
                    <div class="text-md font-semibold">#S-523-252-2555</div>
                </div>
                <div class="p-2 text-xs rounded-xl bg-[#F5D8BE] font-bold">
                    Pending
                </div>
              </div>
                <div class="flex items-center">
                  <div class="mr-2">
                    <iconnative
                      icon="circle-dot"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="flex justify-between w-56">              
                      <div class="text-xs font-semibold">
                        Jl. Raja Isa No.21, Bat..
                      </div>
                      <div class="text-[10px] text-gray">
                        24 Jun, 11:09 PM
                      </div>
                  </div>
                </div>

                <div class="flex items-center">
                  <div>
                    <iconnative
                      icon="line-dashed"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="w-60 h-0.5px bg-gray"></div>
                </div>

                <div class="flex items-center">
                  <div>
                    <iconnative
                      icon="location-orange"
                      color="#E68027"
                      width="24"
                      height="20"
                    />
                  </div>
                  <div class="flex justify-between w-56">              
                    <div class="text-xs font-semibold">
                    Echa Hause - Jl. R......
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
  