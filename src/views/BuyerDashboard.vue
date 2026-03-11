<template>
  <div class="p-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-green-600">Buyer Dashboard</h1>
      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>

    <p class="mb-6">Welcome, {{ user?.name }}!</p>

    <!-- Link to Gallery -->
    <div class="text-center mt-10">
      <router-link 
        to="/gallery" 
        class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 transition"
      >
        🛍️ Browse Products Gallery
      </router-link>
      
      <p class="mt-4 text-gray-600">
        Discover unique handmade products from local artisans
      </p>
    </div>
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
      this.$router.push('/')
    }
  }
}
</script>