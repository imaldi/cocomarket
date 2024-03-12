<template>
  <div class="container">
    <div @click="router.push('register')" class="w-full flex justify-start">
      <iconnative class="px-8 pt-20 pb-10" icon="outline-arrow-left" color="#7ACDD6" width="53" height="53" />
    </div>

    <div class="mx-8 flex flex-col items-center">
      <h1 class="text-2xl color-black font-bold my-1">Verify Code</h1>
      <p class="text-sm text-center my-1">Please enter the code we just sent to email {{ route.query.email }}</p>
    </div>

    <form class="w-full flex justify-center pt-4" @submit.prevent="verifyCode">
      <input v-model="code[0]" class="w-[16vw] border-[#00000035] rounded-xl h-8 mr-2" type="number" />
      <input v-model="code[1]" class="w-[16vw] border-[#00000035] rounded-xl h-8 mr-2" type="number" />
      <input v-model="code[2]" class="w-[16vw] border-[#00000035] rounded-xl h-8 mr-2" type="number" />
      <input v-model="code[3]" class="w-[16vw] border-[#00000035] rounded-xl h-8" type="number" />
    </form>

    <div class="text-center pt-4">
      <div>Didn't receive OTP?</div>
      <div @click="resendCode" class="underline font-bold color-black">Resend Code</div>
      <Button @click="verifyCode" class="w-[80vw] bg-[#7ACDD6] mt-8 text-white font-bold">Verify</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "../store/modules/auth";
import iconnative from "../icon/index.vue";
import { ElNotification } from "element-plus";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();
const code = ref(["", "", "", ""]);

// const emailConfirmation = ref("");

const verifyCode = async () => {
  const enteredCode = code.value.join("");

  if (enteredCode.length < 4) {
    return ElNotification({
      title: "The code entered is wrong",
      type: "error",
      duration: 2000,
      customClass: "errorNotif",
      message: "Code wrong",
    });
  }

  const payload = {
    otp: enteredCode,
    email: route.query.email,
  };

  try {
    const res = await authStore.verifyCode(payload);
    if (res.status == true) {
      router.push("/");
      ElNotification({
        title: "Successfully email verification",
        type: "success",
        duration: 2000,
        customClass: "successNotif",
        message: "Verify email",
      });
    } else {
      ElNotification({
        title: "Email verification failed",
        type: "error",
        duration: 2000,
        customClass: "successNotif",
        message: res.message,
      });
    }
  } catch (error) {}
};

const resendCode = async () => {
  const payload = {
    email: route.query.email,
  };
  try {
    await authStore.resendCode(payload);
    ElNotification({
      title: "Successfully resend email",
      type: "success",
      duration: 2000,
      customClass: "successNotif",
      message: "Resend email",
    });
  } catch (error) {}
};
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  color: #000000;
  height: 100vh;
}
</style>
