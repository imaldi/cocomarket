<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div @click="goToProfile" class="flex">
          <div>
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold text-xl">Change Password</div>
        </div>
      </div>

      <div class="mx-8 my-6">
        <Form v-slot="{ errors }" class="flex flex-col px-2 pt-6" @submit="onSubmit">
          <label for="password" class="my-2 text-base font-bold text-sm text-black text-left">New Password</label>
          <Field
            name="password"
            class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="password"
            v-model="newPassword"
            type="password"
            rules="maxLength:12|minLength:6"
            placeholder="*********"
          />
          <p v-if="errors.password" class="text-danger text-left text-sm mt-0">
            {{ errors.password }}
          </p>
          <label class="my-2 text-base font-bold text-sm text-black text-left" for="confirmPassword"
            >Confirm New Password</label
          >
          <Field
            name="confirmPassword"
            v-model="passConfirmation"
            class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="confirmPassword"
            type="password"
            placeholder="*********"
          />
          <div v-if="passwordsDoNotMatch" class="text-red-500 text-sm">Passwords do not match.</div>
          <Button type="submit" class="w-[80vw] bg-[#7ACDD6] text-white mt-6 font-bold">Change Password</Button>
        </Form>
      </div>
      <popup-notif
        v-model="notifConfirm"
        :message="`Password Update Successfully`"
        :title="`Okay`"
        @confirm="goToLogin"
      >
      </popup-notif>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useProfileStore } from "../store/modules/profile";
import PopupNotif from "../components/dialog/SuccessDialog.vue";
import { Form, Field } from "vee-validate";
import iconnative from "../icon/index.vue";

const notifConfirm = ref(false);
const newPassword = ref("");
const passConfirmation = ref("");
const passwordsDoNotMatch = ref(false);
const router = useRouter();
const profileStore = useProfileStore();

const goToProfile = () => {
  router.push("/profile");
};
const goToLogin = () => {
  router.push("/profile");
};

const onSubmit = async () => {
  if (newPassword.value !== passConfirmation.value) {
    passwordsDoNotMatch.value = true;
    return;
  }

  const payload = {
    newPassword: newPassword.value,
    passwordConfirmation: passConfirmation.value,
  };

  try {
    await profileStore.updatePassword(payload);
    // router.push("/profile");
    notifConfirm.value = true;
  } catch (error) {
    console.error(error);
  }
};
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
