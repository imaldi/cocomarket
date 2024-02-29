<template>
  <div>
    <router-view></router-view>
    <nav
      v-if="
        false &&
        $route.path !== '/' &&
        $route.path !== '/confirm-payment' &&
        $route.path !== '/payment-instruction' &&
        $route.path !== '/change-password'
      "
      class="bottom-navigation"
    >
      <router-link to="/home" class="nav-item">
        <div>
          <div class="text-center">
            <icon
              icon="majesticons:home-line"
              :color="$route.path == '/home' ? '#4291f8' : '#a6a6a6'"
              width="30"
              height="30"
            />
          </div>
          <div class="text-sm pt-1" :class="$route.path == '/home' ? 'text-primary' : ''" style="margin-top: -12px">
            Home
          </div>
        </div>
      </router-link>
      <router-link to="/bills" class="nav-item">
        <div>
          <div class="text-center mb-1">
            <icon
              icon="vaadin:time-backward"
              :color="$route.path == '/bills' ? '#4291f8' : '#a6a6a6'"
              width="26"
              height="26"
            />
          </div>
          <div class="text-sm pt-1" :class="$route.path == '/bills' ? 'text-primary' : ''" style="margin-top: -10px">
            Bills
          </div>
        </div>
      </router-link>
      <router-link to="/support" class="nav-item">
        <div>
          <div class="text-center">
            <icon
              icon="streamline:customer-support-1"
              :color="$route.path == '/support' ? '#4291f8' : '#a6a6a6'"
              width="30"
              height="30"
            />
          </div>
          <div class="text-sm pt-1" :class="$route.path == '/support' ? 'text-primary' : ''" style="margin-top: -12px">
            Support
          </div>
        </div>
      </router-link>
      <router-link to="/package" class="nav-item">
        <div>
          <div class="text-center">
            <icon icon="gg:profile" :color="$route.path == '/package' ? '#4291f8' : '#a6a6a6'" width="30" height="30" />
          </div>
          <div class="text-sm pt-1" :class="$route.path == '/package' ? 'text-primary' : ''" style="margin-top: -12px">
            Package
          </div>
        </div>
      </router-link>
    </nav>
  </div>
</template>
