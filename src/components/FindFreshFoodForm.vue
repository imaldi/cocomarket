<template>
  <div>
    <div :class="totalItem && totalItem.total !== 0 ? 'pb-30' : 'pb-10'" class="container">
      <div class="bg-white shadow-xl rounded-xl p-8">
        <div class="flex">
          <div @click="router.push('/home')">
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold text-xl">Find Fresh Food</div>
        </div>

        <el-select
          v-model="selectedValues"
          filterable
          remote
          size="medium"
          reserve-keyword
          placeholder="Search Food, Drinks, etc"
          remote-show-suffix
          :remote-method="remoteMethod"
          :loading="loading"
          class="mt-2"
          style="width: 100%"
        >
          <el-option v-for="item in dataSearch" :key="item.name" :label="item.name" :value="item.value" />
        </el-select>
      </div>

      <div class="mx-8">
        <div class="flex justify-between pt-4 pb-4">
          <div class="font-bold">Category</div>
          <div @click="seeAll" class="text-gray">See all</div>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-6">
            <div
              @click="GoDetail(list.id)"
              v-for="(list, index) in dataCategory"
              :key="index"
              class="rounded-xl p-6 border border-solid border-[#00000035]"
              :style="{ backgroundColor: generateBackgroundColor(index) }"
            >
              <img :src="list.image" width="80" height="80" class="w-full justify-center" alt="" />
              <div class="text-center font-500">
                {{ list.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-8">
        <div class="flex justify-between pt-4 pb-4">
          <div class="font-bold">Fresh Vegan</div>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(item, index) in dataProduct" :key="index" class="rounded-xl" @click="addCart(item.id)">
              <div class="p-4 bg-[#F8F8F8] rounded-lg">
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
              </div>
              <div>
                <div class="font-500 mt-2">{{ item.name }}</div>
                <div class="text-gray">{{ item.subtitle }}</div>
              </div>
              <div class="flex justify-between">
                <div class="font-500">
                  {{
                    Number(item.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })
                  }}
                </div>
                <iconnative icon="fill-plus" color="#7ACDD6" width="28" height="28" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="totalItem && totalItem.total !== 0" @click="GoDetailCart(totalItem.carts_id)" class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
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
                  <iconnative icon="shopping-bag" class="mr-4" color="#fff" width="28" height="28" />
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
import { useRouter } from "vue-router";
import { useCategoryStore } from "../store/modules/category";
import { useCartStore } from "../store/modules/cart";
import rupiah from "../plugins/rupiah";
import iconnative from "../icon/index.vue";
import { useHomeStore } from "../store/modules/home";

const totalPriceRupiah = computed(() => {
  if (totalItem.value) {
    const total = parseFloat(totalItem.value.amount);
    return rupiah(total);
  }
  return "Rp. 0";
});

const router = useRouter();
const categoryStore = useCategoryStore();
const cartStore = useCartStore();
const dataCategory = ref<Item[]>([]);
const dataProduct = ref<Items[]>([]);
const selectedValues = ref("");
const displayAllCategories = ref(false);
const seeAll = () => {
  displayAllCategories.value = !displayAllCategories.value;
};
interface Item {
  id: number;
  image: string;
  name: string;
  subtitle: string;
  price: string;
  total_stock: string;
}
interface Items {
  id: number;
  image: string;
  name: string;
  subtitle: string;
  price: string;
}
interface ItemsTotal {
  price: string;
  total: string | number;
  amount: string;
  carts_id: number;
  products: { name: string }[];
}

const getListCategory = async () => {
  try {
    const res = await categoryStore.getAllCategory();
    dataCategory.value = res.data as Item[];
  } catch (error) {
    console.log(error);
  } finally {
  }
};
const dataSearch = ref<ItemSearch[]>([]);
const homeStore = useHomeStore();
interface ItemSearch {
  image: string;
  name: string;
  value: string;
  label: string;
  price: string;
}
const loading = ref(false);
const remoteMethod = async (query: string) => {
  if (query) {
    loading.value = true;
    try {
      const res = await homeStore.getAllSearch(query);
      dataSearch.value = res.data as ItemSearch[];
    } catch (error) {
      console.error("Error:", error);
    } finally {
      loading.value = false;
    }
  } else {
    dataSearch.value = [];
  }
};
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

const getListProduct = async () => {
  try {
    const res = await categoryStore.getAllProduct();
    dataProduct.value = res.data as Items[];
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const generateBackgroundColor = (index: number) => {
  const colors = ["#eef8f2", "#f2eef8", "#f8f2ee", "#eeeff8"];
  return colors[index % colors.length];
};

// const GoDetail = (id: number) => {
//   router.push(`/configaddfreshfood/${id}`);
// };

const GoDetail = (id: number) => {
  router.push(`/detailcategory/${id}`);
};

const GoDetailCart = (id: number) => {
  router.push(`/configaddfreshfood/${id}`);
};

const addCart = (id: number) => {
  router.push(`/freshfooddetail/${id}`);
};

onMounted(() => {
  getListCategory();
  getListProduct();
  setTimeout(() => {
    getListCart();
  }, 200);
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  // height: 100vh;
  color: #000000;
}
</style>
