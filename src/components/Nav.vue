<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

</script>

<template>
  <header>
    <div class="brand">Kenfrare</div>
    <div class="nav-links">
      <RouterLink :to="{name: 'home'}" class="link">Home</RouterLink>
      <template v-if="!authStore.user">          
        <RouterLink :to="{name: 'register'}" class="link">Register</RouterLink>
        <RouterLink :to="{name: 'login'}" class="link">Login</RouterLink>
      </template>
      <template v-else>
        <span @click="authStore.handleLogout" class="link">Logout</span>
      </template>
    </div>
  </header>
</template>

<style scoped>
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 4%;
  background: #3b3bd6;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
.brand{
  font-weight: bold;
  color: #fff;
}
.nav-links{
  display: flex;
  gap: 10px;
}
.nav-links .link{
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
</style>