<template>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div class="w-full justify-center flex font-bold">Chat</div>
        </div>
      </div>
        
      <div class="mx-8">
        <div class="flex flex-col justify-between">
          <div class="font-bold py-4">Your Chat</div>

          <div class="h-[70vh] overflow-y-scroll">
            <div v-for="( n) in 10" :key="n" class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center mr-2">
                <img src="../assets/img/profile.svg" alt="Photo Profile">
              </div>

              <div class="w-1/2 flex flex-col self-center">
                <div class="text-base font-semibold">
                  John Doe
                </div>
                <div class="text-xs text-[#797C7B]">
                  Saya sedang dalam per...
                </div>
              </div>

              <div class="w-1/4 flex flex-col justify-between items-end">
                <div class="text-xs text-[#797C7B] mb-2">
                  2 min ago
                </div>
                <div class="text-white tex-t rounded-full px-2 bg-[#F04A4C]">
                  1
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center mr-2">
                <img src="../assets/img/profile.svg" alt="Photo Profile">
              </div>

              <div class="w-1/2 flex flex-col self-center">
                <div class="text-base font-semibold">
                  John Doe Last
                </div>
                <div class="text-xs text-[#797C7B]">
                  Saya sedang dalam per...
                </div>
              </div>

              <div class="w-1/4 flex flex-col justify-between items-end">
                <div class="text-xs text-[#797C7B] mb-2">
                  2 min ago
                </div>
                <div class="text-white tex-t rounded-full px-2 bg-[#F04A4C]">
                  1
                </div>
              </div>
            </div>
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
  
  color: #000000;
}
</style>
