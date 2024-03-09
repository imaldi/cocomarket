<template>
    <div class="h-screen bg-white">
        <div class="flex justify-items-start pt-10">  <icon
         class="px-8  pb-10"
        icon="outline-arrow-left"
        color="#7ACDD6"
        width="53"
        height="53"
      /></div>

        <div class="flex justify-center mt-20 mb-10">
            <icon class="color-[#7ACDD6] bg-[#7ACDD615] p-6 rounded-full" icon="location" width="20vw"></icon>
        </div>

        <div class="flex flex-col items-center">
            <h1 class="text-2xl color-black font-bold my-1">What is Your Location?</h1>   
            <p class="text-sm color-black font-normal w-[80vw] my-1 text-center">We Need to Know your location in order to suggest nearby services</p>
        </div>
        <div class="flex flex-col items-center">
            <Button class="w-[80vw] bg-[#7ACDD6] mt-6 font-bold text-white">Allow Location Access</Button>
            <a href="#" class="text-[#7ACDD6] font-bold my-4">Enter Location Manually</a>
        </div>
    </div>
</template>


<script setup lang="ts">
import icon from '../icon/index.vue'
</script>