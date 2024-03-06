<template>
  <div class="container">
    <div class="bg-white shadow-md rounded-xl p-8">
      <div class="flex">
        <div class="w-full p-2 flex text-center justify-center">
          <div class="fw-bold text-xl text-dark">Profile</div>
        </div>
      </div>
    </div>

    <div class="d-flex flex mt-5 pt-5 justify-center">
      <img
        v-if="dataProfile && dataProfile.profile_picture"
        :src="dataProfile.profile_picture"
        style="width: 7em; border-radius: 50%"
        class="w-full justify-center rounded"
        alt=""
      />
      <img
        v-else
        src="../assets/img/profile.svg"
        style="width: 7em; border-radius: 50%"
        class="w-full justify-center rounded"
        alt=""
      />
    </div>
    <div v-if="dataProfile" class="fw-bold text-xl text-center mt-2 text-dark">
      {{ dataProfile.name }}
    </div>
    <div class="fw-bold text-xl text-dark pl-8 mt-5">Akun</div>
    <div class="flex pt-4 p-8">
      <div class="w-full my-auto flex">
        <img
          src="../assets/img/icon-changeprofile.svg"
          class="justify-center"
          alt=""
        />
        <div class="ml-4 my-auto text-dark fw-bold">Change Profile</div>
      </div>
      <div class="my-auto ml-2">
        <div class="bg-light rounded-md p-1">
          <img src="../assets/img/Line.svg" class="justify-center" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProfileStore } from "../store/modules/profile";
import { onMounted, ref } from "vue";

const profileStore = useProfileStore();
const dataProfile = ref<Item | null>(null);
interface Item {
  profile_picture: string;
  name: string;
}
const getProfiles = async () => {
  try {
    const res = await profileStore.getProfile();
    console.log(res);
    dataProfile.value = res.data as Item;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

onMounted(() => {
  getProfiles();
});
</script>
