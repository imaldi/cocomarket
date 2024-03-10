<template>
    <div class="container">
      <div class="mx-8">
        <div>
          <iconnative
          class="pt-4"
          icon="outline-arrow-left"
          color="#7ACDD6"
          width="53"
          height="53"
        />
        </div>
        <div class="mt-4 text-center flex flex-col items-center">
          <div class="text-2xl font-bold  w-78">Complete Your Store Profile</div>
          <div class="text-sm  w-78">Don’t Worry, only you can see your personal data. No one else will be able to see it</div>
        </div>
        <div class="text-center mt-4">
          <iconnative icon="complete-your-profile" color="#000" width="120" height="120" />
        </div>
  
        <form class="login-form">
          <div class="mb-2 font-500">Owner's Name</div>
          <input type="text" placeholder="Username" class="input-field" />
          
          <div class="mb-2 font-500">Gerobak Name</div>
          <input type="text" placeholder="Enter Store Name" class="input-field" />
  
          <div class="mb-2 font-500">Phone Number</div>
          <input type="number" placeholder="Enter Phone Number" class="input-field" />
  
          <!-- <p>Gender</p>
          <input type="number" v-model="gender" placeholder="Select" class="input-field" /> -->
  
          <button type="submit" class="submit-button">Next</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import iconnative from "../../icon/index.vue";
  </script>
  
  <style scoped lang="scss">
  .container {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 100vh;
    color: #000000;
  }
  
  .input-field {
    color: black;
    width: 94%;
    margin-bottom: 10px;
    padding: 10px;
    background-color: white;
    border: 1.5px black solid;
    border-radius: 5px;
  }
  
  .submit-button {
    font-size: 18px;
    margin-top: 30px;
    width: 100%;
    padding: 10px;
    background-color: #7acdd6;
    color: #fff;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  </style>
  