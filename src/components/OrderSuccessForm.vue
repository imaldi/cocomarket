<template>
  <div class="bg-white">
    <div @click="router.back()" class="flex justify-items-start px-6 pt-10">
      <icon class="color-black" icon="ph:arrow-circle-left-thin" width="15vw"></icon>
    </div>
    <div class="flex flex-col items-center mt-[15vh]">
      <img class="w-[60vw]" src="../assets/img/order-success.png" alt="Order Success Picture" />
      <h1 class="text-2xl color-black font-bold my-1 w-[55vw] text-center">Your order successfully done</h1>
      <p class="text-sm color-black font-normal w-[55vw] my-1 text-center">
        You can track the delivery in the “in process” Section
      </p>
    </div>
    <div class="absolute justify-center flex w-full" style="bottom: 2rem">
      <div class="flex flex-col items-center">
        <a href="#" class="text-[#7ACDD6] font-bold mb-2">Receipt</a>
        <div @click="router.push('home')" class="text-center p-2 rounded-md w-[80vw] bg-[#7ACDD6] font-bold text-white">
          Riview Order
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
