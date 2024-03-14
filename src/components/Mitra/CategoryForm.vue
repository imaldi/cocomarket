<template>
    <div>
      <div class="container pb-10">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <iconnative
                icon="arrow-circle-black"
                color="#000"
                width="28"
                height="28"
              />
            </div>
            <div class="w-full justify-center flex font-bold">Change Schedule</div>
          </div>
        </div>
  
         
        <div class="mx-8 mt-4">
            <form action="">
                <div class="w-full mb-6">
                    <div class="flex font-bold text-sm mb-2">Name<div class="text-red ">*</div></div>
                    <input class="w-91% rounded-xl border-2 border-black border-solid h-8 flex items-center justify-center font-semibold text-sm py-1 px-2" type="text" name="categoryName" id="categoryName">
                </div>

                <div class="flex justify-between">
                    <div class="w-1/1">
                        <div class="font-bold text-sm">Active</div>
                        <div class="text-xs">the active menu will appear on the customer page and can be ordered.</div>
                    </div>
                    <div class="w-1/5 flex justify-center items-center">
                        <input
                        class="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                        type="checkbox"
                        role="switch"
                        id="activeToogle" />
                    </div>
                </div>
            </form>



        </div>

        <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="flex w-full justify-evenly py-4">
            <div class="flex py-2 rounded-2xl border border-dashed border-[#FF0000] w-42 justify-center">
              <div class="text-xl text-[#FF0000]">Cancel</div>
            </div>
            <div class="flex py-2 rounded-2xl bg-primary w-42 justify-center">
              <div class="text-xl text-white">Submit</div>
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
    padding-bottom: 5rem;
    // height: 100vh;
    color: #000000;
  }
  </style>
  