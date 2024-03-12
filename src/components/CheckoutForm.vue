<template>
  <div>
    <div class="container pb-40">
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
            <!-- Want to change the order type? Click “Switch” -->
            Delivery delivery will be delivered within that time
          </div>
          <div class="bg-white border border-solid border-light -mt-6 px-4 p-2 rounded-xl flex justify-between">
            <div class="flex my-auto">
              <iconnative
                class="px-2 py-1 rounded-full bg-[#7ACDD6]"
                icon="delivery"
                alt="Driver Picture"
                width="28"
                height="28"
              />
              <div class="flex flex-col justify-center mx-4">
                <div class="text-sm font-bold">Delivery</div>
                <div class="text-xs font-normal tracking-tighter">
                  {{ totalItem?.duration.split(" ")[0] - 5 }} - {{ totalItem?.duration }}
                </div>
              </div>
            </div>
            <!-- <div class="my-auto">
              <button
                class="ml-12 bg-white border-[#E68027] text-color-[#E68027] rounded-full border-2 text-xs py-2 px-6"
              >
                Switch
              </button>
            </div> -->
          </div>
        </div>

        <div class="px-4">
          <div class="text-xs font-bold">Delivery Address</div>
          <div class="flex">
            <div>
              <div class="text-base font-bold">Home</div>
              <div class="text-xs font-normal">
                {{ totalItem?.address.address }}
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
      </div>
      <div class="border-solid border-0 border-b my-4 border-gray"></div>

      <div class="mx-8">
        <div class="text-sm font-500 mb-4">Order List</div>
        <div>
          <template v-for="(item, n) in totalItem?.products">
            <div v-if="item.quantity !== 0" :key="n" class="border-solid border border-gray rounded-2xl p-4 my-2">
              <div class="flex flex-row">
                <img
                  class="bg-[#F2F3F2] px-4 rounded-2xl"
                  :src="(item && item.image) || '../assets/img/meat1.png'"
                  alt="Order Picture"
                  width="70"
                />
                <div class="mx-4 flex flex-col justify-center">
                  <div class="color-black text-sm font-400">
                    {{ item.name }}
                  </div>
                  <div class="color-gray text-sm">{{ item.subtitle }}</div>
                </div>
              </div>
              <div class="flex w-full justify-between mt-4">
                <div class="font-bold text-sm tracking-thighter">
                  {{
                    Number(item.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })
                  }}
                </div>
                <div class="flex items-center">
                  <!-- <button class="shadow bg-white border-0 outline-0 py-0 px-2">
                  <iconnative icon="minus-orange" color="#E68027" width="12" height="12" />
                </button> -->
                  <div class="text-xs font-bold color-gray mx-2">Total: {{ item.quantity }}</div>
                  <!-- <button class="shadow bg-[#E68027] border-0 outline-0 py-0 px-2">
                  <iconnative icon="plus-white" color="white" width="12" height="12" />
                </button> -->
                </div>
              </div>
            </div>
          </template>

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
        <div
          @click="router.push('/coupon')"
          class="border-solid border border-gray rounded-2xl p-4 my-2 flex items-center justify-between"
        >
          <div class="flex">
            <div class="my-auto">
              <iconnative class="bg-[#E6802760] px-2 py-1 rounded-full" icon="coupon" color="white" width="28" />
            </div>

            <div class="text-black my-auto font-bold text-xs ml-2 tracking-tight">use the promo first, right?</div>
          </div>

          <iconnative class="mt-auto" icon="circle-arrow-right" color="#E68027" width="28" height="28" />
        </div>

        <div
          class="border-solid border border-gray rounded-2xl rounded-b-0 border-b-0 p-4 mt-2 flex flex-col justify-between"
          v-if="totalItem"
        >
          <div class="font-bold text-sm">Payment Summary</div>
          <div class="flex justify-between my-2 text-sm">
            <div>Price</div>
            <div>
              {{
                Number(price).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </div>
          </div>
          <div class="flex justify-between my-2 text-sm">
            <div>Shipping Costs</div>
            <div>
              {{
                Number(shippingCost).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </div>
          </div>
          <div class="flex justify-between my-2 text-sm">
            <div>Other costs</div>
            <div>
              {{
                Number(otherCost).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </div>
          </div>
        </div>
        <div class="border-solid border border-b-0 border-gray p-4 flex flex-col justify-between">
          <div class="font-bold text-base flex justify-between my-2">
            <div>Price</div>
            <div>
              {{
                Number(totalPrice).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </div>
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
        <div class="fixed w-full bg-white rounded-xl shadow-md" style="bottom: 0">
          <div class="px-4 pt-4 flex justify-between">
            <div class="flex">
              <div class="flex">
                <div class="mr-2 mt-1">
                  <iconnative icon="circle-wallet" color="white" width="32" height="32" />
                </div>
                <div class="mr-4">
                  <div class="text-xs">CocoPay</div>
                  <div class="text-sm font-500">0</div>
                </div>
              </div>

              <div class="my-auto mr-4">
                <iconnative icon="plus" color="gray" width="18" height="18" />
              </div>
              <div class="flex items-center">
                <div class="flex">
                  <div class="mr-2 mt-2">
                    <iconnative icon="money-checkout" color="green" width="28" height="28" />
                  </div>
                  <div>
                    <div class="text-xs">Cash</div>
                    <div class="text-sm font-500">
                      {{
                        Number(totalPrice).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center ml-8">
              <iconnative
                @click="router.push('/paymentmethod')"
                icon="dotted-circle"
                color="white"
                width="28"
                height="28"
              />
            </div>
          </div>

          <div class="flex w-full justify-between p-4">
            <div @click="confirmOrder" class="flex p-2 mr-8 rounded-2xl bg-primary w-full justify-center">
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
// import { useAddressStore } from "../store/modules/address";
import iconnative from "../icon/index.vue";

const router = useRouter();
// const addressStore = useAddressStore();
const cartStore = useCartStore();
const namesWithoutNumbers = ref<string[]>([]);
const totalItem = ref<ItemsTotal | null>(null);
interface ItemsTotal {
  price: number;
  shipping_cost: number;
  others_cost: number;
  total: string;
  amount: number;
  address: any;
  duration: any;
  image: any;
  quantity: string;
  products_subtitle: string;
  products: { name: string; quantity: number; image: any; subtitle: string; price: string }[];
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
    router.push(`/ordersuccess/${res.data.orders.id}`);
  } catch (error) {
    console.log(error);
  } finally {
  }
};
const getListCart = async () => {
  try {
    const res = await cartStore.getCartTotalAll();

    totalItem.value = res.data as ItemsTotal;
    otherCost.value = totalItem.value.others_cost;
    shippingCost.value = totalItem.value.shipping_cost;
    namesWithoutNumbers.value = totalItem.value.products.map((item) => item.name.replace(/\d+/g, ""));
  } catch (error) {
    console.log(error);
  } finally {
  }
};
// const getListAddress = async () => {
//   try {
//     const res = await addressStore.getListAddress();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   } finally {
//   }
// };
onMounted(() => {
  getListCart();
  // getListAddress();
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
