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
            <div class="w-full flex justify-center items-center">
                <iconnative class="px-16 py-12 rounded-full bg-[#7ACDD6]" icon="maskot-chicken" color="#000" width="140" />
            </div>

            <div class="flex justify-center items-center mt-6">
                <div>
                    <iconnative class="" icon="fill-checklist" color="#000" width="48" /> 
                </div>
                <div>
                    <iconnative class="" icon="line-blue" color="#000" width="80" height="60" /> 
                </div>
                <div>
                    <iconnative class="" icon="fill-checklist" color="#000" width="48" /> 
                </div>
                <div>
                    <iconnative class="" icon="outline-line" color="#000" width="80" height="60" /> 
                </div>
                <div>
                    <iconnative class="" icon="circle-dot-blue" color="#000" width="48" /> 
                </div>
            </div>

            <div class="px-4 w-68">
                <div class="font-semibold text-xl tracking-tight mb-2">Successful Verification</div>
                <div class="mb-4 text-sm">Store data has been verified continue with completing the menu and your store profile</div>
                
                <div class="w-48 flex justify- items-center px-4 py-2 bg-[#7ACDD6] rounded-full">
                    <div class="flex justify-center items-center pt-2 mr-2">
                        <iconnative class="" icon="note-checklist" color="#000" width="22" />
                    </div>
                    <div class=" bg-[#7ACDD6] rounded-full text-white text-xs">Complete your store data</div>
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
  