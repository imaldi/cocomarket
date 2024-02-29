<template>
  <form @submit.prevent="register" class="register-form">
    <input type="text" v-model="username" placeholder="Username" class="input-field">
    <input type="email" v-model="email" placeholder="Email" class="input-field">
    <input type="password" v-model="password" placeholder="Password" class="input-field">
    <button type="submit" class="submit-button">Register</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const register = () => {
      // Here, you can implement your registration logic
      console.log('Registering...');
      console.log('Username:', username.value);
      console.log('Email:', email.value);
      console.log('Password:', password.value);
    };

    return {
      username,
      email,
      password,
      register
    };
  }
});
</script>

<style scoped lang="scss">
.register-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.input-field {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
