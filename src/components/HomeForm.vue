<template>
  <div>
    <div class="container pb-10">
      <div class="bg-white shadow-xl rounded-xl p-8">
        <div class="flex relative">
          <iconnative icon="search" class="my-auto mr-2" color="#E68027" width="28" height="28" />
          <el-select
            v-model="selectedValues"
            filterable
            remote
            size="large"
            reserve-keyword
            placeholder="Search Food, Drinks, etc"
            remote-show-suffix
            :remote-method="remoteMethod"
            :loading="loading"
            style="width: 100%"
          >
            <el-option v-for="item in dataSearch" :key="item.name" :label="item.name" :value="item.value" />
            <!-- <template #prefix>
              <img
                src="../assets/icon/search.svg"
                class="absolute left-1 px-0 top-1"
                width="20"
                height="30"
                alt=""
              />
            </template> -->
          </el-select>
          <div class="bg-[#F7F7F7] rounded-lg ml-2 p-2">
            <iconnative @click="router.push('/notification')" icon="bell-red-dot" color="#000" width="20" height="20" />
          </div>
        </div>
      </div>

      <div class="mx-4 pt-4">
        <div class="bg-white rounded-xl shadow-lg">
          <div class="mx-4 p-2">
            <div class="flex">
              <iconnative icon="wallet" class="my-auto" color="#E68027" width="18" height="18" />
              <div class="my-auto ml-1 text-xs font-bold">CocoPay</div>
            </div>
            <div class="flex justify-between text-center">
              <div class="font-bold" style="font-size: 22px">
                {{
                  matchedData?.balance
                    ? Number(matchedData.balance).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })
                    : "Rp. 0"
                }}
              </div>
              <div class="flex">
                <div class="mr-2">
                  <iconnative icon="withdraw" color="#E68027" width="20" height="20" />
                  <div class="text-xs font-500">Pay</div>
                </div>
                <div class="mr-2">
                  <iconnative icon="outline-plus" color="#E68027" width="20" height="20" />
                  <div class="text-xs font-500">TopUp</div>
                </div>
                <div class="mr-2">
                  <iconnative icon="more" color="#E68027" width="20" height="20" />
                  <div class="text-xs font-500">More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-8">
        <div class="pt-4 pb-4 font-bold">Menu</div>
        <div class="flex justify-between">
          <div
            @click="router.push('/findfreshfood')"
            class="rounded-2xl p-4 w-1/2 mr-2 flex"
            style="background-color: #ffe7b1"
          >
            <div class="w-full flex justify-center">
              <div class="my-auto mr-2">
                <iconnative icon="fresh-food" color="#E68027" width="28" height="28" />
              </div>
              <div class="my-auto font-500">Fresh Food</div>
            </div>
          </div>

          <div
            @click="storling()"
            class="bg-secondary rounded-2xl p-4 w-1/2 ml-2 flex"
            style="background-color: #f6d6d0"
          >
            <div class="w-full flex justify-center">
              <div class="my-auto mr-2">
                <iconnative icon="storling" color="#E68027" width="28" height="28" />
              </div>
              <div class="my-auto font-500">Storling</div>
            </div>
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
          <img src="../assets/img/promos.png" style="width: 100%" alt="promos" />
        </div>

        <div class="font-bold">Best Deal</div>
        <div style="height: 100%">
          <div v-if="dataSearch && dataSearch.length > 0" class="grid grid-cols-2 py-4 gap-4 pb-20">
            <div v-for="(item, index) in dataSearch" :key="index">
              <div class="rounded-xl">
                <div class="p-4 bg-[#F8F8F8] rounded-lg">
                  <img :src="item.image" width="80" height="80" class="w-full justify-center" alt="image" />
                </div>
                <div>
                  <div>{{ item.name }}</div>
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

          <div v-else-if="dataProduct && dataProduct.length > 0" class="grid grid-cols-2 py-4 gap-4 pb-20">
            <div
              v-for="(item, index) in dataProduct"
              :key="index"
              class="rounded-xl"
              @click="addCart(item.products.id)"
            >
              <div class="p-4 bg-[#F8F8F8] rounded-lg">
                <img
                  v-if="item.products.image !== null"
                  :src="item.products.image"
                  width="80"
                  height="80"
                  class="w-full justify-center"
                  alt="image"
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
                <div class="font-500 mt-2">{{ item.products.name }}</div>
                <div class="text-gray">{{ item.products.subtitle }}</div>
              </div>
              <div class="flex justify-between">
                <div class="font-500">
                  {{
                    Number(item.products.price).toLocaleString("id-ID", {
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useHomeStore } from "../store/modules/home";
import iconnative from "../icon/index.vue";
import { ElNotification } from "element-plus";

const router = useRouter();
const homeStore = useHomeStore();
const loading = ref(false);
const inputValue = ref("");

interface Item {
  user_id: string;
  balance: string;
}
const dataSearch = ref<ItemSearch[]>([]);

interface ItemSearch {
  image: string;
  name: string;
  value: string;
  label: string;
  price: string;
}

const matchedData = ref<Item | undefined>(undefined);

const getAmountWallet = async () => {
  try {
    const res = await homeStore.getAmountWallet();
    const dataAmountWallet: Item[] = res.data;

    const localStorageUserId = localStorage.getItem("user_id");
    matchedData.value = dataAmountWallet.find((item) => item.user_id === localStorageUserId);
  } catch (error) {
    console.error("Error:", error);
  }
};

const dataProduct = ref<Items[]>([]);

interface Items {
  id: number;
  image: string;
  name: string;
  subtitle: string;
  price: string;
  products: {
    id: number;
    image: string;
    name: string;
    subtitle: string;
    price: string;
  };
}

const storling = async () => {
  ElNotification({
    title: "Coming soon",
    type: "warning",
    duration: 2000,
    customClass: "errorNotif",
    message: "Storling, Coming Soon !!!",
  });
};

const getBestDeals = async () => {
  try {
    const res = await homeStore.getBestDeal();
    dataProduct.value = res.data.data as Items[];
  } catch (error) {
    console.error("Error:", error);
  }
};

const getAllProduct = async (inputValue: string) => {
  const res = await homeStore.getAllSearch(inputValue);
  console.log(res);
};
const addCart = (id: number) => {
  router.push(`/freshfooddetail/${id}`);
};

const selectedValues = ref<string[]>([]);

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

declare const window: any;

const init = async () => {
  var OneSignal = window.plugins?.OneSignal;
  const localStorageUserId = localStorage.getItem("user_id") || "123";

  if (!OneSignal) return;
  if (OneSignal.default) OneSignal = OneSignal.default;

  const setUserOid = () => {
    OneSignal.setExternalUserId(localStorageUserId);
    OneSignal.sendTags({
      id: localStorageUserId,
    });
  };

  OneSignal.setLogLevel(6, 0);

  var notificationOpenedCallback = function (jsonData: any) {
    console.log("notificationOpenedCallback:" + JSON.stringify(jsonData));
  };

  OneSignal.setAppId("48fbf46f-d634-45a3-9eec-2b23a65e97f5");
  OneSignal.setNotificationOpenedHandler(notificationOpenedCallback);
  OneSignal.promptForPushNotificationsWithUserResponse(function (accepted: any) {
    console.log("User accepted notifications: " + accepted);
  });

  setUserOid();
};

onMounted(() => {
  init();
  getAllProduct(inputValue.value);
  getAmountWallet();
  getBestDeals();
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
