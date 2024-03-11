<template>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl rounded-t-0 p-8">
        <div class="flex">
          <div class="w-full p-2 flex text-center justify-center">
            <div class="font-bold text-dark text-xl">Profile</div>
          </div>
        </div>
      </div>
  
      <div class="d-flex flex-column mt-5 pt-5 justify-content-center">
        <label>
          <div class="d-flex flex justify-center rounded-full">
            <img
            src ="../../assets/img/profile.svg"
              style="width: 106px; height: 106px; border-radius: 50%; cursor: pointer"
              class="w-full justify-center rounded-full"
              alt=""
            />
          </div>
  
          <div class="d-flex flex text-center justify-center ml-10 mt-0">
            <iconnative
              icon="edit-image-orange"
              style="width: 27px; margin-top: -2em; margin-left: 2em; cursor: pointer"
              class="w-full justify-end rounded"
              alt=""
            />
            <input type="file" accept="image/*" ref="imageInput" style="display: none" @change="handleImageChange" />
          </div>
        </label>
      </div>
  
      <div class="fw-bold text-xl text-center mt-2 text-dark">
        <!-- {{ dataProfile.name }} -->Mike Kasari
      </div>
      <div class="fw-bold text-xl text-dark pl-8 mt-5">Akun</div>
      <div class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray">
        <div class="w-full my-auto flex">
          <iconnative icon="edit-black" class="justify-center" alt="" />
          <div class="ml-4 my-auto text-dark fw-bold">Change Profile</div>
        </div>
        <div class="my-auto ml-2">
          <div class="bg-light rounded-md p-1">
            <iconnative icon="next-arrow-black" class="justify-center" alt="" />
          </div>
        </div>
      </div>
      <div class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray">
        <div class="w-full my-auto flex">
            <iconnative icon="lock" class="justify-center" alt="" />
          <div class="ml-4 my-auto text-dark fw-bold">Change Password</div>
        </div>
        <div class="my-auto ml-2">
          <div class="bg-light rounded-md p-1">
            <iconnative icon="next-arrow-black" class="justify-center" alt="" />
          </div>
        </div>
      </div>
      <div class="flex py-4 mx-8 border border-dotted border-x-0 border-t-0 border-gray">
        <div class="w-full my-auto flex">
          <iconnative icon="sign-out" class="justify-center" alt="" />
          <div class="ml-4 my-auto text-dark fw-bold">Sign Out</div>
        </div>
        <div class="my-auto ml-2">
          <div class="bg-light rounded-md p-1">
            <iconnative icon="next-arrow-black" class="justify-center" alt="" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import iconnative from "../../icon/index.vue";    
  </script>
  
  <style scoped lang="scss">
  .swal-confirm-button {
    margin-top: 10px;
    width: 500px !important;
    background-color: #7acdd6;
  }
  
  .swal-cancel-button {
    margin-bottom: 10px;
  }
  </style>
  