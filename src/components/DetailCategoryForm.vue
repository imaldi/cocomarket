<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div @click="router.push('/findfreshfood')">
            <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Find Fresh Food</div>
        </div>

        <!-- <div class="flex pt-4">
          <div class="w-full border border-solid border-gray rounded-full p-2 pl-4 my-auto flex">
            <icon icon="iconamoon:search-light" color="#000" width="28" height="28" />
            <div class="ml-4 my-auto">Search Food, Drinks, etc</div>
          </div>
          <div class="my-auto ml-2">
            <div class="bg-light rounded-md p-1">
              <icon icon="fluent:toggle-multiple-16-regular" color="#7ACDD6" width="28" height="28" />
            </div>
          </div>
        </div> -->
      </div>

      <div class="mx-8">
        <div>
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="(item, index) in detailCategory"
              :key="index"
              class="rounded-xl p-0 mr-6 bg-white"
              @click="GoDetail(item.id)"
            >
              <img
                v-if="item.image !== null"
                :src="item.image"
                width="80"
                height="80"
                class="w-full justify-center"
                alt=""
              />
              <template v-else>
                <img
                  src="../assets/img/template-food.jpg"
                  width="80"
                  height="80"
                  class="w-full justify-center"
                  alt=""
                />
              </template>
              <div>
                <div>{{ item.name }}</div>
              </div>
              <div class="flex justify-between">
                <div class="font-500">
                  {{ Number(item.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }}
                </div>
                <icon icon="iconoir:add-square" color="#7ACDD6" width="28" height="28" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="totalItem" @click="GoDetail(totalItem.carts_id)" class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0.5em">
          <div class="flex w-full justify-between p-4">
            <div class="flex p-4 mr-8 rounded-2xl bg-primary w-full justify-center text-white">
              <div class="flex justify-between w-full">
                <div class="my-auto">
                  <div class="font-bold text-xl">{{ totalItem.total }} Item</div>
                  <div class="text-xs">
                    {{ namesWithoutNumbers.join(", ") }}
                  </div>
                </div>
                <div class="flex my-auto">
                  <div class="text-2xl font-bold mr-2">
                    {{ totalPriceRupiah }}
                  </div>
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

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "../store/modules/category";
import { useCartStore } from "../store/modules/cart";
import rupiah from "../plugins/rupiah";

const totalPriceRupiah = computed(() => {
  if (totalItem.value) {
    const total = parseFloat(totalItem.value.amount);
    return rupiah(total);
  }
  return "Rp. 0";
});

const router = useRouter();
const route = useRoute();
const categoryStore = useCategoryStore();
const cartStore = useCartStore();

const detailCategory = ref<Item[]>([]);
const quantity = ref<number[]>([]);
interface Item {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  total_stock: string;
}

interface ItemsTotal {
  price: string;
  total: string;
  amount: string;
  products: { name: string }[];
}

const namesWithoutNumbers = ref<string[]>([]);
const totalItem = ref<ItemsTotal | null>(null);
const getListCart = async () => {
  try {
    const res = await cartStore.getCartTotal();
    totalItem.value = res.data as ItemsTotal;
    namesWithoutNumbers.value = totalItem.value.products.map((item) => item.name.replace(/\d+/g, ""));
    const namesWithoutNumbersCleaned = namesWithoutNumbers.value.map((name: string) => name.replace(/\d+/g, ""));
    console.log(namesWithoutNumbersCleaned);
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const GoDetail = (id: number) => {
  router.push(`/freshfooddetail/${id}`);
};

const getCategorybyId = async (id: any) => {
  try {
    const res = await categoryStore.getProductByCategory(id);
    quantity.value = new Array(res.data.length).fill(1);
    detailCategory.value = res.data as Item[];
  } catch (error) {
    console.log(error);
  }
};

// const getCartDetails = async (id: any) => {
//   try {
//     const res = await cartStore.getCartDetail(id);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };
onMounted(() => {
  getCategorybyId(route.params.id);
  getListCart();
  // getCartDetails(route.params.id);
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #000000;
}

.scrollable-content {
  max-height: calc(72vh - 2rem);
  overflow-y: auto;
}
</style>
