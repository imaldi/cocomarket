<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div>
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Coupon</div>
        </div>
        <div class="my-8">
          <div class="flex border border-solid py-4 border-[#7ACDD6] rounded-xl bg-white z-2 -mb-2">
            <div class="flex items-center px-4 border border-dashed border-t-0 border-b-0 border-l-0">
              <iconnative icon="promo-discount" alt="Coupon Logo" width="60" />
            </div>
            <div class="pl-4">
              <div class="text-xl font-bold">{{ discount_percent }}% OFF</div>
              <div class="text-xs font-normal">{{ coupon?.code }}</div>
              <div class="text-xs text-gray font-semibold mt-2">Valid until {{ DD_MMMM_YYYY(coupon?.valid_end as
                string) }}
              </div>
            </div>
          </div>
          <div role="button" @click="useCoupon"
            class="text-sm font-bold text-center bg-[#7ACDD6] py-2 rounded-xl rounded-t-0">USE</div>
        </div>
      </div>

      <div class="mx-8 my-6">
        <div class="text-base font-bold mb-2">DISKON {{ discount_percent }}% OFF Delivery</div>
        <div class="text-sm font-normal mb-2 pb-2 border border-solid border-gray border-x-0 border-t-0">
          {{ coupon?.title }}
        </div>
        <div class="flex flex-row justify-between mb-4">
          <div class="text-sm font-semibold">Berlaku Hingga</div>
          <div class="text-sm font-semibold">{{ DD_MMMM_YYYY(coupon?.valid_end as string) }}</div>
        </div>
      </div>

      <div class="border-4 border-solid border-slate-200 border-x-0 border-t-0"></div>

      <div class="px-4 my-6">
        <div class="flex items-center mb-4">
          <div class="1/3">
            <iconnative icon="terms-condition" color="#000" width="50" height="50" />
          </div>
          <div class="2/3 px-2">
            <div class="font-bold">Terms & Condition</div>
            <div class="text-xs font-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad min....
            </div>
          </div>
          <div class="1/3">
            <icon icon="mingcute:right-line" color="black" width="28" height="28" />
          </div>
        </div>

        <div class="flex items-center mb-4">
          <div class="1/3">
            <iconnative icon="book" color="#000" width="34" height="34" />
          </div>
          <div class="2/3 pl-6">
            <div class="font-bold">How To Use</div>
            <div class="text-xs font-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad min....
            </div>
          </div>
          <div class="1/3">
            <icon icon="mingcute:right-line" color="black" width="28" height="28" />
          </div>
        </div>

        <div class="flex items-center mb-4">
          <div class="1/3">
            <iconnative icon="info-c" color="#000" width="34" height="34" />
          </div>
          <div class="2/3 pl-6">
            <div class="font-bold">Coupon Description</div>
            <div class="text-xs font-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad min....
            </div>
          </div>
          <div class="1/3">
            <icon icon="mingcute:right-line" color="black" width="28" height="28" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import iconnative from "../icon/index.vue";
import { useCouponStore } from "../store/modules/coupon";
import { useRoute, useRouter } from "vue-router";
import { CouponDetails } from "../@types/type_coupon";
import { DD_MMMM_YYYY } from "../utils/date_format"
import { ElNotification } from "element-plus";

const couponStore = useCouponStore();
const route = useRoute()
const router = useRouter();
const coupon = ref<CouponDetails | undefined>();
const getCouponDetails = async () => {
  const id_coupon = route.params.id as string
  const res = await couponStore.getCouponDetails(id_coupon);
  coupon.value = res.data
};

const discount_percent = computed(() => {
  if (coupon.value) {
    return parseInt(coupon.value.discount_percent, 10).toString()
  }
  return ''
})

const useCoupon = async () => {
  if (!coupon.value) return
  try {
    await couponStore.useCouponNow(coupon.value)
    ElNotification({
      title: "Success",
      type: "success",
      duration: 2000,
      customClass: "successNotif",
      message: "Coupon Successfully Used!",
    });
    router.go(-2)
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getCouponDetails()

})

</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #000000;
}
</style>
