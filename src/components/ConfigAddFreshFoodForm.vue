<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div @click="router.back()">
            <icon icon="ion:arrow-back-circle-outline" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Shopping Cart</div>
        </div>
      </div>

      <div class="mx-8 pt-4 h-screen overflow-y">
        <div class="scrollable-content">
          <div v-for="(item, index) in detailCategory" :key="index" class="flex shadow-md p-4 rounded-md">
            <div class="bg-gray rounded-lg">
              <img src="../assets/img/meat1.png" alt="" />
            </div>
            <div class="flex justify-between w-full">
              <div class="ml-4 my-auto">
                <div class="font-500">{{ item.products_name }}</div>
                <div class="text-gray">{{ item.products_subtitle }}</div>
                <div class="flex font-bold">
                  <div>Rp.</div>
                  <div>
                    {{ item.products_price.toLocaleString("en-US", { useGrouping: true }).replace(/,/g, ".") }}
                  </div>
                </div>
              </div>
              <div class="ml-4 my-auto">
                <div @click="item.total--">
                  <icon icon="mage:minus-square" color="#7ACDD6" width="28" height="28" />
                </div>
                <div class="p-2 text-gray">{{ item.total }}</div>
                <div @click="item.total++">
                  <icon icon="mage:plus-square" color="#7ACDD6" width="28" height="28" />
                </div>
                <div @click="removeItem(index)">
                  <icon icon="mage:trash" color="#7ACDD6" width="28" height="28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 4em">
          <div v-if="detailCategory" class="flex w-full justify-between p-4">
            <div class="my-auto">
              <div>Total Price</div>
              <div class="font-500">Rp. {{ calculateTotalPrice() }}</div>
            </div>
            <div @click="goToCart(route.params.id)" class="flex p-4 mr-8 rounded-2xl bg-primary w-1/2 justify-center">
              <div class="text-2xl text-white">Continue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "../store/modules/category";
import { useCartStore } from "../store/modules/cart";

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

const goToCart = (id: any) => {
  const payload = {
    products_id: id,
  };

  try {
    const response = cartStore.addToCart(payload);
    console.log(response);
    router.push(`/checkout`);
  } catch (error) {}
};

const calculateTotalPrice = () => {
  let total = 0;
  detailCategory.value.forEach((item: any) => {
    total += item.products_price * item.total;
  });

  return total.toLocaleString("en-US", { useGrouping: true }).replace(/,/g, ".");
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

const getCartDetails = async (id: any) => {
  try {
    const res = await cartStore.getCartDetail(id);
    detailCategory.value = res.data as Item[];
  } catch (error) {
    console.log(error);
  }
};

const increaseQuantity = (index: number) => {
  quantity.value[index] += 1;
};

const decreaseQuantity = (index: number) => {
  if (quantity.value[index] > 0) {
    quantity.value[index] -= 1;
  }
};

const removeItem = (index: number) => {
  detailCategory.value.splice(index, 1);
  quantity.value.splice(index, 1);
};

onMounted(() => {
  getCategorybyId(route.params.id);
  getCartDetails(route.params.id);
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
