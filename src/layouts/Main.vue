<template>
  <div>
    <router-view></router-view>
    <div
      v-if="
        $route.path !== '/' &&
        $route.path !== '/register' &&
        $route.path !== '/splashscreen' &&
        $route.path !== '/splashscreen1' &&
        $route.path !== '/splashscreen2' &&
        $route.path !== '/splashscreen3' &&
        $route.path !== '/splashscreen4' &&
        $route.path !== '/completeyourprofile' &&
        $route.path !== '/newpassword' &&
        $route.path !== '/verifycode' &&
        $route.path !== '/allowlocationaccess' &&
        $route.path !== '/findfreshfood' &&
        $route.path !== `/freshfooddetail/${$route.params.id}` &&
        $route.path !== '/addfreshfood' &&
        $route.path !== `/configaddfreshfood/${$route.params.id}` &&
        $route.path !== '/checkout' &&
        $route.path !== '/paymentmethod' &&
        $route.path !== '/coupon' &&
        $route.path !== '/forgotpassword' &&
        $route.path !== '/resetPassword' &&
        $route.path !== '/checkout' &&
        $route.path !== '/gmaps' &&
        $route.path !== '/reviewsummary' &&
        $route.path !== '/cocolingmitra' &&
        $route.path !== '/cart' &&
        $route.path !== '/coupondetail' &&
        $route.path !== '/revieworder' &&
        $route.path !== '/pedagangdetail' &&
        $route.path !== '/rating' &&
        $route.path !== '/changepassword' &&
        $route.path !== '/changeprofile' &&
        $route.path !== '/orderfreshfood' &&
        $route.path !== '/orderCocoStore' &&
        $route.path !== '/trackOrder' &&
        $route.path !== '/reviewOrderTrack' &&
        $route.path !== '/orderCompleted' &&
        $route.path !== '/reviewOrderList' &&
        $route.path !== '/myaddress' &&
        $route.path !== '/addaddress' &&
        $route.path !== '/chooseprovince' &&
        $route.path !== '/choosecity' &&
        $route.path !== '/choosecdistrict' &&
        $route.path !== '/chooseczipcode' &&
        $route.path !== '/storling' &&
        $route.path !== '/revieworder2' &&
        $route.path !== '/receipt' &&
        $route.path !== '/cocopay' &&
        $route.path !== '/cocopayselectmethod' &&
        $route.path !== `/detailcategory/${$route.params.id}` &&
        $route.path !== `/ordersuccess/${$route.params.id}`
      "
      class="bottom-navigation justify-between w-full z-2"
    >
      <div class="flex w-full justify-between mx-4">
        <div @click="router.push('/home')" class="text-center p-4 bg-primary">
          <iconnative :icon="$route.path == '/home' ? 'home-active' : 'home'" width="28" height="28" />
          <div :class="$route.path == '/home' ? 'text-primary' : 'text-black'" style="margin-top: -12px">Home</div>
        </div>
        <div @click="router.push('/history')" class="text-center p-4 bg-primary">
          <iconnative :icon="$route.path == '/history' ? 'history-active' : 'history'" width="28" height="28" />
          <div :class="$route.path == '/history' ? 'text-primary' : 'text-black'" style="margin-top: -12px">
            History
          </div>
        </div>
        <div @click="router.push('/order')" class="text-center p-4 bg-primary">
          <iconnative :icon="$route.path == '/order' ? 'order-active' : 'order'" width="28" height="28" />
          <div :class="$route.path == '/order' ? 'text-primary' : 'text-black'" style="margin-top: -12px">Order</div>
        </div>
        <div @click="router.push('/chat')" class="text-center p-4 bg-primary">
          <iconnative :icon="$route.path == '/chat' ? 'chat-active' : 'chat'" width="28" height="28" />
          <div :class="$route.path == '/chat' ? 'text-primary' : 'text-black'" style="margin-top: -12px">Chat</div>
        </div>
        <div @click="router.push('/profile')" class="text-center p-4 bg-primary">
          <iconnative :icon="$route.path == '/profile' ? 'profile-active' : 'profile'" width="28" height="28" />
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

const router = useRouter();
</script>
