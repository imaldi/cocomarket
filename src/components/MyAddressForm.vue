<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div @click="router.push('profile')">
            <icon
              icon="ion:arrow-back-circle-outline"
              color="#000"
              width="28"
              height="28"
            />
          </div>
          <div class="w-full justify-center flex font-bold">My Address</div>
        </div>
      </div>

      <div class="mx-8 my-14">
        <div>
          <div
            v-for="(item, index) in dataAddress"
            :key="index"
            class="flex w-full border border-dotted border-gray border-x-0 border-t-0 pb-4 mb-4"
          >
            <div class="w-1/6 flex justify-center">
              <icon
                class="rounded-full"
                icon="solar:map-point-linear"
                width="24"
                color="black"
              ></icon>
            </div>
            <div class="w-1/1 text-sm">
              <div class="font-bold">{{ item.name }}</div>
              <div class="font-300">
               {{item.city}}, {{ item.address }},{{ item.district }}
              </div>
            </div>
            <div class="w-1/6 flex items-center justify-center">
              <icon
                class="rounded-full"
                icon="mingcute:right-line"
                width="24"
                color="black"
              ></icon>
            </div>
          </div>
        </div>

        <div
          class="my-8 flex justify-around px-10 py-4 bg-[#EFFDFF] border-dotted border-2 rounded-3xl border-[#7ACDD6]"
        >
          <div>
            <icon icon="tabler:plus" color="#7ACDD6" width="28" height="28" />
          </div>
          <div
            @click="router.push('addaddress')"
            class="font-bold text-xl text-[#7ACDD6]"
          >
            Add New Address
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAddressStore } from "../store/modules/address";
const router = useRouter();

const addressStore = useAddressStore();
const dataAddress = ref<Item[]>([]);
interface Item {
  id: number;
  city: string;
  name: string;
  address: string;
  district: string;
}
const getListAddress = async () => {
  try {
    const res = await addressStore.getListAddress();
    dataAddress.value = res.data as Item[];
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
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
