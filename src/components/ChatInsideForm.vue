<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8 flex">
          <div class="w-5/6 flex">
            <div class="flex justify-center items-center mr-4">
              <icon
                icon="ion:arrow-back-circle-outline"
                color="#000"
                width="40"
                height="40"
              />
            </div>
            <div class="flex items-center justify-between">
                <img
                  class="mr-2 rounded-full bg-white"
                  src="../assets/img/profile.svg"
                  alt="Photo Profile"
                  width="46"
                  height="46"
                />

                <div class="flex flex-col justify-center">
                  <div class="font-semibold text-md">
                    John Doe
                  </div>
                  <div class="font-normal text-gray text-xs">
                    Active Now
                  </div>
                </div>
            </div>
          </div>
          <div class="flex justify-end items-center"> 
                <icon
                icon="solar:phone-linear"
                color="#000"
                width="28"
                height="28"
              /></div>
        </div>
  
        <div class="px-8 pt-10 bg-white h-[76vh] overflow-y-scroll">
          <div class="w-full">
            <div class="flex justify-center">
                <div class="px-2 bg-[#F2F7FB] rounded-xl text-center w-14">Today</div>
            </div>

            <div class="my-10">
                <div class="flex">
                    <img
                        class="mr-2 rounded-full bg-white"
                        src="../assets/img/profile.svg"
                        alt="Photo Profile"
                        width="46"
                        height="46"
                    />
                    <div>
                        <div class="font-semibold text-md mb-2">John Doe</div>
                        <div>
                            <div class="text-sm bg-[#F2F7FB] p-2 rounded-b-xl rounded-r-xl">
                                Saya sedang dalam perjalanan yaa
                            </div>
                            <div class="flex justify-end text-xs py-2 text-gray self-end">
                                09:25 AM
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-for="item in 10" :key="item" class="my-10">
                <div class="flex justify-end">
                    <div>
                        <div class="text-sm bg-[#20A090] p-2 rounded-b-xl rounded-l-xl text-white">
                            Baik baikkkkkkkkkkk
                        </div>
                        <div class="flex text-xs py-2 text-gray">
                            09:25 AM
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-10">
                <div class="flex justify-end">
                    <div>
                        <div class="text-sm bg-[#20A090] p-2 rounded-b-xl rounded-l-xl text-white">
                            Baik baikkkkkkkkkkk lastt
                        </div>
                        <div class="flex text-xs py-2 text-gray">
                            09:25 AM
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  
        <div class="relative">
          <div
            class="fixed flex items-center justify-center w-full h-[8vh] bg-white rounded-t-lg shadow-md"
            style="bottom: 0"
          >
            <div class="flex justify-evenly">
                <div class="flex items-center mr-4"> 
                    <icon
                    icon="ph:paperclip"
                    color="#000"
                    width="28"
                    height="28"
                    />
                </div>
                <form class="mr-2" action="">
                    <input class="w-58 h-8 rounded border-0 bg-[#F3F6F6] px-2" type="text" placeholder="Write Your Message">
                </form>
                <div class="w-16 flex justify-between">
                    <div class=" flex items-center mr-2"> 
                        <icon
                        icon="lucide:camera"
                        color="#000"
                        width="28"
                        height="28"
                        />
                    </div>
                    <div class="flex items-center"> 
                        <icon
                        icon="cil:mic"
                        color="#000"
                        width="28"
                        height="28"
                        />
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </template>

  
  <style scoped lang="scss">
  .container {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    color: #000000;
  }
  </style>./mapsTracker.vue
  