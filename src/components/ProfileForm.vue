<template>
  <div class="container">
    <div class="bg-white shadow-md rounded-xl p-8">
      <div class="flex">
        <div class="w-full p-2 flex text-center justify-center">
          <div class="fw-bold text-xl text-dark">Profile</div>
        </div>
      </div>
    </div>


    <div class="d-flex flex-column mt-5 pt-5 justify-content-center">
      <label>
        <div class="d-flex flex justify-center">
          <img
            v-if="dataProfile && dataProfile.profile_picture"
            :src="dataProfile.profile_picture"
            style="width: 10em; height: 15em; border-radius: 50%; cursor: pointer;"
            class="w-full justify-center rounded-full"
            alt=""
          />
        </div>

        <div class="d-flex flex text-center justify-center ml-10 mt-0">
          <img
            src="../assets/icon/change-image-profile.svg"
            @change="handleImageChange"
            style="width: 3em; margin-top: -4em; margin-left: 6em; cursor: pointer;"
            class="w-full justify-end rounded"
            alt=""
          />
          <input
            type="file"
            accept="image/*"
            ref="imageInput"
            style="display: none;"
          />
        </div>
      </label>
    </div>

    <div v-if="dataProfile" class="fw-bold text-xl text-center mt-2 text-dark">
      {{ dataProfile.name }}
    </div>
    <div class="fw-bold text-xl text-dark pl-8 mt-5">Akun</div>
    <div
      class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray"
    >
      <div @click="router.push('changeprofile')" class="w-full my-auto flex">
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
    <div
      class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray"
    >
      <div @click="router.push('changepassword')" class="w-full my-auto flex">
        <img
          src="../assets/img/change-password.svg"
          class="justify-center"
          alt=""
        />
        <div class="ml-4 my-auto text-dark fw-bold">Change Password</div>
      </div>
      <div class="my-auto ml-2">
        <div class="bg-light rounded-md p-1">
          <img src="../assets/img/Line.svg" class="justify-center" alt="" />
        </div>
      </div>
    </div>
    <div
      class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray"
    >
      <div @click="router.push('myaddress')" class="w-full my-auto flex">
        <img src="../assets/img/my-address.svg" class="justify-center" alt="" />
        <div class="ml-4 my-auto text-dark fw-bold">My Address</div>
      </div>
      <div class="my-auto ml-2">
        <div class="bg-light rounded-md p-1">
          <img src="../assets/img/Line.svg" class="justify-center" alt="" />
        </div>
      </div>
    </div>
    <div
      class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray"
    >
      <div class="w-full my-auto flex">
        <img src="../assets/img/sign-out.svg" class="justify-center" alt="" />
        <div class="ml-4 my-auto text-dark fw-bold">Sign Out</div>
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
import { useRouter } from "vue-router";
import { useProfileStore } from "../store/modules/profile";
import { onMounted, ref } from "vue";

const router = useRouter();
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
const updatePhotoProfiles = async (formData: FormData) => {
  try {
    const res = await profileStore.updatePhotoProfile(formData);
    dataProfile.value = res.data as Item;
  } catch (error) {
    console.error(error);
  }
};

const selectedImage = ref<string | null>(null);

const handleImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    const formData = new FormData();
    formData.append("file", file);
    const reader = new FileReader();
    reader.onload = () => {
      selectedImage.value = reader.result as string;
    };
    reader.readAsDataURL(file);

    updatePhotoProfiles(formData);
  }
};
onMounted(() => {
  getProfiles();
});
</script>
