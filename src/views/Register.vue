<template>
  <div class="max-w-md mx-auto mt-20 p-6 border rounded">
    <h2 class="text-2xl font-bold mb-6">Register</h2>
    <form @submit.prevent="handleRegister">
      <div class="mb-4">
        <label class="block mb-2">Name</label>
        <input v-model="name" class="w-full p-2 border rounded" required>
      </div>
      <div class="mb-4">
        <label class="block mb-2">Email</label>
        <input v-model="email" type="email" class="w-full p-2 border rounded" required>
      </div>
      <div class="mb-6">
        <label class="block mb-2">Password</label>
        <input v-model="password" type="password" class="w-full p-2 border rounded" required>
      </div>
      <div class="mb-4">
  <label class="block mb-2">I am a:</label>
  <select v-model="role" class="w-full p-2 border rounded">
    <option value="buyer">Buyer</option>
    <option value="artisan">Artisan</option>
  </select>
</div>
      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded">Register</button>
    </form>
  </div>
</template>

<script>
import authStore from '../stores/authStore'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      role: 'buyer'  // Default role
    }
  },
  methods: {
    handleRegister() {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.role
      }

       const result = authStore.register(userData)
      
      if (result.success) {
        alert('Registration successful! Please login.')
        window.location.href = '/login'
      } else {
        alert(result.message)
      }
    }
  }
}
</script>