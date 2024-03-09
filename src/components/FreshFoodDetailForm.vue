<template>
  <div>
    <div class="container" v-if="detailProduct">
      <div class="w-full flex">
        <div class="absolute w-full">
          <div class="justify-between flex w-full">
            <div @click="router.back()">
              <icon
                class="p-8"
                icon="ion:chevron-back"
                color="#000"
                width="28"
                height="28"
              />
            </div>
            <icon
              class="relative p-8"
              icon="ion:share-outline"
              color="#000"
              width="28"
              height="28"
            />
          </div>
        </div>
      </div>
      <div class="bg-gray rounded-xl">
        <div
          class="text-center"
          style="height: 30vh;"
        >
          <img :src="detailProduct.image" style=" background: rgba(255, 255, 255, 0.5); width: 100%;height: 100%;"  alt="" />
        </div>
      </div>

      <div class="mx-8">
        <div>
          <div class="pt-4 pb-4">
            <div class="font-bold">{{ detailProduct.name }}</div>
          </div>
          <div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <div @click="decreaseQuantity">
                  <icon
                    icon="mage:minus-square"
                    color="#555"
                    width="50"
                    height="50"
                  />
                </div>
                <div class="p-3">{{ quantity }}</div>
                <div @click="increaseQuantity">
                  <icon
                    icon="mage:plus-square"
                    color="#555"
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="font-bold text-2xl">
                Rp. {{ detailProduct.price }}
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="flex justify-between">
          <div class="font-500 pt-2">Product Detail</div>
          <div class="mt-2">
            <icon
              icon="ion:chevron-down"
              class="my-auto"
              color="#555"
              width="28"
              height="28"
            />
          </div>
        </div>
        <div class="text-justify text-gray text-sm">
          {{ detailProduct.description }}
        </div>
      </div>

      <div class="relative">
        <div
          class="fixed w-full bg-white rounded-lg shadow-md"
          style="bottom: 4em"
        >
          <div class="flex w-full justify-between p-4">
            <div class="my-auto">
              <div>Total Price</div>
              <div class="font-bold">Rp. {{ totalPrice }}</div>
            </div>
            <div
              @click="goToCart(detailProduct.id, detailProduct.categories_id)"
              class="flex p-4 mr-8 rounded-2xl bg-primary w-1/2 justify-center"
            >
              <icon
                icon="tabler:shopping-bag-plus"
                class="mr-4"
                color="#fff"
                width="28"
                height="28"
              />
              <div type="button" class="text-lg font-500 text-white">
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useProdukStore } from "../store/modules/product";
import { onMounted, ref, computed } from "vue";
import { useCartStore } from "../store/modules/cart";
const route = useRoute();
const produkStore = useProdukStore();
const cartStore = useCartStore();
const detailProduct = ref<Item | null>(null);

const quantity = ref(1);

const increaseQuantity = () => {
  quantity.value += 1;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};

interface Item {
  id: string;
  name: string;
  image: string;
  price: number;
  categories_id: number;
  description: string;
}

const goToCart = (id: any, catId: any) => {
  if (detailProduct.value) {
    const payload = {
      products_id: id,
      qty: quantity.value,
    };

    try {
      const response = cartStore.addToCart(payload);
      console.log(response);
      router.push(`/detailcategory/${catId}`);
    } catch (error) {}
  }
};

const totalPrice = computed(() => {
  if (detailProduct.value) {
    return detailProduct.value.price * quantity.value;
  }
  return 0;
});

const getDetail = async (id: any) => {
  try {
    const res = await produkStore.getProductById(id);
    console.log("res", res);
    detailProduct.value = res.data.product as Item;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  getDetail(route.params.id);
});
const router = useRouter();
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
</style>
