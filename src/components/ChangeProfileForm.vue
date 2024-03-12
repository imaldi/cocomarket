<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div @click="router.push('profile')" class="flex">
          <div>
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold text-xl">Change Profile</div>
        </div>
      </div>

      <div class="mx-8 my-6">
        <Form v-slot="{ errors }" @submit="onSubmit" class="flex flex-col px-2 pt-6" autocomplete="off">
          <label for="name" class="my-2 text-sm font-bold text-black text-left">Name</label>
          <Field
            name="names"
            class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight rounded-md focus:outline-none focus:shadow-outline bg-white"
            id="name"
            v-model="name"
            type="name"
            placeholder="John Doe"
            rules="required"
          />
          <p v-if="errors.names" class="text-danger text-left text-sm mt-0">
            {{ errors.names }}
          </p>
          <label for="email" class="my-2 text-sm font-bold text-black text-left">Email</label>
          <Field
            name="email"
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="email"
            v-model="email"
            type="email"
            rules="required"
            placeholder="johndoe@mail.com"
          />
          <p v-if="errors.email" class="text-danger text-left text-sm mt-0">
            {{ errors.email }}
          </p>
          <label for="phone" class="my-2 text-sm font-bold text-black text-left">Phone Number</label>
          <Field
            name="phone"
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="phone"
            v-model="phone"
            type="number"
            placeholder="08**"
          />
          <p v-if="errors.phone" class="text-danger text-left text-sm mt-0">
            {{ errors.phone }}
          </p>
          <label class="my-2 text-sm font-bold text-black text-left" for="dob">Date Of Birth</label>
          <Field
            name="dob"
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="dob"
            v-model="dateOfBirth"
            type="date"
            placeholder="*********"
          />
          <p v-if="errors.dob" class="text-danger text-left text-sm mt-0">
            {{ errors.dob }}
          </p>
          <div class="flex flex-col items-center">
            <Button type="submit" class="w-[80vw] bg-[#7ACDD6] text-white mt-6 font-bold">Submit</Button>
          </div>
        </Form>
      </div>
      <popup-notif
        v-model="notifConfirm"
        :message="`Change Profile Successfully`"
        :title="`Back To Profile`"
        @confirm="goToProfile"
      >
      </popup-notif>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useProfileStore } from "../store/modules/profile";
import { Form, Field } from "vee-validate";
import PopupNotif from "../components/dialog/SuccessDialog.vue";
import iconnative from "../icon/index.vue";

const notifConfirm = ref(false);
const profileStore = useProfileStore();
const router = useRouter();
const name = ref("");
const email = ref("");
const phone = ref("");
const dateOfBirth = ref("");
const goToProfile = () => {
  router.push("/profile");
};
const onSubmit = async () => {
  const payload = {
    email: email.value,
    name: name.value,
    date_of_birth: dateOfBirth.value,
    phone: phone.value,
  };
  try {
    const response = await profileStore.updateProfile(payload);
    console.log(response);
    notifConfirm.value = true;
  } catch (error) {}
};
interface Item {
  name: string;
  date_of_birth: string;
  email: string;
  phone: string;
}
const dataProfile = ref<Item | null>(null);
const getProfiles = async () => {
  try {
    const res = await profileStore.getProfile();
    dataProfile.value = res.data as Item;
    (name.value = dataProfile.value.name),
      (email.value = dataProfile.value.email),
      (dateOfBirth.value = dataProfile.value.date_of_birth),
      (phone.value = dataProfile.value.phone);
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
