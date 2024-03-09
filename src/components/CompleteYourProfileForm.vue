<template>
  <div class="container">
    <div class="mx-8">
      <div @click="router.push('/verifycode')">
        <icon
      class="pt-20 pb-10"
        icon="outline-arrow-left"
        color="#7ACDD6"
        width="53"
        height="53"
      />
      </div>
      <div class="mt-4 text-center">
        <div class="text-2xl font-bold">Complete Your Profile</div>
        <div>Don't Worry, only you can see your personal data. No else will too able too see it.</div>
      </div>
      <div class="text-center mt-4">
        <icon icon="complete-your-profile" color="#000" width="38" height="38" />
      </div>

      <form class="login-form">
        <div class="mb-2 font-500">Name</div>
        <input type="text" v-model="username" placeholder="Username" class="input-field" />

        <div class="mb-2 font-500">Phone Number</div>
        <input type="number" v-model="phoneNumber" placeholder="Enter Phone Number" class="input-field" />

        <!-- <p>Gender</p>
        <input type="number" v-model="gender" placeholder="Select" class="input-field" /> -->

        <button @click="router.push('/home')" type="submit" class="submit-button">Complete Profile</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import icon from '../icon/index.vue'

const router = useRouter();

const username = ref("");
const phoneNumber = ref("");
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
