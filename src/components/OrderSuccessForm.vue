<template>
  <div class="h-screen bg-white">
    <div @click="router.push('/home')" class="flex justify-items-start px-6 pt-10">
      <icon class="color-black" icon="ph:arrow-circle-left-thin" width="15vw"></icon>
    </div>
    <div class="flex flex-col items-center mt-[15vh]">
      <img class="w-[60vw]" src="../assets/img/order-success.png" alt="Order Success Picture" />
      <h1 class="text-2xl color-black font-bold my-1 w-[55vw]">Your order successfully done</h1>
      <p class="text-sm color-black font-normal w-[55vw] my-1">
        You can track the delivery in the “in process” Section
      </p>
    </div>
    <div class="flex flex-col items-center mt-[15vh]">
      <Button class="w-[80vw] bg-[#7ACDD6] mt-6 font-bold">View Order</Button>
      <a href="#" class="text-[#7ACDD6] font-bold my-4">View E-Receipt</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
