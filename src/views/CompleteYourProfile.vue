<template>
  <div>
    <div class="mt-20 mx-8">
      <div>
        <icon icon="ion:arrow-back-outline" color="#7ACDD6" width="38" height="38" />
      </div>
      <div class="mt-4 text-center">
        <div class="text-2xl font-bold">Complete Your Profile</div>
        <div>Don't Worry, only you can see your personal data. No else will too able too see it.</div>
      </div>
      <div class="text-center mt-4">
        <icon class="circle-icon" icon="basil:user-outline" color="#000" width="38" height="38" />
      </div>

      <input
        class="input-field mt-4"
        type="text"
        id="phoneNumber"
        v-model="phoneNumber"
        placeholder="Isikan nomor pelanggan anda"
        required
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const phoneNumber = ref("");
</script>
