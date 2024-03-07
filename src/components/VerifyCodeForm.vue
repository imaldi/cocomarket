<template>
  <div class="container">
    <div @click="router.back()" class="mx-8">
      <icon icon="ion:arrow-back-outline" color="#7ACDD6" width="38" height="38" />
    </div>

    <div class="mx-8 flex flex-col items-center">
      <h1 class="text-2xl color-black font-bold my-1">Verify Code</h1>
      <p class="text-sm text-center my-1">Please enter the code we just sent to email JohnDoe@Gmail.com</p>
    </div>

    <form class="w-full flex justify-center pt-4" action="">
      <input class="w-[16vw] border-[#00000035] rounded-xl h-8 mr-2" type="number" />
      <input class="w-[16vw] border-[#00000035] rounded-xl h-8 mr-2" type="number" />
      <input class="w-[16vw] border-[#00000035] rounded-xl h-8 mr-2" type="number" />
      <input class="w-[16vw] border-[#00000035] rounded-xl h-8" type="number" />
    </form>

    <div class="text-center pt-4">
      <div>Didn't recieve OTP?</div>
      <a class="underline font-bold color-black" href="#">Resend Code</a>
      <Button @click="router.push(`/completeyourprofile`)" class="w-[80vw] bg-[#7ACDD6] mt-8 text-white font-bold"
        >Verify</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000000;
  margin-top: 20%;
}
</style>
