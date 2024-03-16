<template>
  <div class="container">
    <div class="mt-20 mx-8">
      <div @click="router.back()">
        <iconnative icon="outline-arrow-left" color="#7ACDD6" width="53" height="53" />
      </div>
      <div class="mt-4 text-center">
        <div class="text-2xl font-bold">Forgot Password</div>
        <div>Select with contact details should we use to reset your password</div>
      </div>

      <div>
        <div class="border border-solid border-primary p-4 rounded-xl mt-16">
          <div class="flex">
            <div class="flex w-8 text-center rounded-xl items-center">
              <iconnative icon="fill-email" width="30" height="30" />
            </div>
            <div class="ml-4">
              <div class="font-bold">Email</div>
              <input v-model="forgot" type="text"
                class="bg-transparent outline-none focus:outline-none border-none text-gray placeholder-gray-400"
                style="width: 140%" placeholder="*****@mail.com" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <Button @click="forgotAction" class="w-[80vw] bg-[#7ACDD6] mt-6 font-bold text-white">Continue</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/modules/auth";
import { ElNotification } from "element-plus";
import iconnative from "../icon/index.vue";

const router = useRouter();
const authStore = useAuthStore();

const forgot = ref("");

const forgotAction = async () => {
  if (forgot.value.length == 0) {
    return ElNotification({
      title: "Please type email first !",
      type: "warning",
      duration: 2000,
      customClass: "warningNotif",
      message: "Type first !",
    });
  }
  const payload = {
    email: forgot.value,
  };
  try {
    await authStore.forgotEmail(payload);
    router.push("/");
    ElNotification({
      title: "Successfully send email",
      type: "success",
      duration: 2000,
      customClass: "successNotif",
      message: "Resend email",
    });
  } catch (error) {
    ElNotification({
      title: "Forgot password failed",
      type: "error",
      duration: 2000,
      customClass: "successNotif",
      message: "Forgot password",
    });
  }
};
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100vh;
  color: #000000;
}

.input-field {
  color: black;
  width: 94%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border: 1.5px black solid;
  border-radius: 5px;
}

.submit-button {
  font-size: 18px;
  margin-top: 30px;
  width: 100%;
  padding: 10px;
  background-color: #7acdd6;
  color: #fff;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
