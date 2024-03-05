<template>
  <div>
    <div class="container pb-30">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div>
            <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Cart</div>
        </div>
      </div>

      <div class="mx-8">
        <div class="my-2">
          <div class="bg-white px-4 py-6 rounded-xl flex justify-between items-center">
            <img
              class="p-2 rounded-full bg-white border border-solid border-gray"
              src="../assets/img/cart.png"
              alt="Driver Picture"
              width="28"
            />
            <div class="flex flex-col justify-center mr-6">
              <div class="text-sm flex">
                Send to:
                <div class="ml-2 font-bold">Delivery</div>
              </div>
              <div class="text-xs font-normal tracking-tighter">Jl. Raya Batam Centre Blok A No. 1...</div>
            </div>
            <div><icon icon="mingcute:right-line" color="#E68027" width="20" height="20" /></div>
          </div>
        </div>
        <div>
          <form class="flex" action="">
            <input type="checkbox" />
            <div class="ml-2 text-sm font-semibold">Choose All</div>
          </form>
        </div>
      </div>

      <div class="border-solid border-0 border-b my-4 border-gray"></div>

      <div class="mx-8">
        <div>
          <div class="border-solid border border-gray rounded-2xl p-4 my-2">
            <div class="text-sm font-semibold mb-4">Order List</div>

            <div class="py-6 rounded-xl flex justify-start items-center">
              <img class="p-2" src="../assets/img/cartstall.png" alt="Driver Picture" width="28" />
              <div class="flex flex-col justify-center">
                <div class="text-sm font-semibold">Bakso Solo Kang Emil</div>
                <div class="text-[10px] font-normal">Delivery time on the same day</div>
              </div>
            </div>
            <div class="mb-6">
              <div class="flex flex-row items-center">
                <form class="mr-2" action=""><input type="checkbox" /></form>
                <div class="border border-solid border-gray rounded-2xl">
                  <img class="p-2" src="../assets/img/tehobeng.png" alt="Order Picture" width="48" />
                </div>
                <div class="mx-4 flex flex-col justify-center">
                  <div class="color-black text-sm font-semibold">Teh Obeng</div>
                  <div class="text-sm font-normal">Rp. 7.000</div>
                </div>
              </div>
              <div class="flex w-full justify-end mt-4 items-center">
                <div>
                  <icon icon="bi:trash" color="darkgray" width="20" height="20" />
                </div>
                <div class="mx-2">
                  <button class="bg-[#E68027] text-color-white rounded-full text-xs">
                    <icon icon="ic:round-plus" color="white" width="14" height="14" />
                    Note
                  </button>
                </div>
                <div class="flex items-center">
                  <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                    <icon icon="ic:round-minus" color="white" width="14" height="14" />
                  </button>
                  <div class="text-sm color-gray mx-2">2</div>
                  <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                    <icon icon="ic:round-plus" color="white" width="14" height="14" />
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <div class="flex flex-row items-center">
                <form class="mr-2" action=""><input type="checkbox" /></form>
                <div class="border border-solid border-gray rounded-2xl">
                  <img class="p-2" src="../assets/img/meat 4.png" alt="Order Picture" width="48" />
                </div>
                <div class="mx-4 flex flex-col justify-center">
                  <div class="color-black text-sm font-semibold">Mie Ayam</div>
                  <div class="text-sm font-normal">Rp. 28.000</div>
                </div>
              </div>
              <div class="flex w-full justify-end mt-4 items-center">
                <div>
                  <icon icon="bi:trash" color="darkgray" width="20" height="20" />
                </div>
                <div class="mx-2">
                  <button class="bg-[#E68027] text-color-white rounded-full text-xs">
                    <icon icon="ic:round-plus" color="white" width="14" height="14" />
                    Note
                  </button>
                </div>
                <div class="flex items-center">
                  <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                    <icon icon="ic:round-minus" color="white" width="14" height="14" />
                  </button>
                  <div class="text-sm color-gray mx-2">2</div>
                  <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                    <icon icon="ic:round-plus" color="white" width="14" height="14" />
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <div class="flex flex-row items-center">
                <form class="mr-2" action=""><input type="checkbox" /></form>
                <div class="border border-solid border-gray rounded-2xl">
                  <img class="p-0" src="../assets/img/bakso.png" alt="Order Picture" width="64" />
                </div>
                <div class="mx-4 flex flex-col justify-center">
                  <div class="color-black text-sm font-semibold">Bakso Campur Enak</div>
                  <div class="text-sm font-normal">Rp. 25.000</div>
                </div>
              </div>
              <div class="flex w-full justify-end mt-4 items-center">
                <div>
                  <icon icon="bi:trash" color="darkgray" width="20" height="20" />
                </div>
                <div class="mx-2">
                  <button class="bg-[#E68027] text-color-white rounded-full text-xs">
                    <icon icon="ic:round-plus" color="white" width="14" height="14" />
                    Note
                  </button>
                </div>
                <div class="flex items-center">
                  <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                    <icon icon="ic:round-minus" color="white" width="14" height="14" />
                  </button>
                  <div class="text-sm color-gray mx-2">2</div>
                  <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                    <icon icon="ic:round-plus" color="white" width="14" height="14" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-dashed border-0 border-b my-4 border-gray"></div>

      <div class="mx-8">
        <div class="border-solid border border-gray rounded-2xl p-4 my-2 flex">
          <div>
            <div class="text-black text-xs tracking-tight">Want To Add More Item?</div>
            <div class="text-gray text-xs tracking-tight">You can still add other items.</div>
          </div>
          <button class="ml-14 bg-white border-[#E68027] text-color-[#E68027] rounded-full border-2 text-xs py-2 px-4">
            Add More
          </button>
        </div>

        <div class="border-solid border border-gray rounded-2xl p-4 my-2 flex items-center justify-between">
          <div class="">
            <icon
              class="bg-[#E68027] p-2 rounded-full"
              icon="streamline:discount-percent-coupon-solid"
              color="white"
              width="20"
              height="20"
            />
          </div>

          <div class="text-black font-bold text-xs tracking-tight">use the promo first, right?</div>

          <icon icon="ph:arrow-circle-right" color="#E68027" width="28" height="28" />
        </div>

        <div
          class="border-solid border border-gray rounded-2xl rounded-b-0 border-b-0 p-4 mt-2 flex flex-col justify-between"
        >
          <div class="font-bold text-sm">Payment Summary</div>
          <div class="flex justify-between my-2 text-sm">
            <div>Price</div>
            <div>38.000</div>
          </div>
          <div class="flex justify-between my-2 text-sm">
            <div>Shipping Costs</div>
            <div>5.000</div>
          </div>
          <div class="flex justify-between my-2 text-sm">
            <div>Other costs</div>
            <div>2.000</div>
          </div>
        </div>
        <div class="border-solid border border-b-0 border-gray p-4 flex flex-col justify-between">
          <div class="font-bold text-base flex justify-between my-2">
            <div>Price</div>
            <div>38.000</div>
          </div>
        </div>
        <div class="border-solid border border-gray p-4 flex flex-col justify-between rounded-2xl rounded-t-0">
          <div class="font-bold text-sm flex justify-between my-2">
            <div class="text-[#E68027]">Detail</div>
            <div><icon icon="mingcute:right-line" color="#E68027" width="20" height="20" /></div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="px-4 flex flex-row">
            <div class="flex items-center">
              <icon
                class="bg-[#E68027] p-2 rounded-full"
                icon="ep:wallet-filled"
                color="white"
                width="20"
                height="20"
              />
              <div class="mx-4">
                <div class="text-xs">CocoPay</div>
                <div class="text-sm">0</div>
              </div>
            </div>
            <div class="flex items-center mr-4"><icon icon="ic:round-plus" color="gray" width="28" height="28" /></div>
            <div class="flex items-center">
              <icon icon="vaadin:cash" color="green" width="28" height="28" />
              <div class="mx-4">
                <div class="text-xs">Cash</div>
                <div class="text-sm">45.000</div>
              </div>
            </div>
            <div class="flex items-center ml-8">
              <icon
                class="bg-black p-2 rounded-full"
                icon="solar:menu-dots-bold"
                color="white"
                width="20"
                height="20"
              />
            </div>
          </div>
          <div class="flex w-full justify-between p-4">
            <div class="flex p-2 mr-8 rounded-2xl bg-primary w-full justify-center">
              <div class="text-2xl text-white">Confirm Order</div>
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
  height: 100%;
  color: #000000;
}
</style>
