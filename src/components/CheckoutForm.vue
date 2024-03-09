<template>
  <div>
    <div class="container pb-30">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div @click="router.back()">
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Checkout</div>
        </div>
      </div>

      <div class="mx-8">
        <div class="my-6">
          <div class="bg-[#7ACDD640] px-4 pt-2 pb-8 rounded-xl text-xs">
            Want to change the order type? Click “Switch”
          </div>
          <div class="bg-white -mt-6 px-4 py-6 rounded-xl flex items-center">
            <iconnative
              class="px-2 py-1 rounded-full bg-[#7ACDD6]"
              icon="delivery"
              alt="Driver Picture"
              width="28"
              height="28"
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
          <div v-if="totalItem" class="border-solid border border-gray rounded-2xl p-4 my-2">
            <div class="flex flex-row">
              <img class="bg-[#F2F3F2] px-4 rounded-2xl" src="../assets/img/meat1.png" alt="Order Picture" width="70" />
              <div class="mx-4 flex flex-col justify-center">
                <div class="color-black text-sm">
                  {{ namesWithoutNumbers.join(", ") }}
                </div>
                <div class="color-gray text-sm">Fresh {{ totalItem.products_subtitle }}</div>
              </div>
            </div>
            <div class="flex w-full justify-between mt-4">
              <div class="font-bold text-sm tracking-thighter">Rp. {{ totalItem.amount }}</div>
              <div class="flex items-center">
                <!-- <button class="shadow bg-white border-0 outline-0 py-0 px-2">
                  <iconnative icon="minus-orange" color="#E68027" width="14" height="14" />
                </button> -->
                <div class="text-xs font-bold color-gray mx-2">Total: {{ totalItem.total }}</div>
                <!-- <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                  <iconnative icon="plus-white" color="white" width="14" height="14" />
                </button> -->
              </div>
            </div>
          </div>

          <div class="border-solid border border-gray rounded-2xl p-4 my-2 flex">
            <div>
              <div class="text-black text-xs tracking-tight">Want To Add More Item?</div>
              <div class="text-gray text-xs tracking-tight">You can still add other items.</div>
            </div>
            <button
              @click="router.push('/findfreshfood')"
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
            <iconnative class="bg-[#E6802760] px-2 py-1 rounded-full" icon="coupon" color="white" width="28" />
          </div>

          <div class="text-black font-bold text-xs tracking-tight">use the promo first, right?</div>

          <iconnative icon="circle-arrow-right" color="#E68027" width="28" height="28" />
        </div>

        <div
          class="border-solid border border-gray rounded-2xl rounded-b-0 border-b-0 p-4 mt-2 flex flex-col justify-between"
          v-if="totalItem"
        >
          <div class="font-bold text-sm">Payment Summary</div>
          <div class="flex justify-between my-2 text-sm">
            <div>Price</div>
            <div>RP. {{ price }}</div>
          </div>
          <div class="flex justify-between my-2 text-sm">
            <div>Shipping Costs</div>
            <div>{{ shippingCost }}</div>
          </div>
          <div class="flex justify-between my-2 text-sm">
            <div>Other costs</div>
            <div>{{ otherCost }}</div>
          </div>
        </div>
        <div class="border-solid border border-b-0 border-gray p-4 flex flex-col justify-between">
          <div class="font-bold text-base flex justify-between my-2">
            <div>Price</div>
            <div>{{ totalPrice }}</div>
          </div>
        </div>
        <div class="border-solid border border-gray p-4 flex flex-col justify-between rounded-2xl rounded-t-0">
          <div class="font-bold text-sm flex justify-between my-2">
            <div class="text-[#E68027]">Detail</div>
            <div>
              <iconnative icon="next-arrow" color="#E68027" width="20" height="20" />
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="px-4 flex flex-row justify-center">
            <div class="flex items-center">
              <iconnative class="" icon="circle-wallet" color="white" width="32" height="32" />
              <div class="mx-4">
                <div class="text-xs">CocoPay</div>
                <div class="text-sm">0</div>
              </div>
            </div>
            <div class="flex items-center mr-6">
              <iconnative icon="plus" color="gray" width="20" height="20" />
            </div>
            <div class="flex items-center">
              <iconnative icon="money" color="green" width="28" height="28" />
              <div class="mx-4">
                <div class="text-xs">Cash</div>
                <div class="text-sm">{{ totalPrice }}</div>
              </div>
            </div>
            <div class="flex items-center ml-8">
              <iconnative icon="dotted-circle" color="white" width="28" height="28" />
            </div>
          </div>
          <div @click="confirmOrder" class="flex w-full justify-between p-4">
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
import { useRouter } from "vue-router";
import { useCartStore } from "../store/modules/cart";
import { ref, onMounted, computed } from "vue";
import { useAddressStore } from "../store/modules/address";
import iconnative from "../icon/index.vue";

const router = useRouter();
const addressStore = useAddressStore();
const cartStore = useCartStore();
const namesWithoutNumbers = ref<string[]>([]);
const totalItem = ref<ItemsTotal | null>(null);
interface ItemsTotal {
  price: string;
  total: string;
  amount: number;
  products_subtitle: string;
  products: { name: string }[];
}
const total = ref(1);
const shippingCost = ref(5000);
const otherCost = ref(2000);
const totalPrice = computed(() => {
  if (totalItem.value) {
    return totalItem.value.amount * total.value + otherCost.value + shippingCost.value;
  }
  return 0;
});

const price = computed(() => {
  if (totalItem.value) {
    return totalItem.value.amount * total.value;
  }
  return 0;
});
const cash = ref("cash");
const confirmOrder = async () => {
  const payload = {
    cash: cash.value,
  };
  try {
    const res = await cartStore.confirmOrders(payload);
    console.log(res);
    router.push(`/ordersuccess/${res.data.orders.id}`);
  } catch (error) {
    console.log(error);
  } finally {
  }
};
const getListCart = async () => {
  try {
    const res = await cartStore.getCartTotal();
    totalItem.value = res.data as ItemsTotal;
    namesWithoutNumbers.value = totalItem.value.products.map((item) => item.name.replace(/\d+/g, ""));
    const namesWithoutNumbersCleaned = namesWithoutNumbers.value.map((name: string) => name.replace(/\d+/g, ""));
    console.log(namesWithoutNumbersCleaned);
  } catch (error) {
    console.log(error);
  } finally {
  }
};
const getListAddress = async () => {
  try {
    const res = await addressStore.getListAddress();
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  getListCart();
  getListAddress();
});
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
