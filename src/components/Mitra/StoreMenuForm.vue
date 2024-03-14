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
            <div class="w-full justify-center flex font-bold">Store Menu</div>
          </div>
        </div>
  
         
        <div class="mx-8 mt-8">
            <div class="flex justify-center mb-8">
                <div class="w-1/6 flex items-center justify-center pt-2 mr-4">
                    <iconnative
                        icon="category"
                        color="#000"
                        width="40"
                    />
                </div>
                <div class="w-1/1">
                    <div class="font-bold">
                        Category
                    </div>
                    <div class="text-xs font-semibold">
                        create food categories to make it easier for customers
                    </div>
                </div>
                <div class="w-1/6 flex items-center justify-center pt-2">
                    <iconnative
                        icon="next-arrow-black"
                        color="#000"
                        width="24"
                        height="24"
                    />
                </div>
            </div>

            <div class="flex justify-center">
                <div class="w-1/6 flex items-center justify-center pt-2 mr-4">
                    <iconnative
                        icon="menu"
                        color="#000"
                        width="40"
                    />
                </div>
                <div class="w-1/1">
                    <div class="font-bold">
                        Fill the Menu
                    </div>
                    <div class="text-xs font-semibold">
                        Fill detail menu that will be displayed in the application so that customers can place orders
                    </div>
                </div>
                <div class="w-1/6 flex items-center justify-center pt-2">
                    <iconnative
                        icon="next-arrow-black"
                        color="#000"
                        width="24"
                        height="24"
                    />
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
  