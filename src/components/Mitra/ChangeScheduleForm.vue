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
            <div class="flex justify-between border border-dashed border-x-0 border-t-0 pb-4 mb-4 border-#C3C3C36E">
                <div class="font-bold">Open 24 Hours</div>
                <div>
                    <input
                    class="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                    type="checkbox"
                    role="switch"
                    id="open24HoursToogle" />
                </div>
            </div>
  
            <div class="flex justify-between border border-dashed border-x-0 border-t-0 pb-4 mb-4 border-#C3C3C36E">
                <div class="font-bold">Close</div>
                <div>
                    <input
                    class="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                    type="checkbox"
                    role="switch"
                    id="closeToogle" />
                </div>
            </div>

            <div class="flex justify-between border border-dashed border-x-0 border-t-0 pb-4 mb-4 border-#C3C3C36E">
                <div class="font-bold">Set Hours</div>
                <div>
                    <input
                    class="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                    type="checkbox"
                    role="switch"
                    id="setHoursToogle" />
                </div>
            </div>

            <div class="flex">
                <div class="w-2/3 flex flex-col">
                    <div class="text-sm font-semibold mb-4">Open</div>
                    <div class="text-sm font-bold mb-4">13:00</div>
                    <div class="bg-#7ACDD6 flex justify-center items-center w-1/2 rounded-full px-2 py-1">
                        <div class="mr-2">
                            <iconnative
                                icon="plus-white"
                                color="#000"
                                width="12"
                            />
                        </div>
                        <div class="font-semibold text-xs text-white">Add More</div>
                    </div>
                </div>

                <div class="w-1/2 flex flex-col">
                    <div class="text-sm font-semibold mb-4">Close</div>
                    <div class="text-sm font-bold">15:00</div>
                </div>
            </div>
        </div>

        <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="flex w-full justify-evenly py-4">
            <div class="flex py-2 rounded-2xl border border-dashed border-[#FF0000] w-42 justify-center">
              <div class="text-xl text-[#FF0000]">Cancel</div>
            </div>
            <div class="flex py-2 rounded-2xl bg-primary w-42 justify-center">
              <div class="text-xl text-white">Save</div>
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
  