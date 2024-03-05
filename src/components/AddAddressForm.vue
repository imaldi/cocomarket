<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Add Address</div>
          </div>
        </div>
  
        <div>
          <div class="w-full"><img src="../assets/img/add-address.png" width="100%" height="20%" alt="maps" /></div>
        </div>
        

        <div class="relative">
        <div class="fixed w-full h-[54vh] bg-white rounded-lg shadow-md" style="bottom: 0">
            <div class="flex justify-center">
                <div class="bg-gray rounded-full w-20 h-1 m-2 "></div>
            </div>

            <div class="mt-4 px-10">
                <div>
                    <div class="flex font-semibold text-gray">Save an address as<div class="text-red">*</div></div>
                </div>

                <div class="flex my-4">
                    <div class="px-4 py-2 bg-[#7ACDD6] rounded-2xl font-semibold text-white text-sm">Home</div>
                    <div class="px-4 py-2 bg-[#D9D9D9] rounded-2xl font-semibold text-black text-sm mx-2">Work</div>
                    <div class="px-4 py-2 bg-[#D9D9D9] rounded-2xl font-semibold text-black text-sm">Other</div>
                </div>

                <div>
                    <div class="flex font-semibold text-black">Address Detail</div>
                    <form class="text-xs" action="">
                        <div class="rounded-xl flex bg-[#F2F2F2] justify-between px-6 py-4">
                            <div class="text-gray ">Province, City, district, Zip Code</div>
                            <div class="flex items-center justify-center">
                                <icon class="rounded-full" icon="mingcute:right-line" width="20" color="gray"></icon>
                            </div>
                        </div>
                        
                        <input class="w-5/6 border-0 rounded-xl bg-[#F2F2F2] px-6 py-4 my-2" type="text" name="" id="" placeholder="Street Name, Building, Home Number">

                        <input class="w-5/6l border-0 rounded-xl bg-[#F2F2F2] px-6 py-4" type="text" name="" id="" placeholder="Other">

                        <button class="my-8 w-full flex justify-around px-10 py-4 bg-[#EFFDFF] border-dotted border-2 rounded-3xl border-[#7ACDD6] text-[#7ACDD6]">Save Address</button>
                    </form>
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
  </style>
  