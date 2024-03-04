<template>
  <div>
    <div class="container">
      <div class="w-full flex">
        <div class="absolute w-full">
          <div class="justify-between flex w-full">
            <icon class="relative p-8" icon="ion:chevron-back" color="#000" width="28" height="28" />
            <icon class="relative p-8" icon="ion:share-outline" color="#000" width="28" height="28" />
          </div>
        </div>
      </div>

      <div class="bg-gray rounded-xl p-8">
        <div class="text-center" style="height: 30vh">
          <img src="../assets/img/food1.png" width="200" height="200" alt="" />
        </div>
        <div class="text-center text-4xl">...</div>
      </div>

      <div class="mx-8">
        <div>
          <div class="pt-4 pb-4">
            <div class="font-bold">Kangkung</div>
            <div>5 Ons, Fresh</div>
          </div>
          <div>
            <div class="flex justify-between">
              <div class="flex">
                <div>
                  <icon icon="mage:minus-square" color="#555" width="50" height="50" />
                </div>
                <div class="p-3">1</div>
                <div>
                  <icon icon="mage:plus-square" color="#555" width="50" height="50" />
                </div>
              </div>
              <div class="font-600 text-2xl">Rp. 7.500</div>
            </div>
          </div>
        </div>

        <hr />

        <div class="flex justify-between">
          <div class="font-500 pt-2">Product Detail</div>
          <div class="mt-2">
            <icon icon="ion:chevron-down" class="my-auto" color="#555" width="28" height="28" />
          </div>
        </div>
        <div class="text-justify text-gray text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's.
        </div>
      </div>

      <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
          <div class="flex w-full justify-between p-4">
            <div class="my-auto">
              <div>Total Price</div>
              <div class="font-500">Rp. 15.000</div>
            </div>
            <div class="flex p-4 mr-8 rounded-2xl bg-primary w-1/2 justify-center">
              <icon icon="tabler:shopping-bag-plus" class="mr-4" color="#fff" width="28" height="28" />
              <div class="text-2xl text-white">Add Cart</div>
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
