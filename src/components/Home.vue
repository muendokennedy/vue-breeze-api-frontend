<script setup>
import axios from 'axios'
import {ref, onMounted } from 'vue'

const user = ref()

onMounted( async () => {
  const data = await axios.get('/api/user')

  user.value = data.data

  console.log(data)
})

</script>


<template>
  <div class="container">

  </div>
  <h1>{{ user?.name }}</h1>
  <p>{{ user?.email }}</p>
</template>

<style scoped>
.container{
  margin-top: 100px;
}
</style>
