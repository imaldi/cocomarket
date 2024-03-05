<template>
    <div>
      <div class="container pb-10">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Order</div>
          </div>
        </div>
  
        <div class="mx-8 pt-4">
        <div class="flex justify-center">
          <div class="mr-4 text-lg  text-primary all"  >All</div>
          <div class="mr-4 text-lg lain">Fresh Food</div>
          <div class="text-lg lain">COCOSTORE</div>
        </div>
        <hr />
      </div>

        <div class="mx-8">
                  <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
                    <div class="font-bold text-sm border border-solid border-x-0 border-t-0 border-gray py-2">Order Details</div>
                    <div class="flex justify-between my-2 text-sm"> 
                        <div>No. Order</div>
                        <div class="font-bold">O-2324-6586-678</div>
                    </div>
                    <div class="flex justify-between my-2 text-sm"> 
                        <div>Payment Method</div>
                        <div class="flex items-center">
                            <icon class="mr-2" icon="ep:wallet-filled" color="#E68027" width="24"  />
                            <div class="font-bold">Cocopay</div>
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

                <div class="border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
                    <div class="flex justify-between border border-solid border-x-0 border-t-0 border-gray py-2">
                        <div class="font-bold text-sm ">Delivery Address</div>
                                           </div>
                   
                    <div class="flex items-center justify-between mb-2 text-sm"> 
                        <div class="flex items-start mt-2">
                            <icon class="mr-2 w-1/10" icon="mage:map-marker-fill" color="#E68027" width="24"  />
                            <div class="w-3/3">
                                <div class="
                                text-md font-bold">Echa House</div>
                                <div class="
                                text-xs font-normal">Jl. Raya Batam Centre Blok A No. 10 Perumahan Taman Baloi Indah Batam, Kepulauan Riau 29432, Indonesia
                            </div>
                            </div>
                        </div>
        
                    </div>
                </div>

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

                <div class="px-4 mt-6">

                    <div class="flex justify-between my-4 text-sm font-semibold"> 
                        <div>Delivery Cost</div>
                        <div class="font-bold">15.000</div>
                    </div>
                    <div class="flex justify-between my-4 text-sm font-semibold"> 
                        <div>Tax</div>
                        <div class="font-bold">2.000</div>
                    </div>
                    <div class="flex justify-between my-4 text-sm font-semibold"> 
                        <div>Other costs</div>
                        <div class="font-bold">2.000</div>
                    </div>

                    <div class="flex justify-between my-4 py-2 text-sm font-semibold border border-solid border-x-0 border-gray"> 
                        <div>SubTotal</div>
                        <div class="font-bold">60.000</div>
                    </div>

                    <div class="flex justify-between my-4 text-sm font-semibold"> 
                        <div>Total Payment</div>
                        <div class="font-bold text-[#E68027]">72.900</div>
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

  .all{
    background-color: #89CFF0; color: white; border-radius: 10px;
    width : 50px; text-align: center;
  }
  .lain{
    background-color: gray;
    color: black;
    border-radius: 10px;
    width: auto;
    text-align: center;
    margin: 2px auto; /* Set top and bottom margin to 2px and center horizontally */
  }
  </style>
  