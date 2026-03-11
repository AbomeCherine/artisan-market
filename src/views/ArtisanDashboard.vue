<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-blue-600">Artisan Dashboard</h1>
    <p class="mt-4">Welcome, {{ user?.name }}!</p>
    <button @click="logout" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
  </div>
</template>

<script>
import authStore from '../stores/authStore'

export default {
  data() {
    return {
      user: authStore.getCurrentUser()
    }
  },
  methods: {
    logout() {
      authStore.logout()
      window.location.href = '/'
    }
  }
}
</script>