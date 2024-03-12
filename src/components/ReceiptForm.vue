<template>
  <div class="h-screen bg-primary">
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div @click="router.back()" class="flex">
          <div>
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold text-xl">Receipt</div>
        </div>
      </div>

      <div class="my-auto mx-8 pt-8">
        <div class="bg-white border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-center my-4">
              <div class="w-1/3 flex justify-center items-center">
                <img
                  class="border border-solid border-gray rounded-full bg-white p-2"
                  src="../assets/img/gerobak.png"
                  alt="Cocomaret Logo"
                  width="28"
                  height="28"
                />
              </div>

              <div v-if="allDataDetail" class="w-1/1">
                <div class="flex flex-col justify-center mr-2">
                  <div class="font-bold text-md tracking-tighter">
                    {{ allDataDetail.vendors.name }}
                  </div>
                  <div class="font-normal text-gray text-sm">
                    {{ allDataDetail.date }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-for="(item, index) in dataDetail" :key="index">
            <div class="border border-solid border-gray border-x-0 border-t-0 pb-2 mb-2">
              <div class="px-4 flex items-center mb-2">
                <div class="font-300 text-sm w-2/3">
                  {{ item.products.name }}
                </div>
                <div class="font-300 text-sm w-1/10">{{ item.quantity }}</div>
                <div class="font-semibold text-sm w-1/3 text-end">
                  {{ Number(item.price * item.quantity).toLocaleString("id-ID") }}
                </div>
              </div>
            </div>

            <div
              v-if="index == dataDetail.length - 1"
              class="border border-solid border-gray border-x-0 border-t-0 pb-2 mb-2"
            >
              <div class="px-4 flex items-center mb-2">
                <div class="font-300 text-md w-2/3">Sub Total</div>
                <div class="font-300 text-md w-1/10">{{ totalSubQty }}</div>
                <div class="font-semibold text-md w-1/3 text-end">
                  {{ Number(totalSubPrice).toLocaleString("id-ID") }}
                </div>
              </div>

              <div class="px-4 flex items-center mb-2">
                <div class="font-300 text-sm w-2/3">Delivery Cost</div>
                <div class="font-300 text-sm w-1/10"></div>
                <div class="font-semibold text-sm w-1/3 text-end">
                  {{ Number(allDataDetail?.delivery_cost).toLocaleString("id-ID") }}
                </div>
              </div>

              <div class="px-4 flex items-center mb-2">
                <div class="font-300 text-sm w-2/3">Other Costs</div>
                <div class="font-300 text-sm w-1/10"></div>
                <div class="font-semibold text-sm w-1/3 text-end">
                  {{ Number(allDataDetail?.other_cost).toLocaleString("id-ID") }}
                </div>
              </div>

              <div class="px-4 flex items-center mb-2">
                <div class="font-300 text-sm w-2/3">Discount</div>
                <div class="font-300 text-sm w-1/10"></div>
                <div class="font-semibold text-sm w-1/3 text-end">
                  {{ Number(allDataDetail?.discount_amount).toLocaleString("id-ID") }}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="px-4 flex items-center mb-2 justify-between">
              <div class="font-bold text-md">Total Payment</div>
              <!-- <div class="font-300 text-md w-1/10"></div> -->
              <div class="font-bold text-md text-end text-[#E68027]">
                {{ Number(totalPrice).toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }}
              </div>
            </div>
          </div>
          <div class="flex w-full justify-between p-4">
            <div
              @click="router.push('/home')"
              class="flex p-2 mr-8 rounded-2xl bg-primary w-full justify-center items-center"
            >
              <div class="text-xl text-white font-500">Back to Home</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useProdukStore } from "../store/modules/product";
import { useRoute, useRouter } from "vue-router";
import iconnative from "../icon/index.vue";

const receiptStore = useProdukStore();
const route = useRoute();
const router = useRouter();
const allDataDetail = ref<Items | null>(null);
const dataDetail = ref<Item[]>([]);
interface Item {
  price: any;
  total: string;
  amount: number;
  quantity: any;
  discount_amount?: any
  products: {
    name: string;
  };
}
interface Items {
  tax_amount: string;
  delivery_cost?: any;
  discount_amount?: any;
  other_cost?: any;
  vendors: any;
  date: string;
  description: string;
}
const totalPrice = computed(() => {
  let totalPriceValue = 0;

  if (dataDetail.value.length > 0 && allDataDetail.value) {
    const totalPrices = dataDetail.value.reduce((acc, item) => {
      return acc + parseFloat(item.price) * item.quantity;
    }, 0);

    totalPriceValue =
      totalPrices +
      parseFloat(allDataDetail.value.other_cost) +
      parseFloat(allDataDetail.value.delivery_cost) -
      parseFloat(allDataDetail.value.discount_amount);
  }

  return totalPriceValue;
});

const totalSubQty = computed(() => {
  if (dataDetail.value.length > 0 && allDataDetail.value) {
    const totalPrices = dataDetail.value.reduce((acc, item) => {
      return acc + parseFloat(item.quantity);
    }, 0);

    return totalPrices;
  }
});

const totalSubPrice = computed(() => {
  if (dataDetail.value.length > 0 && allDataDetail.value) {
    const totalPrices = dataDetail.value.reduce((acc, item) => {
      return acc + parseFloat(item.price) * item.quantity;
    }, 0);

    return totalPrices;
  }
});
const getReceipt = async (id: any) => {
  try {
    const res = await receiptStore.getHistoryByid(id);

    dataDetail.value = res.data.order_details as Item[];
    allDataDetail.value = res.data as Items;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  getReceipt(route.params.id);
});
</script>
<style scoped lang="scss">
.container {
  background-color: #7acdd6;
  display: flex;
  flex-direction: column;
  // width: 100%;
  color: #000000;
}
</style>
