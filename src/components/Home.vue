<script setup>
import axios from 'axios'
import {ref, onMounted } from 'vue'

import { useAuthStore } from '../stores/auth.js'

const user = ref()

const authStore = useAuthStore()



</script>


<template>
  <div class="container">
    <div v-if="authStore.user">
      <h1>{{ authStore.user.name }}</h1>
      <p>{{ authStore.user.email }}</p>
    </div>
    <div v-else>
        <h2>Please go and login</h2>
    </div>
  </div>
</template>

<style scoped>
.container{
  margin-top: 100px;
  padding: 50px 3%;
}
</style>
