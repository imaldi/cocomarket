<template>
  <div>
    <router-view></router-view>
    <div v-if="isAppPaths($route.path, $route.params.id as string)"
      class="bottom-navigation justify-between w-full z-2">
      <div class="flex w-full justify-between px-4">
        <div @click="router.push('/home')" class="text-center m-2">
          <iconnative :icon="$route.path == '/home' ? 'home-active' : 'home'" class="mb-2" width="28" height="28" />
          <div :class="$route.path == '/home' ? 'text-primary' : 'text-black'" style="margin-top: -12px">Home</div>
        </div>
        <div @click="router.push('/history')" class="text-center m-2">
          <iconnative :icon="$route.path == '/history' ? 'history-active' : 'history'" class="mb-2" width="28"
            height="28" />
          <div :class="$route.path == '/history' ? 'text-primary' : 'text-black'" style="margin-top: -12px">
            History
          </div>
        </div>
        <div @click="router.push('/order')" class="text-center m-2">
          <iconnative :icon="$route.path == '/order' ? 'order-active' : 'order'" class="mb-2" width="28" height="28" />
          <div :class="$route.path == '/order' ? 'text-primary' : 'text-black'" style="margin-top: -12px">Order</div>
        </div>
        <div @click="chat()" class="text-center m-2">
          <iconnative :icon="$route.path == '/chat' ? 'chat-active' : 'chat'" class="mb-2" width="28" height="28" />
          <div :class="$route.path == '/chat' ? 'text-primary' : 'text-black'" style="margin-top: -12px">Chat</div>
        </div>
        <div @click="router.push('/profile')" class="text-center m-2">
          <iconnative :icon="$route.path == '/profile' ? 'profile-active' : 'profile'" class="mb-2" width="28"
            height="28" />
          <div :class="$route.path == '/profile' ? 'text-primary' : 'text-black'" style="margin-top: -12px">
            Profile
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconnative from "../icon/index.vue";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { isAppPaths } from "./isAppPaths";

const router = useRouter();

const chat = async () => {
  ElNotification({
    title: "Not Available",
    type: "warning",
    duration: 2000,
    customClass: "errorNotif",
    message: "Chat, Not Available !!!",
  });
};
</script>./isAppPaths
