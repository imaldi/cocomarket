<template>
  <div class="container">
    <div class="mt-20 mx-8">
      <div @click="router.push('/')">
        <icon icon="ion:arrow-back-outline" color="#7ACDD6" width="38" height="38" />
      </div>
      <div class="mt-4 text-center">
        <div class="text-2xl font-bold">Forgot Password</div>
        <div>Select with contact details should we use to reset your password</div>
      </div>

      <div>
        <div class="border border-solid border-primary p-4 rounded-xl mt-16">
          <div class="flex">
            <div class="flex bg-primary w-8 p-2 text-center rounded-xl">
              <icon icon="mingcute:mail-line" color="#fff" width="28" height="28" />
            </div>
            <div class="ml-4">
              <div class="font-bold">Email</div>
              <div class="text-gray">*****@mail.com</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <Button @click="forgotAction" class="w-[80vw] bg-[#7ACDD6] mt-6 font-bold">Continue</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const forgotAction = async () => {
  router.push("/home");
};

const username = ref("");
const phoneNumber = ref("");
const gender = ref("");
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
