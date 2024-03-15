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
        $route.path !== `/ordersuccess/${$route.params.id}` &&
        $route.path !== '/notification' &&
        $route.path !== `/receipt/${$route.params.id}` &&
        $route.path !== `/detailcategory/${$route.params.id}` &&
        $route.path !== '/chatinside' &&
        $route.path !== '/driver/login' &&
        $route.path !== '/driver/home' &&
        $route.path !== '/driver/delivery' &&
        $route.path !== `/driver/deliverydetails/${$route.params.id}` &&
        $route.path !== '/driver/changepassword' &&
        $route.path !== '/driver/changeprofile' &&
        $route.path !== '/mitra/login' &&
        $route.path !== '/mitra/splashscreen' &&
        $route.path !== '/mitra/verifycode' &&
        $route.path !== '/mitra/completeyourstoreprofile' &&
        $route.path !== '/mitra/businessdataverified' &&
        $route.path !== '/mitra/successfulverification' &&
        $route.path !== '/mitra/completestoredata' &&
        $route.path !== '/mitra/storeprofile' &&
        $route.path !== '/mitra/openinghours' &&
        $route.path !== '/mitra/changeschedule' &&
        $route.path !== '/mitra/storemenu' &&
        $route.path !== '/mitra/category'
      "
      class="bottom-navigation justify-between w-full z-2"
    >
      <div class="flex w-full justify-between px-4">
        <div @click="router.push('/home')" class="text-center m-2">
          <iconnative :icon="$route.path == '/home' ? 'home-active' : 'home'" class="mb-2" width="28" height="28" />
          <div :class="$route.path == '/home' ? 'text-primary' : 'text-black'" style="margin-top: -12px">Home</div>
        </div>
        <div @click="router.push('/history')" class="text-center m-2">
          <iconnative
            :icon="$route.path == '/history' ? 'history-active' : 'history'"
            class="mb-2"
            width="28"
            height="28"
          />
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
          <iconnative
            :icon="$route.path == '/profile' ? 'profile-active' : 'profile'"
            class="mb-2"
            width="28"
            height="28"
          />
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
</script>
