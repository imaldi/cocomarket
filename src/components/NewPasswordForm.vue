<template>
  <div class="h-screen bg-white">
    <div class="flex justify-items-start px-6 pt-10">
      <icon class="color-[#7ACDD6]" icon="ph:arrow-circle-left-thin" width="18vw"></icon>
    </div>
    <div class="flex flex-col items-center">
      <h1 class="text-2xl color-black font-bold my-1">New Password</h1>
      <p class="text-sm color-black font-normal w-[80vw] my-1">
        Your new password must be diffrent from previously used password
      </p>
    </div>
    <form class="flex flex-col px-10 pt-6" action="">
      <label for="password" class="my-2 text-base font-semibold text-black text-left">Password</label>
      <input
        class="shadow appearance-none border border-black rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
        id="password"
        type="password"
        placeholder="*********"
      />
      <label class="my-2 text-base font-semibold text-black text-left" for="confirmPassword">Confirm Password</label>
      <input
        class="shadow appearance-none border border-black rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
        id="confirmPassword"
        type="confirmPassword"
        placeholder="*********"
      />
    </form>
    <div class="flex flex-col items-center">
      <Button class="w-[80vw] bg-[#7ACDD6] mt-6 font-bold">Create New Password</Button>
      <a href="#" class="text-[#7ACDD6] font-bold my-4">Skip</a>
    </div>
  </div>
</template>
