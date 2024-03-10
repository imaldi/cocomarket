<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div class="w-6/7 justify-start flex font-bold text-xl">John Joe Batagor Enak</div>

            <div class="w-1/5 flex justify-evenly items-center">
                <div class="w-1/3">
                  <iconnative icon="outline-question" color="#000" width="20" height="20" />
                </div>
                <div class="w-1/3">
                  <iconnative icon="dot-vertical" color="#000" width="20" height="28" />
                </div>
            </div>
          </div>
        </div>
  
        <div class="mx-8 mt-8">
            <div class="w-full flex justify-center items-center mb-4">
                <iconnative class="px-10 py-8 rounded-full bg-[#7ACDD6]" icon="fork-knife" color="#000" width="60" />
            </div>
            
            <div class="w-full flex flex-col items-center text-center justify-center">
                <div class=" w-50 font-semibold text-2xl tracking-tight mb-2">Complete Store data</div>
                <div class="w-60 mb-4 text-xs">all will be used to check your store. make sure all data is filled in.</div>
            </div>

            <div>
                <div class="flex w-full border border-dashed border-x-0 border-t-0 border-[#C3C3C36E] pb-4 mb-2">
                    <div class="w-1/4">
                        <iconnative class="" icon="outline-checklist" color="#000" width="32" />
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-md">Store Profile</div>
                        <div class="text-xs">Fill store profile</div>
                    </div>
                    <div class="w-1/6 flex items-center justify-center">
                        <iconnative class="" icon="next-arrow-black" color="#000" width="10" />
                    </div>
                </div>
                <div class="flex w-full border border-dashed border-x-0 border-t-0 border-[#C3C3C36E] pb-4 mb-2">
                    <div class="w-1/4">
                        <iconnative class="" icon="outline-checklist" color="#000" width="32" />
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-md">Operating Hours</div>
                        <div class="text-xs">set your store's operating hours</div>
                    </div>
                    <div class="w-1/6 flex items-center justify-center">
                        <iconnative class="" icon="next-arrow-black" color="#000" width="10" />
                    </div>
                </div>
                <div class="flex w-full border-x-0 border-t-0 border-[#C3C3C36E] pb-4 mb-2">
                    <div class="w-1/4">
                        <iconnative class="" icon="outline-checklist" color="#000" width="32" />
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-md">Menu List</div>
                        <div class="text-xs">create menu list for your store</div>
                    </div>
                    <div class="w-1/6 flex items-center justify-center">
                        <iconnative class="" icon="next-arrow-black" color="#000" width="10" />
                    </div>
                </div>
            </div>
</div>
            <div class="relative">
                <div class="fixed flex justify-center items-center w-full h-[10vh] bg-white rounded-lg rounded-b-0 shadow-md" style="bottom: 0">
                    <div class="flex h-8 py-2 rounded-2xl bg-primary  justify-center se w-98">
                        <div class="text-xl text-white">Next</div>
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
  .circle-bg {
    padding: 8px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #7acdd6;
    width: 30px;
    height: 30px;
  }
  </style>
  