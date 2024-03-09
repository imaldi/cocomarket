<template>
  <div class="bg-white">
    <div @click="router.back()" class="flex justify-items-start px-6 pt-10">
      <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
    </div>
    <div class="flex flex-col items-center mt-[15vh]">
      <iconnative icon="maskot-chicken" color="#000" width="150" />
      <!-- <img
        class="w-[60vw]"
        src="../assets/img/order-success.png"
        alt="Order Success Picture"
      /> -->
      <h1 class="text-2xl color-black font-bold my-1 w-[55vw] text-center">
        Your order successfully done
      </h1>
      <p class="text-sm color-black font-normal w-[55vw] my-1 text-center">
        You can track the delivery in the “in process” Section
      </p>
    </div>
    <div class="absolute justify-center flex w-full" style="bottom: 7rem">
      <div class="flex flex-col items-center">
        <a
          @click="cekReceipt()"
          class="text-[#7ACDD6] font-bold mb-2"
          >Receipt</a
        >
        <div
          @click="reviewOrder()"
          class="text-center p-2 rounded-md w-[80vw] bg-[#7ACDD6] font-bold text-white"
        >
          Review Order
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import iconnative from "../icon/index.vue";

const route = useRoute();
const router = useRouter();
const cekReceipt = () => {
  router.push(`/receipt/${route.params.id}`);
};
const reviewOrder = () => {
  router.push(`/revieworder/${route.params.id}`);
};
</script>
