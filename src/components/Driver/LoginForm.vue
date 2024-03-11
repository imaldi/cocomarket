<template>
    <div class="container">
        <div class="mx-8">
          <div class="flex justify-center">
              <iconnative
                icon="logo-driver"
                color="#000"
                width="180"
                height="180"
              />
            </div>
            
            <div class="mb-4">
              <div class="text-black font-bold text-xl">Welcome to Cocomaret Driver!</div>
              <div class="text-gray text-sm">sign in to make deliveries</div>
            </div>
        
            <Form  autocomplete="off"  class="login-form">
              <div class="text-black font-semibold text-sm">Email</div>
              <Field v-model="username" name="Username" type="text" class="input-field" placeholder="Email" rules="required" />
              <p class="text-danger text-left text-sm mt-0">
              </p>
              <div class="text-black font-semibold text-sm">Password</div>
              <Field
                type="password"
                name="password"
                v-model="password"
                placeholder="Password"
                class="input-field"
                rules="required|minLength:8|maxLength:12"
              />
              <p class="text-danger text-left text-sm mt-0">
              </p>
              
              <a href="#/forgotpassword" class="forgot-password">Forgot Password?</a>
              <button type="submit" class="submit-button">Sign In</button>
            </Form>
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
    margin-top: 10vh;
    // height: 100vh;
  }
  
  .login-form {
    margin: 0 auto;
    border-radius: 5px;
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
  

  </style>
  