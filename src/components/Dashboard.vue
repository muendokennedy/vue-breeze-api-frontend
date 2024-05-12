<script setup>
import axios from 'axios'
import {ref, onMounted } from 'vue'

import { useAuthStore } from '../stores/auth.js'

const user = ref()

const authStore = useAuthStore()


onMounted( async () => {
  // Get the user
  await authStore.getUser()
})


</script>


<template>
  <div class="container">
    <div v-if="authStore.user">
      <h1>{{ authStore.user?.name }}</h1>
      <p>{{ authStore.user?.email }}</p>
    </div>
    <div v-else>
      <h2>Loading Please wait...</h2>
    </div>
  </div>
</template>

<style scoped>
.container{
  margin-top: 100px;
}
</style>
