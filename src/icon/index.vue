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
  </div>
</template>

<script>
import wallet from "../assets/icon/wallet.svg";
import money from "../assets/icon/money.svg";
import withdraw from "../assets/icon/withdraw.svg";
import outlinePlus from "../assets/icon/outline-plus.svg";
import more from "../assets/icon/more.svg";

export default {
  props: {
    icon: String,
    height: Number,
    width: Number,
    color: String,
  },
  data() {
    return {
      wallet,
      money,
      withdraw,
      outlinePlus,
      more
    };
  },
};
</script>
