import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('../layouts/Main.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue'),
      },
      {
        path: '/verifycode',
        name: 'VerifyCode',
        component: () => import('../views/VerifyCode.vue'),
      },
      {
        path: '/completeyourprofile',
        name: 'CompleteYourProfile',
        component: () => import('../views/CompleteYourProfile.vue'),
      },
      {
        path: '/allowlocationaccess',
        name: 'AllowLocationAccess',
        component: () => import('../views/AllowLocationAccess.vue'),
      },
      {
        path: '/searchlocation',
        name: 'SearchLocation',
        component: () => import('../views/SearchLocation.vue'),
      },
      {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: () => import('../views/ForgotPassword.vue'),
      },
      {
        path: '/resetPassword',
        name: 'resetPassword',
        component: () => import('../views/ResetPassword.vue'),
      },
      {
        path: '/newpassword',
        name: 'NewPassword',
        component: () => import('../views/NewPassword.vue'),
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/findfreshfood',
        name: 'FindFreshFood',
        component: () => import('../views/FindFreshFood.vue'),
      },
      {
        path: '/addfreshfood',
        name: 'AddFreshFood',
        component: () => import('../views/AddFreshFood.vue'),
      },
      {
        path: '/freshfooddetail/:id',
        name: 'FreshFoodDetail',
        component: () => import('../views/FreshFoodDetail.vue'),
      },
      {
        path: '/configaddfreshfood/:id',
        name: 'ConfigAddFreshFood',
        component: () => import('../views/ConfigAddFreshFood.vue'),
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/Checkout.vue'),
      },
      {
        path: '/ordersuccess/:id',
        name: 'OrderSuccess',
        component: () => import('../views/OrderSuccess.vue'),
      },
      {
        path: '/paymentmethod',
        name: 'PaymentMethod',
        component: () => import('../views/PaymentMethod.vue'),
      },
      {
        path: '/gmaps',
        name: 'GMaps',
        component: () => import('../views/GMaps.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: '/history',
        name: 'History',
        component: () => import('../views/History.vue'),
      },
      {
        path: '/changeprofile',
        name: 'ChangeProfile',
        component: () => import('../views/ChangeProfile.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
      },
      {
        path: '/notification',
        name: 'Notification',
        component: () => import('../views/Notification.vue'),
      },
      {
        path: '/splashScreen',
        name: 'SplashScreen',
        component: () => import('../views/SplashScreen/SplashScreen.vue'),
      },
      {
        path: '/splashScreen1',
        name: 'SplashScreen1',
        component: () => import('../views/SplashScreen/SplashScreen1.vue'),
      },
      {
        path: '/splashScreen2',
        name: 'SplashScreen2',
        component: () => import('../views/SplashScreen/SplashScreen2.vue'),
      },
      {
        path: '/splashScreen3',
        name: 'SplashScreen3',
        component: () => import('../views/SplashScreen/SplashScreen3.vue'),
      },
      {
        path: '/splashScreen4',
        name: 'SplashScreen4',
        component: () => import('../views/SplashScreen/SplashScreen4.vue'),
      },
      {
        path: '/cocolingmitra',
        name: 'CocolingMitra.vue',
        component: () => import('../views/CocolingMitra.vue'),
      },
      {
        path: '/coupon',
        name: 'Coupon',
        component: () => import('../views/Coupon.vue'),
      },
      {
        path: '/reviewsummary',
        name: 'ReviewSummary',
        component: () => import('../views/ReviewSummary.vue'),
      },
      {
        path: '/coupondetail/:id',
        name: 'CouponDetail',
        component: () => import('../views/CouponDetail.vue'),
      },
      {
        path: '/revieworder/:id',
        name: 'ReviewOrder',
        component: () => import('../views/ReviewOrder.vue'),
      },
      {
        path: '/pedagangdetail',
        name: 'PedagangDetail',
        component: () => import('../views/PedagangDetail.vue'),
      },
      {
        path: '/rating',
        name: 'Rating',
        component: () => import('../views/Rating.vue'),
      },
      {
        path: '/changepassword',
        name: 'ChangePassword',
        component: () => import('../views/ChangePassword.vue'),
      },

      {
        path: '/chat',
        name: 'Chat',
        component: () => import('../views/Chat.vue'),
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('../views/Order.vue'),
      },
      {
        path: '/orderfreshfood',
        name: 'OrderFreshfood',
        component: () => import('../views/OrderFreshfood.vue'),
      },
      {
        path: '/orderCocostore',
        name: 'OrderCocostore',
        component: () => import('../views/OrderCocostore.vue'),
      },
      {
        path: '/trackOrder/:id',
        name: 'TrackOrder',
        component: () => import('../views/TrackOrder.vue'),
      },
      {
        path: '/trackOrderDetail',
        name: 'TrackOrderDetail',
        component: () => import('../views/TrackOrderDetail.vue'),
      },
      {
        path: '/reviewOrderTrack',
        name: 'ReviewOrderTrack',
        component: () => import('../views/ReviewOrderTrack.vue'),
      },
      {
        path: '/orderCompleted',
        name: 'OrderCompleted',
        component: () => import('../views/OrderCompleted.vue'),
      },
      {
        path: '/reviewOrderList',
        name: 'ReviewOrderList',
        component: () => import('../views/ReviewOrderList.vue'),
      },
      {
        path: '/myaddress',
        name: 'MyAddress',
        component: () => import('../views/MyAddress.vue'),
      },
      {
        path: '/addaddress',
        name: 'AddAddress',
        component: () => import('../views/AddAddress.vue'),
      },
      {
        path: '/chooseprovince',
        name: 'ChooseProvince',
        component: () => import('../views/ChooseProvince.vue'),
      },
      {
        path: '/choosecity',
        name: 'ChooseCity',
        component: () => import('../views/ChooseCity.vue'),
      },
      {
        path: '/choosedistrict',
        name: 'ChooseDistrict',
        component: () => import('../views/ChooseDistrict.vue'),
      },
      {
        path: '/choosezipcode',
        name: 'ChooseZipCode',
        component: () => import('../views/ChooseZipCode.vue'),
      },
      {
        path: '/storling',
        name: 'Storling',
        component: () => import('../views/Storling.vue'),
      },
      {
        path: '/revieworder2',
        name: 'ReviewOrder2',
        component: () => import('../views/ReviewOrder2.vue'),
      },
      {
        path: '/receipt/:id',
        name: 'Receipt',
        component: () => import('../views/Receipt.vue'),
      },
      {
        path: '/cocopay',
        name: 'Cocopay',
        component: () => import('../views/Cocopay.vue'),
      },
      {
        path: '/cocopayselectmethod',
        name: 'CocopaySelectMethod',
        component: () => import('../views/CocopaySelectMethod.vue'),
      },
      {
        path: '/detailcategory/:id',
        name: 'detailCategory',
        component: () => import('../views/DetailCategory.vue'),
      },
      {
        path: '/chatinside',
        name: 'chatInside',
        component: () => import('../views/ChatInside.vue'),
      },
      {
        path: '/driver/login',
        name: 'Login Driver',
        component: () => import('../views/Driver/Login.vue'),
      },
      {
        path: '/driver/home',
        name: 'Home Driver',
        component: () => import('../views/Driver/Home.vue'),
      },
      {
        path: '/driver/delivery',
        name: 'Delivery Driver',
        component: () => import('../views/Driver/Delivery.vue'),
      },
      {
        path: '/driver/deliverydetails/:id',
        name: 'DeliveryDetails Driver',
        component: () => import('../views/Driver/DeliveryDetails.vue'),
      },
      {
        path: '/driver/history',
        name: 'History Driver',
        component: () => import('../views/Driver/History.vue'),
      },
      {
        path: '/driver/profile',
        name: 'Profile Driver',
        component: () => import('../views/Driver/Profile.vue'),
      },
      {
        path: '/driver/changepassword',
        name: 'ChangePassword Driver',
        component: () => import('../views/Driver/ChangePassword.vue'),
      },
      {
        path: '/driver/changeprofile',
        name: 'ChangeProfile Driver',
        component: () => import('../views/Driver/ChangeProfile.vue'),
      },
      {
        path: '/mitra/login',
        name: 'Login Mitra',
        component: () => import('../views/Mitra/Login.vue'),
      },
      {
        path: '/mitra/splashscreen',
        name: 'SplashScreen Mitra',
        component: () => import('../views/Mitra/SplashScreen.vue'),
      },
      {
        path: '/mitra/verifycode',
        name: 'VerifyCode Mitra',
        component: () => import('../views/Mitra/VerifyCode.vue'),
      },
      {
        path: '/mitra/completeyourstoreprofile',
        name: 'CompleteYourStoreProfile Mitra',
        component: () => import('../views/Mitra/CompleteYourStoreProfile.vue'),
      },
      {
        path: '/mitra/businessdataverified',
        name: 'BusinessDataVerified Mitra',
        component: () => import('../views/Mitra/BusinessDataVerified.vue'),
      },
      {
        path: '/mitra/successfulverification',
        name: 'SuccessfulVerification Mitra',
        component: () => import('../views/Mitra/SuccessfulVerification.vue'),
      },
      {
        path: '/mitra/completestoredata',
        name: 'CompleteStoreData Mitra',
        component: () => import('../views/Mitra/CompleteStoreData.vue'),
      },
      {
        path: '/mitra/storeprofile',
        name: 'StoreProfile Mitra',
        component: () => import('../views/Mitra/StoreProfile.vue'),
      },
      {
        path: '/mitra/openinghours',
        name: 'OpeningHours Mitra',
        component: () => import('../views/Mitra/OpeningHours.vue'),
      },
      {
        path: '/mitra/changeschedule',
        name: 'ChangeSchedule Mitra',
        component: () => import('../views/Mitra/ChangeSchedule.vue'),
      },
      {
        path: '/mitra/storemenu',
        name: 'StoreMenu Mitra',
        component: () => import('../views/Mitra/StoreMenu.vue'),
      },
      {
        path: '/mitra/category',
        name: 'Category Mitra',
        component: () => import('../views/Mitra/Category.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
