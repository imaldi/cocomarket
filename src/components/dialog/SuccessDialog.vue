<template>
  <el-dialog
    style="
      height: 384px;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
    "
    :width="width || dialogWidth"
  >
    <div>
      <div
        class="d-flex flex-column align-center text-center justify-content-center px-2"
      >
        <img
          src="../../assets/icon/icon-success.svg"
          style="width: 120px; cursor: pointer"
          class="w-full justify-end rounded"
          alt=""
        />
        <p class="text-message font-bold text-xl" style="font-size: 22px; font-weight: 800; font-family: arial;" size="lg">
          {{ message }}
        </p>
      </div>
      <div class="d-flex flex-col flex justify-center mt-5">
        <button
          @click="$emit('confirm', true)"
          class="mt-2"
          type="submit"
          size="lg"
          :loading="loading"
          style="
            background-color: #7acdd6;
            color: #fff;
            border: 2px solid #7acdd6;
          "
        >
          {{ title }}
        </button>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  message: {
    type: String,
    require: true,
    prop: String,
  },
  title: {
    type: String,
    require: true,
    prop: String,
  },
  loading: {
    type: Boolean,
    require: true,
    default: false,
  },
  width: {
    type: String,
    require: false,
  },
});
console.log(props);

const screenWidth = computed(() => screen.width);
const dialogWidth = computed(() => (screenWidth.value > 768 ? "30%" : "80%"));
</script>

<style lang="scss" scoped>
.text-message {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  line-height: 30px;
  color: #000000;
}
</style>
