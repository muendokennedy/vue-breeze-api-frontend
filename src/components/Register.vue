<script setup>
import axios from "axios";
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const router = useRouter()

const getToken = async () => {
  await axios.get('/sanctum/csrf-cookie')
}

const handleRegister = async () => {
  await  getToken()
  await axios.post('/register', {
    name: form.value.name,
    email: form.value.email,
    password: form.value.password,
    password_confirmation: form.value.password_confirmation
  })

  router.push('/')
} 
</script>

<template>
  <div class="container">
    <div class="form-container">
      <form @submit.prevent="handleRegister">
        <h2>Create an account</h2>
        <div class="input-field">
          <input type="text" placeholder="Name" v-model="form.name">
        </div>
        <div class="input-field">
          <input type="text" placeholder="Email" v-model="form.email">
        </div>
        <div class="input-field">
          <input type="password" placeholder="Password" v-model="form.password">
        </div>
        <div class="input-field">
          <input type="password" placeholder="Confirm Password" v-model="form.password_confirmation">
        </div>
        <div class="submit-btn">
          <button>Sign up</button>
        </div>
        <div class="sign-up">Already a member? <router-link :to="{name: 'login'}">sign in</router-link></div>
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
</style>