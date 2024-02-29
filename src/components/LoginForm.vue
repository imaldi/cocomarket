<template>
  <form @submit.prevent="login" class="login-form">
    <input type="text" v-model="username" placeholder="Username" class="input-field" />
    <input type="password" v-model="password" placeholder="Password" class="input-field" />
    <button type="submit" class="submit-button">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const username = ref("");
    const password = ref("");

    const login = () => {
      // Here, you can implement your login logic
      console.log("Logging in...");
      console.log("Username:", username.value);
      console.log("Password:", password.value);
    };

    return {
      username,
      password,
      login,
    };
  },
});
</script>

<style scoped lang="scss">
.login-form {
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
