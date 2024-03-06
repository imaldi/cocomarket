<template>
  <div class="container">
    <div class="mt-20 mx-8">
      <div @click="router.back()"> 
        <icon
          icon="ion:arrow-back-outline"
          color="#7ACDD6"
          width="38"
          height="38"
        />
      </div>
      <div class="mt-4 text-center">
        <div class="text-2xl font-bold">Reset Password</div>
        <div>
          Enter your email, we will send a verification code to your email
        </div>
      </div>

      <div>
        <div class="border border-solid border-primary p-4 rounded-xl mt-16">
          <div class="flex">
            <div class="flex w-8 p-2 text-center rounded-xl">
              <icon
                icon="mingcute:mail-line"
                color="#7ACDD6"
                width="28"
                height="28"
              />
            </div>
            <input
              type="email"
              v-model="emailConfirm"
              style="border:none;background-color: transparent;"
              class="input-field mt-1"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <Button class="w-[80vw] bg-[#7ACDD6] mt-6 font-bold">Send Link</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const username = ref("");
const phoneNumber = ref("");
const gender = ref("");
const emailConfirm = ref("")
const router = useRouter()
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
