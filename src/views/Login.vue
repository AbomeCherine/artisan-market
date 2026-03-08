<template>
  <div class="max-w-md mx-auto mt-20 p-6 border rounded">
    <h2 class="text-2xl font-bold mb-6">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-4">
        <label class="block mb-2">Email</label>
        <input v-model="email" type="email" class="w-full p-2 border rounded" required>
      </div>
      <div class="mb-6">
        <label class="block mb-2">Password</label>
        <input v-model="password" type="password" class="w-full p-2 border rounded" required>
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      alert('Login clicked')
    }
  }
}
</script>