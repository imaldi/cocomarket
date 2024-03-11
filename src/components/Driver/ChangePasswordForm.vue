<template>
    <div>
      <div class="container">
        <div class="bg-white shadow-md rounded-xl p-8">
          <div  class="flex">
            <div>
              <iconnative
                icon="arrow-circle-black"
                color="#000"
                width="28"
                height="28"
              />
            </div>
            <div class="w-full justify-center flex font-bold">
              Change Password
            </div>
          </div>
        </div>
  
        <div class="mx-8 my-6">
          <Form
            v-slot="{ errors }"
            class="flex flex-col px-2 pt-6"
          >
            <label
              for="password"
              class="my-2 text-base font-bold text-sm text-black text-left"
              >New Password</label
            >
            <Field
              name="password"
              class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="password"

              type="password"
              rules="maxLength:12|minLength:8"
              placeholder="*********"
            />
            <p class="text-danger text-left text-sm mt-0">
              {{ errors.password }}
            </p>
            <label
              class="my-2 text-base font-bold text-sm text-black text-left"
              for="confirmPassword"
              >Confirm New Password</label
            >
            <Field
              name="confirmPassword"

              class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="confirmPassword"
              type="password"
              placeholder="*********"
            />
            <div class="text-red-500 text-sm">
              Passwords tidak sesuai.
            </div>
            <Button
              type="submit"
              class="w-[80vw] bg-[#7ACDD6] text-white mt-6 font-bold"
              >Change Password</Button
            >
          </Form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Form, Field } from "vee-validate";
  import iconnative from "../../icon/index.vue";
  </script>
  
  <style scoped lang="scss">
  .container {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #000000;
  }
  </style>
  