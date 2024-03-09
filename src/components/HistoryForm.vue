<template>
  <div>
    <div class="container pb-106">
      <div class="bg-white shadow-md rounded-xl px-8 pt-8 pb-0">
        <div>
          <div class="flex mb-8">
            <!-- <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div> -->
            <div class="w-full justify-center flex font-bold">History</div>
          </div>
          <div class="flex justify-evenly px-14">
            <div class="flex flex-col">
              <div class="font-bold mb-2">Completed</div>
              <div class="bg-[#7ACDD6] h-2 rounded-t-4"></div>
            </div>
            <div class="flex flex-col">
              <div class="font-bold mb-2">Canceled</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex px-8 py-6">
        <div class="px-6 py-2 bg-[#7ACDD6] rounded-2xl font-bold text-white text-sm">All</div>
        <div class="px-4 py-2 bg-[#D9D9D9] rounded-2xl font-bold text-black text-sm mx-2">Fresh Food</div>
        <div class="px-4 py-2 bg-[#D9D9D9] rounded-2xl font-bold text-black text-sm">Storling</div>
      </div>

      <div class="flex flex-col px-4" v-for="(item, index) in dataHistory" :key="index">
        <div class="border border-solid border-gray p-4 rounded-2xl flex flex-col mb-2">
          <div class="flex items-center justify-between border border-gray border-x-0 border-t-0 border-dashed pb-4">
            <img
              class="border border-solid border-gray rounded-full bg-white p-2"
              src="../assets/img/gerobak.png"
              alt="Cocomaret Logo"
              width="28"
              height="28"
            />

            <div class="flex flex-col justify-center mr-14">
              <div class="font-bold text-sm tracking-tighter">Bakso Solo Kang Emil</div>
              <div class="font-normal text-xs">{{ item.date }} WIB</div>
            </div>

            <div>
              <div class="px-4 py-2 bg-[#51F862] text-white rounded-xl text-[8px] font-bold">
                {{ item.status === "0" ? "Canceled" : item.status === "1" ? "Completed" : "Unknown" }}
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between my-3">
            <div class="flex">
              <img
                class="bg-white z-1 p-2 border-solid rounded-2xl border border-gray"
                src="../assets/img/bakso2.png"
                alt="Product Picture"
                width="64"
              />
            </div>
            <div class="flex flex-col justify-center mr-8">
              <div class="font-bold text-sm">
                {{ item.description }}
              </div>
              <div class="font-normal text-xs text-gray my-[2px]">4 Produk</div>
              <div class="flex items-center font-normal text-xs text-gray">
                <icon class="mr-[4px]" icon="mingcute:check-circle-fill" color="#51F862" width="14" height="14" />
                Groceries has been delivered
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div>
              <div class="font-normal text-[10px] text-gray">Total</div>
              <div class="font-semibold text-sm">Rp. 45.000</div>
            </div>
            <div>
              <div class="px-6 py-2 bg-[#E68027] text-white rounded-xl text-xs font-bold">Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProdukStore } from "../store/modules/product";
import { ref, onMounted } from "vue";
import iconnative from "../icon/index.vue";

const useProduct = useProdukStore();
const dataHistory = ref<Item[]>([]);
// const ordersDetail = ref<Item[]>([]);
interface Item {
  id: string;
  name: string;
  date: string;
  image: string;
  price: number;
  description: string;
  status: string;
}
// interface ItemOrders {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   description: string;
// }
const getListHistory = async () => {
  try {
    const res = await useProduct.getHistory();
    dataHistory.value = res.data as Item[];
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  getListHistory();
});
</script>
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
