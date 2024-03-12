<template>
  <div class="container">
    <div class="bg-white shadow-md rounded-xl p-8">
      <div class="flex">
        <div class="w-full p-2 flex text-center justify-center">
          <div class="font-bold text-dark text-xl">Profile</div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-5 pt-5 justify-content-center">
      <label>
        <div class="d-flex flex justify-center rounded-full">
          <img
            v-if="dataProfile && dataProfile.profile_picture"
            :src="dataProfile.profile_picture"
            style="width: 106px; height: 106px; border-radius: 50%; cursor: pointer"
            class="w-full justify-center rounded-full"
            alt="image"
          />
          <iconnative
            v-else
            icon="profile-picture"
            style="width: 106px; height: 106px; border-radius: 50%; cursor: pointer"
            class="w-full justify-center rounded-full"
            alt="image"
          />
        </div>

        <div class="d-flex flex text-center justify-center ml-10 mt-0">
          <iconnative
            icon="edit-image-orange"
            style="width: 27px; margin-top: -2em; margin-left: 2em; cursor: pointer"
            class="w-full justify-end rounded"
            alt=""
          />
          <input type="file" accept="image/*" ref="imageInput" style="display: none" @change="handleImageChange" />
        </div>
      </label>
    </div>

    <div v-if="dataProfile" class="fw-bold text-xl text-center mt-2 text-dark">
      {{ dataProfile.name }}
    </div>
    <div class="fw-bold text-xl text-dark pl-8 mt-5">Akun</div>
    <div class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray">
      <div @click="router.push('changeprofile')" class="w-full my-auto flex">
        <iconnative icon="edit-black" class="justify-center" alt="" />
        <div class="ml-4 my-auto text-dark fw-bold">Change Profile</div>
      </div>
      <div class="my-auto ml-2">
        <div class="bg-light rounded-md p-1">
          <iconnative icon="next-arrow-black" class="justify-center" alt="" />
        </div>
      </div>
    </div>
    <div class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray">
      <div @click="router.push('changepassword')" class="w-full my-auto flex">
        <img src="../assets/img/change-password.svg" class="justify-center" alt="" />
        <div class="ml-4 my-auto text-dark fw-bold">Change Password</div>
      </div>
      <div class="my-auto ml-2">
        <div class="bg-light rounded-md p-1">
          <iconnative icon="next-arrow-black" class="justify-center" alt="" />
        </div>
      </div>
    </div>
    <div class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray">
      <div @click="router.push('myaddress')" class="w-full my-auto flex">
        <iconnative icon="outline-location" class="justify-center" alt="" />
        <div class="ml-4 my-auto text-dark fw-bold">My Address</div>
      </div>
      <div class="my-auto ml-2">
        <div class="bg-light rounded-md p-1">
          <iconnative icon="next-arrow-black" class="justify-center" alt="" />
        </div>
      </div>
    </div>
    <div class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray">
      <div @click="selectItem()" class="w-full my-auto flex">
        <iconnative icon="sign-out" class="justify-center" alt="" />
        <div class="ml-4 my-auto text-dark fw-bold">Sign Out</div>
      </div>
      <dialog-confirm
        v-model="deleteDialog"
        :message="`Are you sure want to Sign Out?`"
        @cancel="deleteDialog = false"
        @confirm="logout"
      >
      </dialog-confirm>
      <div class="my-auto ml-2">
        <div class="bg-light rounded-md p-1">
          <iconnative icon="next-arrow-black" class="justify-center" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useProfileStore } from "../store/modules/profile";
import { onMounted, ref } from "vue";
import { useAuthStore } from "../store/modules/auth";
import { ElNotification } from "element-plus";
import "../plugins/sweet-alert.css";
import DialogConfirm from "../components/dialog/ConfirmDialog.vue";
import iconnative from "../icon/index.vue";

const selectItem = () => {
  deleteDialog.value = true;
};

const deleteDialog = ref(false);
const authStore = useAuthStore();

const logout = async () => {
  try {
    await authStore.logout();

    ElNotification({
      title: "Sukses",
      type: "success",
      duration: 2000,
      customClass: "successNotif",
      message: "Berhasil Logout!",
    });

    localStorage.clear();

    router.push(`/`);
  } catch (error: any) {
    router.push(`/`);
    ElNotification({
      title: "Error",
      type: "error",
      duration: 2000,
      customClass: "errorNotif",
      message: error.response.data.message,
    });
  } finally {
    deleteDialog.value = false;
  }
};

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

<style scoped lang="scss">
.swal-confirm-button {
  margin-top: 10px;
  width: 500px !important;
  background-color: #7acdd6;
}

.swal-cancel-button {
  margin-bottom: 10px;
}
</style>
