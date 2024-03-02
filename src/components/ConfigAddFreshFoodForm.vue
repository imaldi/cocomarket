<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div>
            <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Shopping Cart</div>
        </div>
      </div>

      <div class="mx-8 pt-4">
        <div v-for="(item, n) in 4" :key="n" class="flex shadow-md p-4 rounded-md">
          <div class="bg-gray rounded-lg">
            <img src="../assets/meat1.png" alt="" />
          </div>
          <div class="flex justify-between w-full">
            <div class="ml-4 my-auto">
              <div class="font-500">Kangkung</div>
              <div>5 Ons, Fresh</div>
              <div class="font-bold">Rp. 15.000</div>
            </div>
            <div class="ml-4 my-auto">
              <div>
                <icon icon="mage:minus-square" color="#7ACDD6" width="28" height="28" />
              </div>
              <div class="p-2 text-gray">2</div>
              <div>
                <icon icon="mage:plus-square" color="#7ACDD6" width="28" height="28" />
              </div>
              <div>
                <icon icon="mage:trash" color="#7ACDD6" width="28" height="28" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="flex w-full justify-between p-4">
            <div class="my-auto">
              <div>Total Price</div>
              <div class="font-500">Rp. 230.000</div>
            </div>
            <div class="flex p-4 mr-8 rounded-2xl bg-primary w-1/2 justify-center">
              <div class="text-2xl text-white">Continue</div>
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
