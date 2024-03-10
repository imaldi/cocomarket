<template>
  <div class="container text-center">
    <div class="login-title">
      <h1>Sign up to be a <div class="text-[#7ACDD6]">Storling</div></h1>
      <h5>Fill your store information below </h5>
    </div>

    <Form
      autocomplete="off"
      class="login-form"
    >
      <p class="input-title">Email</p>
      <Field
        name="Username"
        type="text"
        class="input-field"
        placeholder="Email"
        rules="required"
      />
      <p class="text-danger text-left text-sm mt-0">
      </p>
      <p class="input-title">Password</p>
      <Field
        type="password"
        name="password"
        placeholder="Password"
        class="input-field"
        rules="required|minLength:8|maxLength:12"
      />
      <p class="text-danger text-left text-sm mt-0">
      </p>
      <div class="term-checkbox">
        <input name="agree" type="checkbox" /><label class="term-label"
          >Agree with <a href="#" class="term-condition">Term & Condition</a></label
        >
      </div>
      <button type="submit" class="submit-button">Sign Up</button>
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

    <!-- <p class="sign-up-title">
      Don't Have an account? <a href="#/register" class="sign-up">Sign Up</a>
    </p> -->
  </div>
</template>
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

.term-checkbox {
  display: flex;
  flex-direction: row;
  justify-content: start;
}

.term-label {
  align-self: start;
  color: black;
  font-size: 12px;
}

.term-condition {
  color: #7acdd6;
}

.input-field {
  display: flex;
  color: black;
  width: 94%;
  height: 14px;
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
