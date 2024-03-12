<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div>
            <iconnative @click="router.back()" icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold text-xl">Coupon</div>
        </div>
      </div>

      <div class="mx-8 my-6">
        <div class="text-base font-semibold mb-4">Best offers for you</div>

        <div v-for="(item, n) in dataCoupon" :key="n">
          <div class="mb-4">
            <div class="flex border border-solid py-4 border-[#7ACDD6] rounded-xl bg-white z-2 -mb-2">
              <div class="flex items-center px-4 border border-dashed border-t-0 border-b-0 border-l-0">
                <iconnative icon="promo-discount" alt="Coupon Logo" width="60" />
              </div>
              <div class="pl-4">
                <div class="text-xl font-bold">{{ item.discount_percent }} %</div>
                <div class="text-xs font-normal">{{ item.code.toUpperCase() }}</div>
                <div class="text-xs text-gray font-semibold mt-2">Valid until {{ item.valid_end }}</div>
              </div>
            </div>
            <div class="text-sm font-bold text-center bg-[#7ACDD6] py-2 rounded-xl rounded-t-0">USE</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import iconnative from "../icon/index.vue";
import { useCouponStore } from "../store/modules/coupon";

const router = useRouter();

const couponStore = useCouponStore();

const dataCoupon = ref<Items[]>([]);

interface Items {
  id: number;
  code: string;
  image: string;
  name: string;
  subtitle: string;
  price: string;
  discount_percent: string;
  valid_end: string;
}

const getListCoupon = async () => {
  try {
    const res = await couponStore.getAllCoupon();
    dataCoupon.value = res.data as Items[];
  } catch (error) {
    console.log(error);
  } finally {
  }
};

onMounted(() => {
  getListCoupon();
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #000000;
}
</style>
