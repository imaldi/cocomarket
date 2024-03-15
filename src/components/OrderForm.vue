<template>
  <div>
    <div class="container pb-20">
      <div class="bg-white shadow-md rounded-xl pt-10">
        <div class="w-full justify-center flex font-bold text-xl pb-10">Order</div>
      </div>

      <div class="flex px-8 py-6">
        <div class="px-6 py-2 bg-[#7ACDD6] rounded-2xl font-bold text-white text-sm">All</div>
        <div class="px-4 py-2 bg-[#D9D9D9] rounded-2xl font-bold text-black text-sm mx-2">Fresh Food</div>
        <div class="px-4 py-2 bg-[#D9D9D9] rounded-2xl font-bold text-black text-sm">Storling</div>
      </div>

      <div v-if="dataOrder?.length > 0">
        <div v-for="(item, index) in dataOrder" :key="index" class="flex flex-col px-4">
          <div class="border border-solid border-gray p-4 rounded-2xl flex flex-col mb-2">
            <div class="w-full flex items-center border border-gray border-x-0 border-t-0 border-dashed pb-4">
              <div class="flex w-full">
                <img
                  class="border border-solid border-gray rounded-full bg-white p-2"
                  src="../assets/img/gerobak.png"
                  alt="Cocomaret Logo"
                  width="28"
                  height="28"
                />

                <div class="flex flex-col justify-center ml-4">
                  <div class="font-bold text-sm tracking-tighter">{{ item.vendors.name }}</div>
                  <div class="font-normal text-xs">{{ item.date }}</div>
                </div>
              </div>

              <div class="justify-end w-full flex">
                <div class="px-4 py-2 bg-[#EADFB4] text-B49000 rounded-xl text-[8px] font-bold">In Process</div>
              </div>
            </div>

            <div class="flex items-center w-full my-3">
              <div class="flex">
                <img
                  class="bg-white z-1 p-2 border-solid rounded-2xl border border-gray"
                  :src="item.order_details[0]?.products.image || '../assets/img/bakso2.png'"
                  alt="Product Picture"
                  width="64"
                />
              </div>
              <div class="flex flex-col justify-center ml-4">
                <div class="font-bold text-sm">{{ item.code }}</div>
                <div class="font-normal text-xs text-gray my-[2px]">{{ item.order_details.length }} Produk</div>
                <div class="flex items-center font-normal text-xs text-gray">
                  <iconnative class="mr-[4px] mt-1" icon="circle-checklist" color="#51F862" width="14" height="14" />
                  Groceries are being delivered
                </div>
              </div>
            </div>

            <div class="flex justify-between items-center">
              <div>
                <div class="font-normal text-[10px] text-gray">Total</div>
                <div class="font-semibold text-sm">
                  {{ calculateTotalPrice(item.order_details, item) }}
                </div>
              </div>
              <div @click="tracking(item)">
                <div class="px-6 py-2 bg-[#E68027] text-white rounded-xl text-xs font-bold">Track</div>
              </div>
            </div>
          </div>
          <div v-if="false" class="border border-solid border-gray p-4 rounded-2xl flex flex-col mb-2">
            <div class="flex items-center justify-between border border-gray border-x-0 border-t-0 border-dashed pb-4">
              <img
                class="border border-solid border-gray rounded-full bg-white p-2"
                src="../assets/img/logo-full-orange.png"
                alt="Cocomaret Logo"
                width="28"
                height="28"
              />

              <div class="flex flex-col justify-center mr-6">
                <div class="font-bold text-sm tracking-tighter">Cocomaret Jl. Jendral Pu...</div>
                <div class="font-normal text-xs">7 Jan 2023 | 14.30 WIB</div>
              </div>

              <div>
                <div class="px-4 py-2 bg-[#EADFB4] text-B49000 rounded-xl text-[8px] font-bold">In Process</div>
              </div>
            </div>

            <div class="flex items-center justify-between my-3">
              <div class="flex">
                <img
                  class="bg-white z-1 p-2 border-solid rounded-2xl border border-gray"
                  src="../assets/img/meat1.png"
                  alt="Product Picture"
                  width="64"
                />
                <div class="p-8 border-solid rounded-2xl border border-gray -ml-15.5"></div>
                <div class="p-8 border-solid rounded-2xl border border-gray -ml-15.5"></div>
                <div class="p-8 border-solid rounded-2xl border border-gray -ml-15.5"></div>
              </div>
              <div class="flex flex-col justify-center mr-12">
                <div class="font-bold text-sm">Kangkung, 5 Ons, fresh</div>
                <div class="font-normal text-xs text-gray my-[2px]">4 Produk</div>
                <div class="flex items-center font-normal text-xs text-gray">
                  <iconnative class="mr-[4px]" icon="circle-checklist" color="#51F862" width="14" height="14" />
                  Groceries has been delivered
                </div>
              </div>
            </div>

            <div class="flex justify-between items-center">
              <div>
                <div class="font-normal text-[10px] text-gray">Total</div>
                <div class="font-semibold text-sm">Rp. 45.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="text-center text-xl border border-solid border-primary rounded-xl p-2 font-bold text-primary mx-8 mt-8"
      >
        Your order is empty !
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProdukStore } from "../store/modules/product";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import iconnative from "../icon/index.vue";
import { ElNotification } from "element-plus";

const produkStore = useProdukStore();

const dataOrder = ref<Item[]>([]);

interface Item {
  id: string;
  code: string;
  name: string;
  date: string;
  image: string;
  price: number;
  description: string;
  order_details: any;
  status: string;
  vendors: any;
}

const tracking = async () => {
  ElNotification({
    title: "Coming soon",
    type: "warning",
    duration: 2000,
    customClass: "errorNotif",
    message: "Track, Coming Soon !!!",
  });
};

const calculateTotalPrice = (item: any, data: any) => {
  let tmp = 0;
  item.forEach((itm: any) => {
    tmp += parseFloat(itm.price) * itm.quantity;
  });
  tmp = tmp + parseFloat(data.delivery_cost) + parseFloat(data.other_cost) - parseFloat(data.discount_amount);

  return Number(tmp).toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const getListHistoryComplete = async () => {
  try {
    const res = await produkStore.getOrder();
    dataOrder.value = res.data as Item[];
  } catch (error) {
    console.log(error);
  } finally {
  }
};

onMounted(() => {
  getListHistoryComplete();
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000000;
}
</style>
