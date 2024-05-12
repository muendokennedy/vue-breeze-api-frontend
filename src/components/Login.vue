<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth.js'

const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
})
</script>

<template>
  <div class="container">
    <div class="form-container">
      <form @submit.prevent="authStore.handleLogin(form)">
        <h2>Sign in</h2>
        <div class="input-field">
          <input type="text" placeholder="Email" v-model="form.email" autocomplete="email" :style="{borderColor: authStore.errors.email ? 'red' : 'initial'}">
          <div v-if="authStore.errors.email">
            <span class="error">{{ authStore.errors.email[0] }}</span>
          </div>
        </div>
        <div class="input-field">
          <input type="password" placeholder="Password" v-model="form.password" autocomplete="current-password" :style="{borderColor: authStore.errors.password ? 'red' : 'initial'}">
          <div v-if="authStore.errors.password">
            <span class="error">{{ authStore.errors.password[0] }}</span>
          </div>
        </div>
        <div class="submit-btn">
          <button>Sign in</button>
        </div>
        <router-link class="forgot-pwd" :to="{name: 'forgotpassword'}">Forgot pasword</router-link>
        <div class="sign-up">Not yet a member? <router-link :to="{name: 'register'}">sign up</router-link></div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.container{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-container{
  width: 500px;
  border: 1px solid #3b3bd6;
  border-radius: 10px;
  padding: 20px;
}
.form-container h2{
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #3b3bd6;
}
.input-field{
  margin: 15px 0;
  width: 100%;
}
.input-field input{
  padding: 12px 6px;
  font-size: 18px;
  width: 100%;
  outline: none;
  border: 1px solid #000;
  border-radius: 6px;
}
.submit-btn{
  width: 100%;
  margin-bottom: 12px;
}
.submit-btn button{
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 0;
  text-align: center;
  background: #3b3bd6;
  font-weight: bold;
  color: #fff;
  border-radius: 6px;
  font-size: 18px;
}
.forgot-pwd{
  font-size: 15px;
  text-transform: capitalize;
}
.sign-up{
  font-size: 15px;
  text-transform: capitalize;
}
.error{
  color: red;
  display: block;
  width: 100%;
}
</style>