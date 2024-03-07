<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Receipt</div>
          </div>
        </div>
  
        <div class="my-auto mx-8 py-8">
                <div class="bg-white border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-center my-4">
                            <div class="w-1/3 flex justify-center items-center">
                                <img class="border border-solid border-gray rounded-full bg-white p-2" src="../assets/img/gerobak.png" alt="Cocomaret Logo" width="28" height="28">
                            </div>

                            <div class="w-1/1">
                                <div class="flex flex-col justify-center mr-2">
                                <div class="font-bold text-md tracking-tighter">Bakso Solo Kang Em...</div>
                                <div class="font-normal  text-gray text-sm">7 Jan 2023 | 14.30 WIB</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border border-solid border-gray border-x-0 border-t-0 pb-2 mb-2">
                        <div class="px-4 flex items-center mb-2">
                            <div class="font-300 text-sm  w-2/3">Kangkung, 5 Ons, Fresh</div>
                            <div class="font-300 text-sm w-1/10">1</div>
                            <div class="font-semibold text-sm w-1/3 text-end">25.000</div>
                        </div>
                        
                        <div class="px-4 flex items-center mb-2">
                            <div class="font-300 text-sm  w-2/3">Kangkung, 5 Ons, Fresh</div>
                            <div class="font-300 text-sm w-1/10">1</div>
                            <div class="font-semibold text-sm w-1/3 text-end">25.000</div>
                        </div>
                        
                        <div class="px-4 flex items-center mb-2">
                            <div class="font-300 text-sm  w-2/3">Kangkung, 5 Ons, Fresh</div>
                            <div class="font-300 text-sm w-1/10">1</div>
                            <div class="font-semibold text-sm w-1/3 text-end">25.000</div>
                        </div>
                    </div>

                    <div class="border border-solid border-gray border-x-0 border-t-0 pb-2 mb-2">
                        <div class="px-4 flex items-center mb-2">
                            <div class="font-300 text-md  w-2/3">Sub Total</div>
                            <div class="font-300 text-md w-1/10">1</div>
                            <div class="font-semibold text-md w-1/3 text-end">25.000</div>
                        </div>
                        
                        <div class="px-4 flex items-center mb-2">
                            <div class="font-300 text-sm  w-2/3">Delivery Cost</div>
                            <div class="font-300 text-sm w-1/10"></div>
                            <div class="font-semibold text-sm w-1/3 text-end">25.000</div>
                        </div>
                        
                        <div class="px-4 flex items-center mb-2">
                            <div class="font-300 text-sm  w-2/3">Tax</div>
                            <div class="font-300 text-sm w-1/10"></div>
                            <div class="font-semibold text-sm w-1/3 text-end">25.000</div>
                        </div>

                        <div class="px-4 flex items-center mb-2">
                            <div class="font-300 text-sm  w-2/3">Discount</div>
                            <div class="font-300 text-sm w-1/10"></div>
                            <div class="font-semibold text-sm w-1/3 text-end">-25.000</div>
                        </div>
                    </div>

                    <div>
                        <div class="px-4 flex items-center mb-2">
                            <div class="font-bold text-md  w-2/3">Total Payment</div>
                            <div class="font-300 text-md w-1/10"></div>
                            <div class="font-bold text-md w-1/3 text-end text-[#E68027]">25.000</div>
                        </div>
                    </div>

                    <div class="flex w-full justify-between p-4">
                        <div class="flex p-2 mr-8 rounded-2xl bg-primary w-full justify-center items-center">
                            <div class="text-2xl text-white">Save Receipt</div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .container {
    background-color: #7ACDD6;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    color: #000000;
  }
  </style>
  