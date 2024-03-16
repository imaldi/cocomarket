<template>
  <el-dialog
    style="height: 384px; justify-content: center; align-items: center; border-radius: 20px; margin-top: 14rem"
    :width="width || dialogWidth"
  >
    <div>
      <div class="d-flex flex-column align-center text-center justify-content-center px-2">
        <iconnative
          :icon="message == 'Delivery has been Completed ?' ? 'icon-success' : 'mark'"
          color="#E68027"
          width="110"
          height="110"
        />

        <p class="font-semibold text-2xl text-black">
          {{ message }}
        </p>
        <p class="text-gray">
          {{ messageDetail }}
        </p>
      </div>
      <div class="flex justify-center w-full">
        <div
          v-if="message !== 'Delivery has been Completed ?'"
          @click="$emit('cancel', true)"
          class="border-dotted border-2 border-danger text-danger w-1/2 text-center rounded-lg my-auto p-2 mr-2"
          :loading="loading"
        >
          No
        </div>
        <div
          @click="$emit('confirm', true)"
          :class="message == 'Delivery has been Completed ?' ? 'w-full' : 'w-1/2'"
          class="border-solid bg-primary text-white border-2 border-primary text-center rounded-lg my-auto p-2"
          :loading="loading"
        >
          {{ message == "Delivery has been Completed ?" ? "Okey" : "Yes" }}
        </div>
        <!-- <button @click="$emit('confirm', true)" class="mt-2 bg-primary w-1/2" type="submit" :loading="loading">Yes</button> -->
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
import iconnative from "../../icon/index.vue";

const props = defineProps({
  messageDetail: {
    type: String,
    require: true,
    prop: String,
  },
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
