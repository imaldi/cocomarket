<template>
  <div>
    <div @click="router.push('/home')" class="flex justify-items-start px-6 pt-8">
      <iconnative class="color-black" icon="arrow-circle-black" width="28" height="28" />
    </div>

    <div class="flex flex-col items-center mt-[10vh]">
      <iconnative class="color-black" icon="maskot-chicken" width="220vh" />
      <!-- <img class="w-[60vw]" src="../assets/img/order-success.png" alt="Order Success Picture" /> -->
      <h1 class="text-2xl color-black font-bold my-1 w-[55vw] text-center">Your order successfully done</h1>
      <p class="text-sm color-black font-normal w-[55vw] my-1 text-center">
        You can track the delivery in the <br />
        “Order” Section
      </p>
    </div>

    <div class="relative">
      <div class="fixed justify-center flex w-full" style="bottom: 2vh">
        <div class="flex flex-col items-center">
          <div @click="cekReceipt()" class="text-[#7ACDD6] font-bold text-lg mb-2">Receipt</div>
          <div @click="reviewOrder()" class="text-center p-4 rounded-xl w-[80vw] bg-[#7ACDD6] font-bold text-white">
            Review Order
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import iconnative from "../icon/index.vue";
import { ElNotification } from "element-plus";

const route = useRoute();
const router = useRouter();

const cekReceipt = () => {
  router.push(`/receipt/${route.params.id}`);
};
const reviewOrder = () => {
  // router.push(`/revieworder2`);
  ElNotification({
    title: "Coming soon",
    type: "warning",
    duration: 2000,
    customClass: "errorNotif",
    message: "Review Order, Coming Soon !!!",
  });
};
</script>
