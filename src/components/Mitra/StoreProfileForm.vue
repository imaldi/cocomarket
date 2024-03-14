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
            <div class="w-full justify-center flex font-bold">Store Profile</div>
          </div>
        </div>
  
         
        <div class="mx-8 mt-4">
            <form class="flex flex-col">
                <div class="mb-2 font-500">Phone Number</div>
                <input type="number" placeholder="Enter Phone Number" class="h-10 border border-solid border-black rounded-xl px-4 mb-2" />

                <div class="mb-2 font-500">Gerobak Type</div>
                <select name="gerobakType" id="gerobak-type" class="h-10 border border-solid border-black rounded-xl px-4 mb-2">
                    <option value="">Select Gerobak Type</option>
                    <option value="dog" class="text-gray">Dog</option>
                    <option value="cat" class="text-gray">Cat</option>
                    <option value="hamster" class="text-gray">Hamster</option>
                    <option value="parrot" class="text-gray">Parrot</option>
                    <option value="spider" class="text-gray">Spider</option>
                    <option value="goldfish" class="text-gray">Goldfish</option>
                </select>

                <div class="mb-2 font-500">Stand Address</div>
                <input type="text" placeholder="Fill Stand Address" class="h-10 border border-solid border-black rounded-xl px-4 mb-2" />
                
                <div class="mb-2 font-500">Stand Location</div>
                <div class="border border-solid rounded-xl border-[#C3C3C3] flex flex-col items-center py-4 mb-2">
                    <iconnative
                        icon="location-b"
                        color="#000"
                        width="48"
                        height="48"
                    />
                    <div class="text-sm text-[#C3C3C3] mb-4">Stand Location not set yet</div>
                    <div>
                        <div class="bg-[#7ACDD6] py-2 px-4 rounded-full flex items-center">
                            <iconnative
                                class="mr-2"
                                icon="plus-white"
                                color="#000"
                                width="10"
                                height="10"
                            />  
                            <div class="text-white text-xs">Set Location</div>
                        </div>
                    </div>
                </div>
                
                <div class="mb-2 font-500">Stand Photo</div>
                <div class="border border-solid rounded-xl border-[#C3C3C3] flex flex-col items-center py-4">
                    <iconnative
                        icon="add-image"
                        color="#000"
                        width="48"
                        height="48"
                    />
                    <div class="text-sm text-[#C3C3C3] mb-4">Stand Photo not set yet</div>
                    <div>
                        <div class="bg-[#7ACDD6] py-2 px-4 rounded-full flex items-center">
                            <iconnative
                                class="mr-2"
                                icon="plus-white"
                                color="#000"
                                width="10"
                                height="10"
                            />  
                            <div class="text-white text-xs">Upload Photo</div>
                        </div>
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
  