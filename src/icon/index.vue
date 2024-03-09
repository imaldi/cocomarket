<template>
  <div>
    <div v-if="icon == 'wallet'">
      <img :src="wallet" :width="width" :height="height" alt="wallet" />
    </div>
    <div v-if="icon == 'money'">
      <img :src="money" :width="width" :height="height" alt="money" />
    </div>
    <div v-if="icon == 'withdraw'">
      <img :src="withdraw" :width="width" :height="height" alt="withdraw" />
    </div>
    <div v-if="icon == 'outline-plus'">
      <img :src="outlinePlus" :width="width" :height="height" alt="outlinePlus" />
    </div>
    <div v-if="icon == 'more'">
      <img :src="more" :width="width" :height="height" alt="more" />
    </div>
    <div v-if="icon == 'bell-red-dot'">
      <img :src="bellRedDot" :width="width" :height="height" alt="more" />
    </div>
    <div v-if="icon == 'fresh-food'">
      <img :src="freshFood" :width="width" :height="height" alt="freshFood" />
    </div>
    <div v-if="icon == 'storling'">
      <img :src="storling" :width="width" :height="height" alt="storling" />
    </div>
    <div v-if="icon == 'search'">
      <img :src="search" :width="width" :height="height" alt="search" />
    </div>
    <div v-if="icon == 'home'">
      <img :src="home" :width="width" :height="height" alt="home" />
    </div>
    <div v-if="icon == 'home-active'">
      <img :src="homeActive" :width="width" :height="height" alt="homeActive" />
    </div>
    <div v-if="icon == 'history'">
      <img :src="history" :width="width" :height="height" alt="history" />
    </div>
    <div v-if="icon == 'order'">
      <img :src="order" :width="width" :height="height" alt="order" />
    </div>
    <div v-if="icon == 'chat'">
      <img :src="chat" :width="width" :height="height" alt="chat" />
    </div>
    <div v-if="icon == 'profile'">
      <img :src="profile" :width="width" :height="height" alt="profile" />
    </div>
  </div>
</template>

<script>
import wallet from "../assets/icon/wallet.svg";
import money from "../assets/icon/money.svg";
import withdraw from "../assets/icon/withdraw.svg";
import outlinePlus from "../assets/icon/outline-plus.svg";
import more from "../assets/icon/more.svg";
import bellRedDot from "../assets/icon/bell-red-dot.svg";
import freshFood from "../assets/icon/fresh-food.svg";
import storling from "../assets/icon/storling.svg";
import search from "../assets/icon/search.svg";
import home from "../assets/icon/home.svg";
import history from "../assets/icon/history.svg";
import order from "../assets/icon/order.svg";
import chat from "../assets/icon/chat.svg";
import profile from "../assets/icon/profile.svg";
import homeActive from "../assets/icon/home-active.svg";

export default {
  props: {
    icon: String,
    height: Number,
    width: Number,
  },
  data() {
    return {
      wallet,
      money,
      withdraw,
      outlinePlus,
      more,
      bellRedDot,
      freshFood,
      storling,
      search,
      home,
      history,
      order,
      chat,
      profile,
      homeActive
    };
  },
};
</script>
