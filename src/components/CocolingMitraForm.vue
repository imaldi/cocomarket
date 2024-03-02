<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div>
            <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex">
            <div>
              <div class="font-bold">Bakso Solo Kang Emil</div>
              <div style="font-size: 10px">Bakso & Mie Ayam, Minuman, & Aneka</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="bg-gray flex justify-between w-full">
          <div class="flex w-full mx-4">
            <div class="text-center w-full">
              <div class="font-bold flex">
                <div>
                  <icon icon="mdi:deal-outline" color="#000" width="28" height="28" />
                </div>
                <div class="text-xs">4.6</div>
              </div>
              <div class="text-xs">982+ Rating</div>
            </div>
            <div class="text-center w-full">
              <div class="font-bold flex">
                <div>
                  <icon icon="mdi:deal-outline" color="#000" width="28" height="28" />
                </div>
                <div class="text-xs">1.99</div>
              </div>
              <div class="text-xs">Jarak</div>
            </div>
            <div class="text-center w-full">
              <div class="font-bold flex">
                <div>
                  <icon icon="mdi:deal-outline" color="#000" width="28" height="28" />
                </div>
                <div class="text-xs">982+ rating</div>
              </div>
              <div class="text-xs">Porsi Pas</div>
            </div>
            <div class="text-center w-full">
              <div class="font-bold flex">
                <div>
                  <icon icon="mdi:deal-outline" color="#000" width="28" height="28" />
                </div>
                <div class="text-xs">23+ rating</div>
              </div>
              <div class="text-xs">Kemasan Baik</div>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <div class="-mt-6 px-4 py-6 flex">
            <img class="p-2 rounded-full bg-[#7ACDD6]" src="../assets/checkout.png" alt="Driver Picture" width="28" />
            <div class="flex flex-col justify-center mx-4">
              <div class="text-sm font-bold">Delivery</div>
              <div class="text-xs font-normal tracking-tighter">10 - 15 Menit</div>
            </div>
            <div>
              <button
                class="ml-12 bg-white border-[#E68027] text-color-[#E68027] rounded-full border-2 text-xs py-2 px-6"
              >
                Switch
              </button>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
            <div class="flex w-full justify-between p-4">
              <div class="flex p-4 mr-8 rounded-2xl bg-primary w-full justify-center text-white">
                <div class="flex justify-between w-full">
                  <div class="my-auto">
                    <div class="font-bold text-xl">3 Item</div>
                    <div class="text-xs">Kangkung, Bayam, Bro..</div>
                  </div>
                  <div class="flex my-auto">
                    <div class="text-2xl font-bold mr-2">Rp.35.000</div>
                    <icon icon="tabler:shopping-bag-plus" class="mr-4" color="#fff" width="28" height="28" />
                  </div>
                </div>
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
  height: 100vh;
  color: #000000;
}
</style>
