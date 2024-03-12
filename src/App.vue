<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
document.addEventListener(
  "deviceready",
  function () {
    var OneSignal = window.plugins?.OneSignal;
    const localStorageUserId = localStorage.getItem("user_id") || "123";
    console.log("11", OneSignal, window.plugins, localStorageUserId);

    if (!OneSignal) return;
    if (OneSignal.default) OneSignal = OneSignal.default;

    const setUserOid = () => {
      OneSignal.setExternalUserId(localStorageUserId);
      OneSignal.sendTags({
        id: user,
      });
    };

    OneSignal.setLogLevel(6, 0);

    var notificationOpenedCallback = function (jsonData) {
      console.log("notificationOpenedCallback:" + JSON.stringify(jsonData));
    };

    OneSignal.setAppId("48fbf46f-d634-45a3-9eec-2b23a65e97f5");
    OneSignal.setNotificationOpenedHandler(notificationOpenedCallback);
    OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
      console.log("User accepted notifications: " + accepted);
    });

    setUserOid();

    console.log(OneSignalInstance, window);
  },
  false
);
</script>
