<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Coupon</div>
          </div>
          <div class="my-8">
                    <div class="flex border border-solid py-4 border-[#7ACDD6] rounded-xl bg-white z-2 -mb-2">
                        <div class="flex items-center px-4 border border-dashed border-t-0 border-b-0 border-l-0"><img src="../assets/coupon.png" alt="Coupon Logo" width="60"></div>
                        <div class="pl-4">
                            <div class="text-xl font-bold">20% OFF</div>
                            <div class="text-xs font-normal">WELCOME200</div>
                            <div class="text-xs text-gray font-semibold mt-2">Valid until 01 February 2022</div>
                        </div>
                    </div>
                    <div class="text-sm font-bold text-center bg-[#7ACDD6] py-2 rounded-xl rounded-t-0">
                        USE
                    </div>
                </div>
        </div>

        <div class="mx-8 my-6">
            <div class="text-base font-bold mb-2">DISKON 20% OFF Delivery</div>
            <div class="text-sm font-normal mb-2 pb-2 border border-solid border-gray border-x-0 border-t-0">Delivery Food</div>
            <div class="flex flex-row justify-between mb-4">
                <div class="text-sm font-semibold">Berlaku Hingga</div>
                <div class="text-sm font-semibold">01 February 20222</div>
            </div>
        </div>

        <div class="border-4 border-solid border-slate-200 border-x-0 border-t-0"></div>

        <div class="px-4 my-6">
            <div class="flex items-center mb-4">
                <div class="1/3"><icon icon="bitcoin-icons:sign-outline" color="#000" width="50" height="50" /></div>
                <div class="2/3 px-2">
                    <div class="font-bold">Terms & Condition</div>
                    <div class="text-xs font-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min....</div>
                </div>
                <div class="1/3"><icon icon="mingcute:right-line" color="black" width="28" height="28" /></div>
            </div>

            <div class="flex items-center mb-4">
                <div class="1/3"><icon icon="material-symbols:menu-book" color="#000" width="34" height="34" /></div>
                <div class="2/3 pl-6">
                    <div class="font-bold">How To Use</div>
                    <div class="text-xs font-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min....</div>
                </div>
                <div class="1/3"><icon icon="mingcute:right-line" color="black" width="28" height="28" /></div>
            </div>

            <div class="flex items-center mb-4">
                <div class="1/3"><icon icon="mingcute:information-fill" color="#000" width="34" height="34" /></div>
                <div class="2/3 pl-6">
                    <div class="font-bold">Coupon Description</div>
                    <div class="text-xs font-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min....</div>
                </div>
                <div class="1/3"><icon icon="mingcute:right-line" color="black" width="28" height="28" /></div>
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
  