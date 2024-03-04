<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div class="flex">
            <div>
              <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
            </div>
            <div class="w-full justify-center flex font-bold">Change Password</div>
          </div>
        </div>

        <div class="mx-8 my-6">
                <form class="flex flex-col px-2 pt-6" action="">
                <label for="password" class="my-2 text-base font-bold text-sm text-black text-left">New Password</label>
                <input
                    class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                    id="password"
                    type="password"
                    placeholder="*********"
                />
                <label class="my-2 text-base font-bold text-sm text-black text-left" for="confirmPassword">Confirm New Password</label>
                <input
                    class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                    id="confirmPassword"
                    type="confirmPassword"
                    placeholder="*********"
                />
                </form>
                <div class="flex flex-col items-center">
                <Button class="w-[80vw] bg-[#7ACDD6] text-white mt-6 font-bold">Change Password</Button>
                </div>
  
        </div>
    </div>
    </div>
  </template>
  
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
  