<template>
  <div>
    <router-view></router-view>
    <nav
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
        $route.path !== '/configaddfreshfood' &&
        $route.path !== '/checkout' &&
        $route.path !== '/paymentmethod' &&
        $route.path !== '/coupon' &&
        $route.path !== '/configaddfreshfood' &&
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
        $route.path !== '/ordersuccess' &&
        $route.path !== '/receipt' &&
        $route.path !== '/cocopay' &&
        $route.path !== '/cocopayselectmethod' &&
        $route.path !== `/detailcategory/${$route.params.id}`
      "
      class="bottom-navigation z-2"
    >
      <router-link to="/home" class="nav-item">
        <div>
          <div class="text-center">
            <iconnative :icon="$route.path == '/home' ? 'home-active' : 'home'" width="28" height="28" />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -12px">Home</div>
        </div>
      </router-link>
      <router-link to="/history" class="nav-item">
        <div>
          <div class="text-center">
            <iconnative
              icon="history"
              :color="$route.path == '/history' ? '#7ACDD6' : '#a6a6a6'"
              width="28"
              height="28"
            />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -12px">History</div>
        </div>
      </router-link>
      <router-link to="/order" class="nav-item">
        <div>
          <div class="text-center">
            <iconnative icon="order" :color="$route.path == '/order' ? '#7ACDD6' : '#a6a6a6'" width="28" height="28" />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -12px">Order</div>
        </div>
      </router-link>
      <router-link to="/chat" class="nav-item">
        <div>
          <div class="text-center">
            <iconnative icon="chat" :color="$route.path == '/chat' ? '#7ACDD6' : '#a6a6a6'" width="28" height="28" />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -12px">Chat</div>
        </div>
      </router-link>
      <router-link to="/profile" class="nav-item">
        <div>
          <div class="text-center">
            <iconnative
              icon="profile"
              :color="$route.path == '/profile' ? '#7ACDD6' : '#a6a6a6'"
              width="28"
              height="28"
            />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -12px">Profile</div>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import iconnative from "../icon/index.vue";
</script>
