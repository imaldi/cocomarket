<template>
  <div>
    <div class="container pb-30">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div @click="router.back()">
            <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Checkout</div>
        </div>
      </div>

      <div class="mx-8">
        <div class="my-6">
          <div class="bg-[#7ACDD640] px-4 pt-2 pb-8 rounded-xl text-xs">
            Want to change the order type? Click “Switch”
          </div>
          <div class="bg-white -mt-6 px-4 py-6 rounded-xl flex">
            <img
              class="p-2 rounded-full bg-[#7ACDD6]"
              src="../assets/img/checkout.png"
              alt="Driver Picture"
              width="28"
            />
            <div class="flex flex-col justify-center mx-4">
              <div class="text-sm font-bold">Delivery</div>
              <div class="text-xs font-normal tracking-tighter">10 - 15 Menit</div>
            </div>
            <div>
              <button
                class="ml-12 bg-white border-[#E68027] text-color-[#E68027] rounded-full border-2 text-xs py-2 px-6"
              >
                Switch
              </button>
            </div>
          </div>
        </div>

        <div class="flex px-2">
          <div class="w-1/2 justify-evenly">
            <div class="text-xs font-bold">Delivery Address</div>
            <div class="text-base font-bold">Home</div>
            <div class="text-xs font-normal">
              Jl. Raya Batam Centre Blok A No. 10 Perumahan Taman Baloi Indah Batam, Kepulauan Riau 29432, Indonesia
            </div>
          </div>
          <div>
            <button
              class="ml-10 bg-white border-[#E68027] text-color-[#E68027] rounded-full border-2 text-xs py-2 px-6"
            >
              Change
            </button>
          </div>
        </div>
      </div>
      <div class="border-solid border-0 border-b my-4 border-gray"></div>

      <div class="mx-8">
        <div class="text-sm font-semibold mb-4">Order List</div>

        <div>
          <div class="border-solid border border-gray rounded-2xl p-4 my-2">
            <div class="flex flex-row">
              <img class="bg-[#F2F3F2] px-4 rounded-2xl" src="../assets/img/meat1.png" alt="Order Picture" width="70" />
              <div class="mx-4 flex flex-col justify-center">
                <div class="color-black text-sm">Kangkung</div>
                <div class="color-gray text-sm">5 Ons, Fresh first</div>
              </div>
            </div>
            <div class="flex w-full justify-between mt-4">
              <div class="font-bold text-sm tracking-thighter">Rp. 15.000</div>
              <div class="flex items-center">
                <button class="shadow bg-white border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-minus" color="#E68027" width="14" height="14" />
                </button>
                <div class="text-sm color-gray mx-2">2</div>
                <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-plus" color="white" width="14" height="14" />
                </button>
              </div>
            </div>
          </div>
          <div class="border-solid border border-gray rounded-2xl p-4 my-2">
            <div class="flex flex-row">
              <img class="bg-[#F2F3F2] px-4 rounded-2xl" src="../assets/img/meat1.png" alt="Order Picture" width="70" />
              <div class="mx-4 flex flex-col justify-center">
                <div class="color-black text-sm">Kangkung</div>
                <div class="color-gray text-sm">5 Ons, Fresh</div>
              </div>
            </div>
            <div class="flex w-full justify-between mt-4">
              <div class="font-bold text-sm tracking-thighter">Rp. 15.000</div>
              <div class="flex items-center">
                <button class="shadow bg-white border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-minus" color="#E68027" width="14" height="14" />
                </button>
                <div class="text-sm color-gray mx-2">2</div>
                <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-plus" color="white" width="14" height="14" />
                </button>
              </div>
            </div>
          </div>
          <div class="border-solid border border-gray rounded-2xl p-4 my-2">
            <div class="flex flex-row">
              <img class="bg-[#F2F3F2] px-4 rounded-2xl" src="../assets/img/meat1.png" alt="Order Picture" width="70" />
              <div class="mx-4 flex flex-col justify-center">
                <div class="color-black text-sm">Kangkung</div>
                <div class="color-gray text-sm">5 Ons, Fresh</div>
              </div>
            </div>
            <div class="flex w-full justify-between mt-4">
              <div class="font-bold text-sm tracking-thighter">Rp. 15.000</div>
              <div class="flex items-center">
                <button class="shadow bg-white border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-minus" color="#E68027" width="14" height="14" />
                </button>
                <div class="text-sm color-gray mx-2">2</div>
                <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-plus" color="white" width="14" height="14" />
                </button>
              </div>
            </div>
          </div>
          <div class="border-solid border border-gray rounded-2xl p-4 my-2">
            <div class="flex flex-row">
              <img class="bg-[#F2F3F2] px-4 rounded-2xl" src="../assets/img/meat1.png" alt="Order Picture" width="70" />
              <div class="mx-4 flex flex-col justify-center">
                <div class="color-black text-sm">Kangkung</div>
                <div class="color-gray text-sm">5 Ons, Fresh</div>
              </div>
            </div>
            <div class="flex w-full justify-between mt-4">
              <div class="font-bold text-sm tracking-thighter">Rp. 15.000</div>
              <div class="flex items-center">
                <button class="shadow bg-white border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-minus" color="#E68027" width="14" height="14" />
                </button>
                <div class="text-sm color-gray mx-2">2</div>
                <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-plus" color="white" width="14" height="14" />
                </button>
              </div>
            </div>
          </div>
          <div class="border-solid border border-gray rounded-2xl p-4 my-2">
            <div class="flex flex-row">
              <img class="bg-[#F2F3F2] px-4 rounded-2xl" src="../assets/img/meat1.png" alt="Order Picture" width="70" />
              <div class="mx-4 flex flex-col justify-center">
                <div class="color-black text-sm">Kangkung</div>
                <div class="color-gray text-sm">5 Ons, Fresh last</div>
              </div>
            </div>
            <div class="flex w-full justify-between mt-4">
              <div class="font-bold text-sm tracking-thighter">Rp. 15.000</div>
              <div class="flex items-center">
                <button class="shadow bg-white border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-minus" color="#E68027" width="14" height="14" />
                </button>
                <div class="text-sm color-gray mx-2">2</div>
                <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                  <icon icon="ic:round-plus" color="white" width="14" height="14" />
                </button>
              </div>
            </div>
          </div>
          <div class="border-solid border border-gray rounded-2xl p-4 my-2 flex">
            <div>
              <div class="text-black text-xs tracking-tight">Want To Add More Item?</div>
              <div class="text-gray text-xs tracking-tight">You can still add other items.</div>
            </div>
            <button
              class="ml-14 bg-white border-[#E68027] text-color-[#E68027] rounded-full border-2 text-xs py-2 px-4"
            >
              Add More
            </button>
          </div>
        </div>
      </div>

      <div class="border-solid border-0 border-b my-4 border-gray"></div>

      <div class="mx-8">
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

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

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
