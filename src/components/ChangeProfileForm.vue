<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div @click="router.push('profile')" class="flex">
          <div>
            <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Change Profile</div>
        </div>
      </div>

      <div class="mx-8 my-6">
        <form class="flex flex-col px-2 pt-6" action="">
          <label for="name" class="my-2 text-sm font-bold text-black text-left">Name</label>
          <input
            class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight rounded-md focus:outline-none focus:shadow-outline bg-white"
            id="name"
            v-model="name"
            type="name"
            placeholder="John Doe"
          />
          <label for="email" class="my-2 text-sm font-bold text-black text-left">Email</label>
          <input
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="email"
            v-model="email"
            type="email"
            placeholder="johndoe@mail.com"
          />
          <label for="phone" class="my-2 text-sm font-bold text-black text-left">Phone Number</label>
          <input
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="phone"
            v-model="phone"
            type="number"
            placeholder="02938"
          />
          <label class="my-2 text-sm font-bold text-black text-left" for="dob">Date Of Birth</label>
          <input
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="dob"
            v-model="dateOfBirth"
            type="date"
            placeholder="*********"
          />
        </form>

        <div class="flex flex-col items-center">
          <Button @click=onSubmit class="w-[80vw] bg-[#7ACDD6] text-white mt-6 font-bold">Submit</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref,onMounted } from "vue";
import { useProfileStore } from "../store/modules/profile";


const profileStore = useProfileStore();
const router = useRouter();
const name = ref("");
const email = ref("");
const phone = ref("");
const dateOfBirth = ref("")

const onSubmit = async () => {
  const payload = {
    email: email.value,
    name:name.value,
    date_of_birth:dateOfBirth.value,
    phone:phone.value,
  };
  try {
    const response = await profileStore.updateProfile(payload);
    console.log(response);
    router.push(`/profile`);
  } catch (error) {}
};
interface Item {
  name: string;
  email:string;
  phone:string;
}
const dataProfile = ref<Item | null>(null);
const getProfiles = async () => {
  try {
    const res = await profileStore.getProfile();
    dataProfile.value = res.data as Item;
    name.value = dataProfile.value.name,
    email.value = dataProfile.value.email,
    phone.value = dataProfile.value.phone
  } catch (error) {
    console.log(error);
  } finally {
  }
};

onMounted(() => {
  getProfiles();
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #000000;
}
</style>
