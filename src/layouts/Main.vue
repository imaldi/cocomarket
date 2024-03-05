<template>
  <div>
    <router-view></router-view>
    <nav
      v-if="
        $route.path !== '/' &&
        $route.path !== '/register' &&
        $route.path !== '/splashScreen' &&
        $route.path !== '/splashScreen1' &&
        $route.path !== '/splashScreen2' &&
        $route.path !== '/splashScreen3' &&
        $route.path !== '/splashScreen4' &&
        $route.path !== '/completeyourprofile' &&
        $route.path !== '/newpassword' &&
        $route.path !== '/verifycode' &&
        $route.path !== '/allowlocationaccess' &&
        $route.path !== '/findfreshfood' &&
        $route.path !== '/freshfooddetail' &&
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
        $route.path !== '/changeprofile'
      "
      class="bottom-navigation z-2"
    >
      <router-link to="/home" class="nav-item">
        <div>
          <div class="text-center">
            <icon
              icon="fluent:home-48-filled"
              :color="$route.path == '/home' ? '#7ACDD6' : '#a6a6a6'"
              width="30"
              height="30"
            />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -12px">Home</div>
        </div>
      </router-link>
      <router-link to="/history" class="nav-item">
        <div>
          <div class="text-center mb-1">
            <icon
              icon="ic:baseline-history"
              :color="$route.path == '/history' ? '#7ACDD6' : '#a6a6a6'"
              width="26"
              height="26"
            />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -10px">History</div>
        </div>
      </router-link>
      <router-link to="/order" class="nav-item">
        <div>
          <div class="text-center mb-1">
            <icon
              icon="bi:cart-check-fill"
              :color="$route.path == '/order' ? '#7ACDD6' : '#a6a6a6'"
              width="26"
              height="26"
            />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -10px">Order</div>
        </div>
      </router-link>
      <router-link to="/chat" class="nav-item">
        <div>
          <div class="text-center">
            <icon
              icon="heroicons:chat-bubble-left-right-20-solid"
              :color="$route.path == '/chat' ? '#7ACDD6' : '#a6a6a6'"
              width="30"
              height="30"
            />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -12px">Chat</div>
        </div>
      </router-link>
      <router-link to="/profile" class="nav-item">
        <div>
          <div class="text-center">
            <icon icon="gg:profile" :color="$route.path == '/profile' ? '#7ACDD6' : '#a6a6a6'" width="30" height="30" />
          </div>
          <div class="text-sm pt-1 text-black" style="margin-top: -12px">Profile</div>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

// const excludedPaths = [
//   "/",
//   "/register",
//   "/splashScreen",
//   "/splashScreen1",
//   "/splashScreen2",
//   "/splashScreen3",
//   "/splashScreen4",
//   "/completeyourprofile",
//   "/newpassword",
//   "/verifycode",
//   "/allowlocationaccess",
//   "/findfreshfood",
//   "/freshfooddetail",
//   "/addfreshfood",
//   "/configaddfreshfood",
//   "/checkout",
//   "/paymentmethod",
//   "/coupon",
//   "/forgotpassword",
//   "/resetPassword",
//   "/gmaps",
//   "/reviewsummary",
//   "/cocolingmitra",
//   "/cart",
//   "/coupondetail",
//   "/revieworder",
//   "/pedagangdetail",
//   "/rating",
//   "/changepassword",
//   "/changeprofile",
// ];
// const route = useRoute();
// const shouldRender = !excludedPaths.includes(route.path);
</script>
