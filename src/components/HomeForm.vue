<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div class="w-full border border-solid border-gray rounded-full p-2 pl-4 my-auto flex">
            <icon icon="iconamoon:search-light" color="#000" width="28" height="28" />
            <div class="ml-4 my-auto">Search Food, Drinks, etc</div>
          </div>
          <div>
            <icon icon="clarity:bell-solid-badged" color="#000" width="28" height="28" />
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
