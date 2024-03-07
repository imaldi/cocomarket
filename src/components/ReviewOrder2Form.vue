<template>
    <div>
      <div class="container pb-28">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Review Order</div>
          </div>
        </div>
  
        <div class="mx-8 pt-8">
            <div>
                <div class="flex p-2 border border-solid border-gray rounded-xl mb-4">
                    <div class="bg-#F2F3F2 rounded-xl px-2 mr-4">
                        <img src="../assets/img/meat1.png" alt="Product Image" width="120">
                    </div>
                    <div class="flex flex-col justify-center">
                        <div class="font-semibold">Kangkung</div>
                        <div class="font-semibold text-gray">5 Ons, Fresh</div>
                        <div class="font-bold">Rp.15.000</div>
                    </div>
                </div>
                <div class="flex p-2 border border-solid border-gray rounded-xl mb-4">
                    <div class="bg-#F2F3F2 rounded-xl px-2 mr-4">
                        <img src="../assets/img/meat1.png" alt="Product Image" width="120">
                    </div>
                    <div class="flex flex-col justify-center">
                        <div class="font-semibold">Kangkung</div>
                        <div class="font-semibold text-gray">5 Ons, Fresh</div>
                        <div class="font-bold">Rp.15.000</div>
                    </div>
                </div>
                <div class="flex p-2 border border-solid border-gray rounded-xl mb-4">
                    <div class="bg-#F2F3F2 rounded-xl px-2 mr-4">
                        <img src="../assets/img/meat1.png" alt="Product Image" width="120">
                    </div>
                    <div class="flex flex-col justify-center">
                        <div class="font-semibold">Kangkung</div>
                        <div class="font-semibold text-gray">5 Ons, Fresh</div>
                        <div class="font-bold">Rp.15.000</div>
                    </div>
                </div>
            </div>
            
            <div class="py-6">
                <div class="px-6 text-sm">
                    <div class="flex justify-between mb-2">
                        <div class="font-300">Order Date</div>
                        <div class="font-semibold">Sep 8, 2023 | 10:00 PM</div>
                    </div>
                    <div class="flex justify-between mb-2">
                        <div class="font-300">Promo Code</div>
                        <div class="font-semibold">FR1254HGGWE</div>
                    </div>
                    <div class="flex justify-between mb-2">
                        <div class="font-300">Expected Arrived</div>
                        <div class="font-semibold">Sep 8, 2023 | 13:30 PM</div>
                    </div>
                </div>

                <div class="px-4 py-2 text-sm my-6 border border-solid border-gray border-x-0">
                    <div class="flex justify-between mb-2 px-2">
                        <div class="font-300">Total</div>
                        <div class="font-semibold">45.000</div>
                    </div>
                    <div class="flex justify-between mb-2 px-2">
                        <div class="font-300">Delivery Charge</div>
                        <div class="font-semibold">5.000</div>
                    </div>
                    <div class="flex justify-between mb-2 px-2">
                        <div class="font-300">Tax</div>
                        <div class="font-semibold">2.000</div>
                    </div>
                    <div class="flex justify-between mb-2 px-2">
                        <div class="font-300">Discount</div>
                        <div class="font-semibold">2.000</div>
                    </div>
                </div>

                <div class="px-6 text-md">
                    <div class="flex justify-between mb-2">
                        <div class="font-300">Total Payment</div>
                        <div class="font-semibold text-[#E68027]">47.900</div>
                    </div>
                </div>
            </div>
            
            <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
                <div class="flex justify-between border border-solid border-x-0 border-t-0 border-gray py-2">
                        <div class="font-bold text-sm ">Delivery Details</div>
                </div>
                <div class="flex justify-between my-2 text-sm"> 
                    <div>No. Pengiriman</div>
                    <div class="font-bold">S-523-252-2555</div>
                    </div>
                    <div class="flex items-center justify-between mb-2 text-sm"> 
                        <div class="flex items-center">
                            <icon class="mr-2" icon="flowbite:map-pin-solid" color="#E68027" width="24"  />
                            <div>
                                <div class="
                                text-md font-semibold">On delivery by Nadhif</div>
                                <div class="
                                text-xs font-normal">23 Jan 2023 - 16.45 WIB</div>
                            </div>
                        </div>
                        
                        <div class="flex">
                            <div class="font-bold text-[#E68027]">Track </div>
                            <div><icon class="mr-2" icon="mingcute:right-line" color="#E68027" width="24"  /></div>
                        </div>
                    </div>
                </div>
      </div>  

      <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">        
          <div class="flex w-full justify-between p-4">
            <div class="flex p-2 mr-8 rounded-2xl bg-primary w-full justify-center">
              <div class="text-2xl text-white">Back</div>
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
    // height: 100vh;
    color: #000000;
  }
  </style>
  