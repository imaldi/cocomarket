<template>
    <div class="h-screen bg-white">
        <div class="flex justify-items-start px-6 pt-10"><icon class="color-[#7ACDD6] " icon="ph:arrow-circle-left-thin" width="18vw"></icon></div>

        <div class="flex justify-center mt-20 mb-10">
            <icon class="color-[#7ACDD6] bg-[#7ACDD615] p-6 rounded-full" icon="mage:map-marker-fill" width="20vw"></icon>
        </div>

        <div class="flex flex-col items-center">
            <h1 class="text-2xl color-black font-bold my-1">What is Your Location?</h1>   
            <p class="text-sm color-black font-normal w-[80vw] my-1 text-center">We Need to Know your location in order to suggest nearby services</p>
        </div>
        <div class="flex flex-col items-center">
            <Button class="w-[80vw] bg-[#7ACDD6] mt-6 font-bold">Allow Location Access</Button>
            <a href="#" class="text-[#7ACDD6] font-bold my-4">Enter Location Manually</a>
        </div>
    </div>
</template>
