<template>
  <div class="container">
    <div class="mx-8">
      <div class="">
        <div class="text-black font-bold text-xl">Welcome to Cocomaret Driver!</div>
        <div class="text-gray text-sm">sign in to make deliveries</div>
      </div>

      <Form autocomplete="off" class="login-form">
        <p class="text-black font-semibold text-sm">Email</p>
        <input name="Username" type="text" class="input-field" placeholder="Email" rules="required" />
        <p class="text-danger text-left text-sm mt-0"></p>
        <p class="text-black font-semibold text-sm">Password</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="input-field"
          rules="required|minLength:8|maxLength:12"
        />
        <p class="text-danger text-left text-sm mt-0"></p>
        <a href="#/forgotpassword" class="forgot-password">Forgot Password?</a>
        <button type="submit" class="submit-button">Sign In</button>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  background-color: white;
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 30%;
  // height: 100vh;
}

//   .login-title {
//     display: flex;
//     flex-direction: column;
//     justify-content: start;
//     color: black;
//   }

//   .login-title h1 {
//     font-size: 28px;
//     margin: 0;
//   }

//   .login-title h5 {
//     font-size: 12px;
//     font-weight: 600;
//     letter-spacing: -0.5px;
//     margin: 10px;
//   }

.login-form {
  margin: 0 auto;
  border-radius: 5px;
}

//   .input-title {
//     margin: 5px 0;
//     color: black;
//     text-align: left;
//     font-size: 14px;
//     font-weight: 500;
//   }

.input-field {
  color: black;
  width: 94%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border: 1.5px black solid;
  border-radius: 5px;
}

//   .forgot-password {
//     font-size: 12px;
//     display: flex;
//     justify-content: end;
//     color: #7acdd6;
//   }

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
//   .or-sign-section {
//     width: 80%;
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//   }

//   .or-sign-in-with {
//     color: grey;
//     font-size: 12px;
//     font-weight: 400;
//   }

//   .line {
//     width: 30%;
//     height: 0;
//     border: 1px solid lightgray;
//   }

//   .sign-in-social {
//     margin: 30px 0;
//     display: flex;
//     width: 70%;
//     justify-content: space-around;
//   }

//   .apple,
//   .google,
//   .facebook {
//     border-radius: 50%;
//     padding: 13px 16px;
//   }

//   .apple {
//     border: solid black 1.5px;
//   }
//   .google {
//     border: solid red 1.5px;
//   }
//   .facebook {
//     border: solid blue 1.5px;
//   }

//   .logo-icon {
//     width: 32px;
//   }

//   .sign-up-title {
//     color: black;
//     font-size: 14px;
//     font-weight: 500;
//     letter-spacing: -0.5px;
//   }

//   .sign-up {
//     color: #7acdd6;
//   }
</style>
