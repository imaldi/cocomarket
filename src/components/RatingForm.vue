<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Review Order</div>
          </div>
        </div>
  

        <div class="mx-8 py-8">
                <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
                    <div class="flex justify-between border border-solid border-x-0 border-t-0 border-gray py-2">
                        <div class="font-bold text-sm ">Product Details</div>
                    </div>
                   
                    <div class="py-2">
                        <div class="flex py-2">
                            <div class="w-1/4"><img class="rounded-xl" src="../assets/img/bakso2.png" alt="" width="60"></div>
                            <div class="w-3/4 flex flex-col justify-around">
                                <div class="text-sm font-bold">Bakso Campur Enak</div>
                                <div class="flex justify-between">
                                    <div class="text-xs text-gray">x1</div>
                                    <div class="text-xs  font-semibold">Rp.25.000</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex py-2">
                            <div class="w-1/4"><img class="rounded-xl" src="../assets/img/teh.png" alt="" width="60"></div>
                            <div class="w-3/4 flex flex-col justify-around">
                                <div class="text-sm font-bold">Teh Obengk</div>
                                <div class="flex justify-between">
                                    <div class="text-xs text-gray">x1</div>
                                    <div class="text-xs  font-semibold">Rp.7.000</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex py-2">
                            <div class="w-1/4"><img class="rounded-xl" src="../assets/img/meat 4.png" alt="" width="60"></div>
                            <div class="w-3/4 flex flex-col justify-around">
                                <div class="text-sm font-bold">Mie Ayam</div>
                                <div class="flex justify-between">
                                    <div class="text-xs text-gray">x1</div>
                                    <div class="text-xs  font-semibold">Rp.28.000</div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div class="px-4 mt-4">
                    <div class="flex justify-center my-4 py-2 text-xl font-bold "> 
                        How is your Order?
                    </div>                    
                    <div class="flex justify-center my-4 pt-4 pb-6 text-xl font-bold border border-dotted border-x-0 border-gray"> 
                        <div class="flex flex-col justify-center items-center">
                            <div class="text-xs font-400 mb-4">Your overall rating</div>
                            <div class="text-3xl font-400">*Star Icon Here*</div>
                        </div>
                    </div>                    
                </div>

                <div class="px-4 mt-4 mb-8">
                    <div class="font-semibold text-[10px] my-2">Add detailed Reivew</div>
                    <div>
                        <textarea class="w-full border-solid border-gray border rounded-md " name="message" id="message" rows="4" placeholder="Enter Here"></textarea>
                    </div>
                </div>

                <div class="flex justify-around ">
                    <div class="w-1/3 text-center rounded-2xl bg-white font-semibold text-[#7ACDD6] text-xl px-6 py-4 ">Cancel</div>
                    <div class="w-1/3 text-center rounded-2xl bg-[#7ACDD6] font-semibold text-white text-xl px-6 py-4">Submit</div>
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
  