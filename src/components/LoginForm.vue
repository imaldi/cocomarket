<template>
  <div class="container text-center">
    <div class="login-title">
      <h1>Sign In</h1>
      <h5>Hi Welcome Back, you've been missed</h5>
    </div>

    <Form v-slot="{ errors }" autocomplete="off" @submit="login" class="login-form">
      <p class="input-title">Email</p>
      <Field v-model="username" name="Username" type="text" class="input-field" placeholder="Email" rules="required" />
      <p v-if="errors.Username" class="text-danger text-left text-sm mt-0">
        {{ errors.Username }}
      </p>
      <p class="input-title">Password</p>
      <Field
        type="password"
        name="password"
        v-model="password"
        placeholder="Password"
        class="input-field"
        rules="required|minLength:6|maxLength:20"
      />
      <p v-if="errors.password" class="text-danger text-left text-sm mt-0">
        {{ errors.password }}
      </p>
      <a href="#/forgotpassword" class="forgot-password">Forgot Password?</a>
      <button type="submit" class="submit-button">Sign In</button>
    </Form>

    <!-- <div class="or-sign-section">
      <hr class="line" />
      <p class="or-sign-in-with">Or Sign In With</p>
      <hr class="line" />
    </div> -->

    <!-- <div class="sign-in-social">
      <div class="apple">
        <img
          src="../assets/img/apple-logo.svg"
          alt="Logo Apple"
          class="logo-icon"
        />
      </div>
      <div class="google">
        <img
          src="../assets/img/google-logo.svg"
          alt="Logo Apple"
          class="logo-icon"
        />
      </div>
      <div class="facebook">
        <img
          src="../assets/img/facebook-logo.svg"
          alt="Logo Apple"
          class="logo-icon"
        />
      </div>
    </div> -->

    <p class="sign-up-title">Don't Have an account? <a href="#/register" class="sign-up">Sign Up</a></p>

    <transition name="fade">
      <div v-if="showLoad" class="popupLoad">
        <div class="loader absolute"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Form, Field } from "vee-validate";
import { useAuthStore } from "../store/modules/auth";
import { ElNotification } from "element-plus";

const router = useRouter();
const authStore = useAuthStore();
const username = ref("");
const password = ref("");
const showLoad = ref(false);

const login = async () => {
  const payload = {
    email: username.value,
    password: password.value,
  };

  try {
    const response = await authStore.login(payload);
    if (!response.access_token) {
      ElNotification({
        title: "Error",
        type: "error",
        duration: 2000,
        customClass: "errorNotif",
        message: "Maaf, tidak bisa Login",
      });
    } else {
      ElNotification({
        title: "Sukses",
        type: "success",
        duration: 2000,
        customClass: "successNotif",
        message: "Berhasil Login!",
      });

      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user_id", response.user.id);
      router.push(`/home`);
    }
  } catch (error: any) {
    ElNotification({
      title: "Error",
      type: "error",
      duration: 2000,
      customClass: "errorNotif",
      message: "Incorrect email or password!",
    });
  }
};

onMounted(() => {
  const isAuthenticated = localStorage.getItem("user_id");

  if (isAuthenticated) {
    showLoad.value = true;

    router.push("/home");

    setTimeout(() => {
      showLoad.value = false;
    }, 200);
  }
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30%;
  // height: 100vh;
}

.login-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
}

.login-title h1 {
  font-size: 28px;
  margin: 0;
}

.login-title h5 {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 10px;
}

.login-form {
  margin: 0 auto;
  width: 80%;
  max-width: 100%;
  padding: 20px;
  border-radius: 5px;
}

.input-title {
  margin: 5px 0;
  color: black;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
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

.forgot-password {
  font-size: 12px;
  display: flex;
  justify-content: end;
  color: #7acdd6;
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
.or-sign-section {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.or-sign-in-with {
  color: grey;
  font-size: 12px;
  font-weight: 400;
}

.line {
  width: 30%;
  height: 0;
  border: 1px solid lightgray;
}

.sign-in-social {
  margin: 30px 0;
  display: flex;
  width: 70%;
  justify-content: space-around;
}

.apple,
.google,
.facebook {
  border-radius: 50%;
  padding: 13px 16px;
}

.apple {
  border: solid black 1.5px;
}
.google {
  border: solid red 1.5px;
}
.facebook {
  border: solid blue 1.5px;
}

.logo-icon {
  width: 32px;
}

.sign-up-title {
  color: black;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
}

.sign-up {
  color: #7acdd6;
}
</style>
