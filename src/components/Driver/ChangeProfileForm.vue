<template>
  <div>
    <div class="container">
      <div class="bg-white shadow-md rounded-xl p-8">
        <div class="flex">
          <div>
            <iconnative icon="arrow-circle-black" color="#000" width="28" height="28" />
          </div>
          <div class="w-full justify-center flex font-bold">Change Profile</div>
        </div>
      </div>

      <div class="mx-8 my-4">
        <div class="font-bold text-xl mb-6">Personal</div>

        <div class="font-bold text-sm">Profile Picture</div>
        <div class="flex items-end">
          <div class="rounded-full overflow-hidden border-2 border-solid">
            <img src="../../assets/img/profile.svg" alt="Profile Picture" />
          </div>
          <div class="flex px-3 items-center rounded-full bg-#7ACDD6 mb-4">
            <div class="mr-2">
              <iconnative icon="edit" color="#000" width="10" />
            </div>
            <div class="text-white text-xs font-400">Change</div>
          </div>
        </div>

        <Form v-slot="{ errors }" class="flex flex-col pt-6" autocomplete="off">
          <label for="name" class="text-sm font-bold text-black text-left">Name</label>
          <Field
            name="names"
            class="shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 leading-tight rounded-md focus:outline-none focus:shadow-outline bg-white"
            id="name"
            type="name"
            placeholder="John Doe"
            rules="required"
          />
          <p class="text-danger text-left text-sm mt-0">
            {{ errors.names }}
          </p>
          <label for="email" class="text-sm font-bold text-black text-left">Email</label>
          <Field
            name="email"
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="email"
            type="email"
            rules="required"
            placeholder="johndoe@mail.com"
          />
          <p class="text-danger text-left text-sm mt-0">
            {{ errors.email }}
          </p>
          <label for="phone" class="text-sm font-bold text-black text-left">Phone Number</label>
          <Field
            name="phone"
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="phone"
            type="number"
            placeholder="02938"
          />
          <p class="text-danger text-left text-sm mt-0">
            {{ errors.phone }}
          </p>
          <label class="text-sm font-bold text-black text-left" for="dob">Date Of Birth</label>
          <Field
            name="dob"
            class="shadow rounded-md appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="dob"
            type="date"
            placeholder="*********"
          />
          <p class="text-danger text-left text-sm mt-0">
            {{ errors.dob }}
          </p>
          <div class="flex flex-col items-center">
            <Button type="submit" class="w-[84vw] bg-[#7ACDD6] text-white mt-2 font-bold">Submit</Button>
          </div>
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
