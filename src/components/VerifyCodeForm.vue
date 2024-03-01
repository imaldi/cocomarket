<template>
    <div class="h-screen bg-white">
        <div class="flex justify-items-start px-6 pt-10"><icon class="color-[#7ACDD6] " icon="ph:arrow-circle-left-thin" width="18vw"></icon></div>
        <div class="flex flex-col items-center">
            <h1 class="text-2xl color-black font-bold my-1">Verify Code</h1>   
            <p class="text-sm color-black font-normal w-[80vw] my-1">Please enter the code we just sent to email JohnDoe@Gmail.com</p>
        </div>
        <form class="flex flex-row justify-between px-16 pt-6" action="">
            <input class="w-[12vw] border-[#00000035] rounded-xl h-14 bg-[white]" type="number">
            <input class="w-[12vw] border-[#00000035] rounded-xl h-14 bg-[white]" type="number">
            <input class="w-[12vw] border-[#00000035] rounded-xl h-14 bg-[white]" type="number">
            <input class="w-[12vw] border-[#00000035] rounded-xl h-14 bg-[white]" type="number">
        </form>
        <div class="flex flex-col items-center">
            <p class="text-base color-black w-[40vw] font-semibold mb-0">Didn't recieve OTP?? <a class="underline font-bold color-black" href="#">Resend Code</a></p>
            <Button class="w-[80vw] bg-[#7ACDD6] mt-6 font-bold">Verify</Button>
        </div>
    </div>
</template>