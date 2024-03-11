<template>
  <div>
    <div class="container pb-30">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div @click="router.back()">
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold font-xl">Payment Method</div>
        </div>
      </div>

      <div class="mx-8 my-6">
        <form action="">
          <div class="text-md font-bold my-4">Cash</div>
          <div class="flex items-center justify-between border border-gray border-solid rounded-xl px-4 py-2">
            <div><iconnative icon="money" color="green" width="28" height="28" /></div>
            <div class="text-sm font-semibold mr-44">Cash</div>
            <input class="p-2" type="radio" id="cash" name="paymentMethod" value="Cash" checked />
          </div>
          <!-- <div class="text-md font-bold my-4">Cocopay</div>
          <div class="flex items-center justify-between border border-gray border-solid rounded-xl px-4 py-2">
            <div><iconnative icon="wallet" color="#E68027" width="28" height="28" /></div>
            <div class="text-sm font-semibold mr-38">Cocopay</div>
            <input class="p-2" name="paymentMethod" type="radio" id="Cocopay" value="Cocopay" />
          </div> -->
        </form>
      </div>

      <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="flex w-full justify-between p-4">
            <div @click="router.back()" class="flex p-4 mr-8 rounded-2xl bg-primary w-full justify-center">
              <div class="text-2xl text-white">Confirm Payment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import iconnative from "../icon/index.vue";

const router = useRouter();
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  // height: 100vh;
  color: #000000;
}
</style>
