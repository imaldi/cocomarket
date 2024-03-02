<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div>
            <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Find Fresh Food</div>
        </div>

        <div class="flex pt-4">
          <div class="w-full border border-solid border-gray rounded-full p-2 pl-4 my-auto flex">
            <icon icon="iconamoon:search-light" color="#000" width="28" height="28" />
            <div class="ml-4 my-auto">Search Food, Drinks, etc</div>
          </div>
          <div class="my-auto ml-2">
            <div class="bg-light rounded-md p-1">
              <icon icon="fluent:toggle-multiple-16-regular" color="#7ACDD6" width="28" height="28" />
            </div>
          </div>
        </div>
      </div>

      <div class="mx-8">
        <div class="flex justify-between pt-4 pb-4">
          <div class="font-bold">Category</div>
          <div class="text-gray">See all</div>
        </div>
        <div>
          <div class="flex justify-between pb-6">
            <div class="w-1/2 rounded-xl p-6 mr-6 border border-solid" style="background-color: #53b175">
              <img src="../assets/shimla1.png" width="80" height="80" class="w-full justify-center" alt="" />
              <div class="text-center font-500">
                Fresh Fruits <br />
                and Vegetables
              </div>
            </div>
            <div class="w-1/2 rounded-xl p-6 border border-solid" style="background-color: #f8a44c">
              <img src="../assets/shimla2.png" width="80" height="80" class="w-full justify-center" alt="" />
              <div class="text-center font-500">
                Cooking Oil <br />
                & Ghee
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="w-1/2 rounded-xl p-6 mr-6 border border-solid" style="background-color: #f7a593">
              <img src="../assets/shimla3.png" width="80" height="80" class="w-full justify-center" alt="" />
              <div class="text-center font-500">
                Meat <br />
                & Fish
              </div>
            </div>
            <div class="w-1/2 rounded-xl p-6 border border-solid" style="background-color: #d3b0e0">
              <img src="../assets/shimla4.png" width="80" height="80" class="w-full justify-center" alt="" />
              <div class="text-center font-500">
                Bakery <br />
                & Snacks
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-8">
        <div class="flex justify-between pt-4 pb-4">
          <div class="font-bold">Fresh Vegan</div>
        </div>

        <div class="flex justify-between pb-6">
          <div>
            <div class="w-1/2 rounded-xl p-6 mr-6 bg-white">
              <img src="../assets/meat1.png" width="80" height="80" class="w-full justify-center" alt="" />
            </div>
            <div>
              <div>Kangkung</div>
              <div class="text-gray text-sm">5 Ons, Fresh</div>
            </div>
            <div class="flex justify-between">
              <div class="font-500">Rp. 7.500</div>
              <icon icon="iconoir:add-square" color="#7ACDD6" width="28" height="28" />
            </div>
          </div>

          <div>
            <div class="w-1/2 rounded-xl p-6 mr-6 bg-white">
              <img src="../assets/meat2.png" width="80" height="80" class="w-full justify-center" alt="" />
            </div>
            <div>
              <div>Bayam Segar</div>
              <div class="text-gray text-sm">8 Ons, Fresh</div>
            </div>
            <div class="flex justify-between">
              <div class="font-500">Rp. 5.000</div>
              <icon icon="iconoir:add-square" color="#7ACDD6" width="28" height="28" />
            </div>
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
</template>

<style scoped lang="scss">
.container {
  background-color: white;
  // display: flex;
  // flex-direction: column;
  // width: 100%;
  // height: 100vh;
  color: #000000;
}
</style>
