<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-xl rounded-xl p-8">
        <div class="flex">
          <div @click="backData(detailCategory)">
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold text-xl">Shopping Cart</div>
        </div>
      </div>

      <div class="mx-8 pt-4 h-screen overflow-y">
        <div class="scrollable-content">
          <template v-for="(item, index) in detailCategory">
            <div
              v-if="item.total !== 0"
              :key="index"
              class="flex border border-solid border-light shadow-md mb-4 p-4 rounded-md"
            >
              <div class="p-4 bg-[#F8F8F8] rounded-lg">
                <img v-if="item.image !== null" :src="item.image" width="100%" class="w-full justify-center" alt="" />
                <template v-else>
                  <img src="../assets/img/meat1.png" class="w-full justify-center" alt="image" />
                </template>
              </div>
              <div class="flex justify-between w-full">
                <div class="ml-4 my-auto">
                  <div class="font-500">{{ item.products_name }}</div>
                  <div class="text-gray">{{ item.products_subtitle }}</div>
                  <div class="flex font-bold">
                    <div>
                      {{
                        Number(item.products_price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })
                      }}
                    </div>
                  </div>
                </div>
                <div class="ml-4 my-auto">
                  <div @click="decreaseQuantity(item)">
                    <icon icon="mage:minus-square" color="#7ACDD6" width="28" height="28" />
                  </div>
                  <div class="p-2 text-gray w-4">{{ item.total }}</div>
                  <div @click="increaseQuantity(item)">
                    <icon icon="mage:plus-square" color="#7ACDD6" width="28" height="28" />
                  </div>
                  <div @click="removeItem(item.id, index)">
                    <icon icon="mage:trash" color="#ff0000" width="28" height="28" />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="relative">
        <div class="fixed w-full bg-white rounded-lg shadow-md" style="bottom: 0">
          <div v-if="detailCategory" class="flex w-full justify-between p-4">
            <div class="my-auto">
              <div>Total Price</div>
              <div class="font-500">{{ calculateTotalPrice() }}</div>
            </div>
            <div @click="goToCart(detailCategory)" class="flex p-4 mr-8 rounded-2xl bg-primary w-1/2 justify-center">
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
// import { useCategoryStore } from "../store/modules/category";
import { useCartStore } from "../store/modules/cart";
import { ElNotification } from "element-plus";
import iconnative from "../icon/index.vue";

const router = useRouter();
const route = useRoute();
// const categoryStore = useCategoryStore();
const cartStore = useCartStore();
const detailCategory = ref<Item[]>([]);
const quantity = ref<number[]>([]);
interface Item {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  products_name: string;
  products_price: string;
  products_subtitle: string;
  total: number;
  total_stock: string;
  image: any;
}

const backData = (data: any) => {
  var payload: any = [];

  data.forEach((item: any) => {
    payload.push({ products_id: item.products_id, qty: item.total });
  });

  try {
    cartStore.putToCart({ data: payload }, data[0].carts_id);
    setTimeout(() => {
      router.back();
    }, 100);
  } catch (error) {
    console.error(error);
  }
};

const goToCart = (data: any) => {
  var payload: any = [];

  data.forEach((item: any) => {
    payload.push({ products_id: item.products_id, qty: item.total });
  });

  try {
    cartStore.putToCart({ data: payload }, data[0].carts_id);
    setTimeout(() => {
      router.push(`/checkout`);
    }, 100);
  } catch (error) {
    console.error(error);
  }
};

const calculateTotalPrice = () => {
  let total = 0;
  detailCategory.value.forEach((item: any) => {
    total += item.products_price * item.total;
  });

  return Number(total).toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

// const getCategorybyId = async (id: any) => {
//   try {
//     const res = await categoryStore.getProductByCategory(id);
//     quantity.value = new Array(res.data.length).fill(1);
//     detailCategory.value = res.data as Item[];
//   } catch (error) {
//     console.log(error);
//   }
// };

const getCartDetails = async (id: any) => {
  try {
    const res = await cartStore.getCartDetail(id);
    detailCategory.value = res.data as Item[];
  } catch (error) {
    console.log(error);
  }
};

const increaseQuantity = (item: any) => {
  if (item.total < 20) {
    return item.total++;
  }
};

const decreaseQuantity = (item: any) => {
  if (item.total > 0) {
    item.total -= 1;
  }
};

const removeItem = async (id: any, index: number) => {
  try {
    if (confirm("Are you sure delete product ?") == true) {
      const res = await cartStore.removeCartDetail(id);

      if (res) {
        detailCategory.value.splice(index, 1);
        quantity.value.splice(index, 1);

        if (detailCategory.value?.length == 0) {
          setTimeout(() => {
            router.push("/findfreshfood");
          }, 500);
        }

        ElNotification({
          title: "Delete Success",
          type: "success",
          duration: 2000,
          customClass: "successNotif",
          message: "Product berhasil di update",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  // getCategorybyId(route.params.id);
  getCartDetails(route.params.id);
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 96vh;
  color: #000000;
}

.scrollable-content {
  max-height: calc(72vh - 2rem);
  overflow-y: auto;
}
</style>
