<template>
    <div>
      <div class="container">
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
            <div class="w-full justify-center flex font-bold">Opening Hours</div>
          </div>
        </div>
  
         
        <div class="mx-8 mt-4">
            <div class="bg-[#7ACDD6] my-2 py-4 rounded-xl flex items-center">
                <div class="w-1/7 flex items-center justify-center">
                    <iconnative
                        icon="info-b-white"
                        color="#000"
                        width="28"
                        height="28"
                    />                                
                </div>
                <div>
                    <div class="font-semibold text-white text-xs">Set Operating hours</div> 
                    <div class="text-white text-xs">you must be open at least 2 days and 2 hours</div> 
                </div>
            </div>

            <div class="flex flex-col h-70vh justify-evenly">
                <div class="flex items-center">
                    <div class="w-1/6 flex items-center justify-center mr-2">
                        <iconnative
                            icon="calendar-m"
                            color="#000"
                            width="48"
                            height="48"
                        />                                
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-sm">Monday</div>
                        <div class="text-sm font-semibold">13:00 - 15:00</div>
                    </div>
                    <div class="w-1/7 flex items-center justify-center">
                        <iconnative
                            icon="next-arrow-black"
                            color="#000"
                            width="20"
                            height="20"
                        />                                
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-1/6 flex items-center justify-center mr-2">
                        <iconnative
                            icon="calendar-t"
                            color="#000"
                            width="48"
                            height="48"
                        />                                
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-sm">Tuesday</div>
                        <div class="text-sm text-red font-semibold">Close</div>
                    </div>
                    <div class="w-1/7 flex items-center justify-center">
                        <iconnative
                            icon="next-arrow-black"
                            color="#000"
                            width="20"
                            height="20"
                        />                                
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-1/6 flex items-center justify-center mr-2">
                        <iconnative
                            icon="calendar-w"
                            color="#000"
                            width="48"
                            height="48"
                        />                                
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-sm">Wednesday</div>
                        <div class="text-sm text-red font-semibold">Close</div>
                    </div>
                    <div class="w-1/7 flex items-center justify-center">
                        <iconnative
                            icon="next-arrow-black"
                            color="#000"
                            width="20"
                            height="20"
                        />                                
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-1/6 flex items-center justify-center mr-2">
                        <iconnative
                            icon="calendar-t"
                            color="#000"
                            width="48"
                            height="48"
                        />                                
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-sm">Thursday</div>
                        <div class="text-sm text-red font-semibold">Close</div>
                    </div>
                    <div class="w-1/7 flex items-center justify-center">
                        <iconnative
                            icon="next-arrow-black"
                            color="#000"
                            width="20"
                            height="20"
                        />                                
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-1/6 flex items-center justify-center mr-2">
                        <iconnative
                            icon="calendar-f"
                            color="#000"
                            width="48"
                            height="48"
                        />                                
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-sm">Friday</div>
                        <div class="text-sm text-red font-semibold">Close</div>
                    </div>
                    <div class="w-1/7 flex items-center justify-center">
                        <iconnative
                            icon="next-arrow-black"
                            color="#000"
                            width="20"
                            height="20"
                        />                                
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-1/6 flex items-center justify-center mr-2">
                        <iconnative
                            icon="calendar-s"
                            color="#000"
                            width="48"
                            height="48"
                        />                                
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-sm">Saturday</div>
                        <div class="text-sm text-red font-semibold">Close</div>
                    </div>
                    <div class="w-1/7 flex items-center justify-center">
                        <iconnative
                            icon="next-arrow-black"
                            color="#000"
                            width="20"
                            height="20"
                        />                                
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-1/6 flex items-center justify-center mr-2">
                        <iconnative
                            icon="calendar-s"
                            color="#000"
                            width="48"
                            height="48"
                        />                                
                    </div>
                    <div class="w-1/1">
                        <div class="font-bold text-sm">Sunday</div>
                        <div class="text-sm text-red font-semibold">Close</div>
                    </div>
                    <div class="w-1/7 flex items-center justify-center">
                        <iconnative
                            icon="next-arrow-black"
                            color="#000"
                            width="20"
                            height="20"
                        />                                
                    </div>
                </div>
            </div>
        </div>  
        <div class="flex justify-evenly w-full py-6">
            <div class="flex py-2 rounded-2xl border border-dashed border-[#FF0000] w-42 justify-center">
              <div class="text-xl text-[#FF0000]">Cancel</div>
            </div>
            <div class="flex py-2 rounded-2xl bg-primary w-42 justify-center">
              <div class="text-xl text-white">Save</div>
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
  