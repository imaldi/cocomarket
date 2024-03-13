<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div @click="router.back()">
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Notification</div>
          <!-- <div>
            <iconnative icon="dot-vertical" color="#000" width="28" height="28" />
          </div> -->
        </div>
      </div>

      <div class="mx-8 pt-4">
        <div class="flex justify-center">
          <div class="mr-4 text-lg text-danger font-500">All</div>
          <div class="mr-4 text-lg font-500">Unread</div>
          <div class="text-lg font-500">Read</div>
        </div>
        <hr />
      </div>

      <div class="mx-8">
        <div>
          <div class="text-gray font-500">Today</div>
          <div v-for="(item, index) in listNotifData" :key="index" class="flex pt-4">
            <div class="flex pt-4">
              <div class="circle-bg">
                <iconnative icon="coin-star" class="" width="28" height="28" alt="notif" />
              </div>
            </div>
            <div class="my-auto ml-4">
              <div class="text-gray text-sm">{{ item.type }}</div>
              <div class="font-500 no-space">
                {{ item.subtitle }}
              </div>
            </div>
            <div class="text-xs text-gray">1hr</div>
          </div>
        </div>

        <!-- <div class="pt-4">
          <div class="text-gray">Yesterday</div>
          <div v-for="( n) in 4" :key="n" class="flex pt-4">
            <div class="flex pt-4">
              <div class="circle-bg">
                <img src="../assets/img/notif1.png" class="" width="28" height="28" alt="notif" />
              </div>
            </div>
            <div class="my-auto ml-4">
              <div class="text-gray text-sm">Transaction</div>
              <div class="font-500 no-space">
                Congratulations! You've earned reward points after completing today's purchase.
              </div>
            </div>
            <div class="text-xs text-gray">1d</div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useNotifStore } from "../store/modules/notification";
import { ref, onMounted } from "vue";
import iconnative from "../icon/index.vue";

const router = useRouter();
const notifStore = useNotifStore();
const listNotifData = ref<Item[]>();
interface Item {
  title: string;
  subtitle: string;
  type: string;
}
const getListNotif = async () => {
  try {
    const res = await notifStore.getListNotification();
    listNotifData.value = res.data as Item[];
  } catch (error) {
    console.log(error);
  } finally {
  }
};

onMounted(() => {
  getListNotif();
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
.circle-bg {
  padding: 8px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #7acdd6;
  width: 30px;
  height: 30px;
}
</style>
