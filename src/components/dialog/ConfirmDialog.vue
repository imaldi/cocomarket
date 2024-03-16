<template>
  <el-dialog
    :style="message !== 'Address not found, Please add address!' ? 'height: 384px;' : 'height: 324px;'"
    style="justify-content: center; align-items: center; border-radius: 20px; margin-top: 14rem"
    :width="width || dialogWidth"
  >
    <div>
      <div class="d-flex flex-column align-center text-center justify-content-center px-2">
        <iconnative
          :icon="message !== 'Address not found, Please add address!' ? 'icon-popup' : 'mark'"
          color="#E68027"
          width="110"
          height="110"
        />
        <p class="text-message">
          {{ message }}
        </p>
      </div>
      <div
        :class="message !== 'Address not found, Please add address!' ? 'mt-5' : 'mt-10'"
        class="d-flex flex-col flex justify-center"
      >
        <button
          v-if="message !== 'Address not found, Please add address!'"
          @click="$emit('cancel', true)"
          size="lg"
          type="button"
          :loading="loading"
          style="background-color: #fff; color: #7acdd6; border: 2px solid #7acdd6"
        >
          No
        </button>
        <button
          @click="$emit('confirm', true)"
          class="mt-2"
          type="submit"
          size="lg"
          :loading="loading"
          :style="
            message !== 'Address not found, Please add address!'
              ? 'background-color: #7acdd6; color: #fff; border: 2px solid #7acdd6'
              : 'background-color: #ff7675; color: #fff; border: 2px solid #7acdd6'
          "
        >
          Yes
        </button>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
import iconnative from "../../icon/index.vue";

const props = defineProps({
  message: {
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
