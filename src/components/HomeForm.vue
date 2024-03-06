<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <!-- <input
            class="w-full border border-solid border-gray rounded-full p-2 pl-4 my-auto flex"
            type="text"
            placeholder="Search Food, Drinks, etc"
            v-model="inputValue"
            @input="handleInput"
            @focus="showAutocomplete"
            @blur="hideAutocomplete"
          />
          <div class="autocomplete-items">
            <div class="autocomplete-item" v-for="(item, index) in dataSearch" :key="index">
              {{ item.name }}
            </div>
          </div> -->
          <div class="w-full border border-solid border-gray rounded-full p-2 pl-4 my-auto flex">
            <icon icon="iconamoon:search-light" color="#000" width="28" height="28" />
            <div class="ml-4 my-auto">Search Food, Drinks, etc</div>
          </div>
          <div class="my-auto ml-2">
            <div class="bg-light rounded-md p-1">
              <icon icon="clarity:bell-solid-badged" color="#000" width="28" height="28" />
            </div>
          </div>
        </div>
      </div>

      <div class="mx-4 pt-4">
        <div class="bg-white rounded-xl shadow-lg">
          <div class="mx-4 p-2">
            <div class="flex">
              <icon icon="streamline:wallet-solid" color="#E68027" width="28" height="28" />
              <div class="my-auto ml-2 font-bold">CocoPay</div>
            </div>
            <div class="flex justify-between text-center">
              <div class="text-3xl font-bold">Rp. 230.200</div>
              <div class="flex">
                <div class="mr-0.5">
                  <icon icon="ri:qr-scan-line" color="#000" width="28" height="28" />
                  <div class="text-xs">Pay</div>
                </div>
                <div class="mr-0.5">
                  <icon icon="iconoir:add-square" color="#000" width="28" height="28" />
                  <div class="text-xs">TopUp</div>
                </div>
                <div class="mr-0.5">
                  <icon icon="iconoir:menu" color="#000" width="28" height="28" />
                  <div class="text-xs">More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-8">
        <div class="pt-4 pb-4 font-bold">Menu</div>
        <div class="flex justify-between">
          <div @click="router.push('/findfreshfood')" class="rounded-2xl p-4 flex" style="background-color: #ffe7b1">
            <div class="my-auto mr-2">
              <!-- <icon icon="noto-v1:pot-of-food" color="#000" width="28" height="28" /> -->
              <img src="../assets/img/fresh-food.png" alt="fresh-food" />
            </div>
            <div class="my-auto">Fresh Food</div>
          </div>
          <div class="bg-secondary rounded-2xl p-4 flex" style="background-color: #f6d6d0">
            <div class="my-auto mr-2">
              <!-- <icon icon="mdi:deal-outline" color="#000" width="28" height="28" /> -->
              <img src="../assets/img/cocoling.png" alt="cocoling" />
            </div>
            <div class="my-auto">COCOLING</div>
          </div>
        </div>

        <div class="pt-4 pb-4 font-bold">Promos</div>
        <div class="w-full">
          <div class="relative mx-4">
            <div class="absolute text-white font-bold" style="bottom: -200px">
              <div class="text-3xl">
                GET 10% for Your <br />
                Fresh Food
              </div>
              <div class="mt-2">Enjoy discounts of up 10% on your fresh food today</div>
              <div class="bg-white rounded-full p-2 pr-6 pl-6 text-black w-1/4 text-center mt-2">Buy Now</div>
            </div>
          </div>
          <img src="../assets/img/promos.png" width="328" height="228" alt="" />
        </div>

        <div class="font-bold">Best Deal</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useHomeStore } from "../store/modules/home";

const router = useRouter();
const homeStore = useHomeStore();

const inputValue = ref("");
const showSuggestions = ref(false);
const dataSearch = ref([]);
const dataAmountWallet = ref([]);

const getAmountWallet = async () => {
  const res = await homeStore.getAmountWallet();
  dataAmountWallet.value = res.data;
};

const handleInput = async (e: any) => {
  const res = await homeStore.getAllSearch(e.target.value);
  dataSearch.value = res.data;
  try {
  } catch (error) {
    console.log(error);
  } finally {
  }
};
const showAutocomplete = () => {
  if (inputValue.value.length > 0) {
    showSuggestions.value = true;
  }
};

const hideAutocomplete = () => {
  showSuggestions.value = false;
};

onMounted(() => {
  getAmountWallet();
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000000;
}

.autocomplete-items {
  position: absolute;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 99;
}

.autocomplete-item {
  padding: 10px;
  cursor: pointer;
}

.autocomplete-item:hover {
  background-color: #e9e9e9;
}
</style>
