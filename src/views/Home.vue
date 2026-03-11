<template>
  <div class="p-8 text-center">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">Artisan Market</h1>
    <p class="text-gray-600 mb-8">Connect with local artisans</p>
    
    <div class="space-x-4">
      <a href="/login" class="bg-blue-600 text-white px-6 py-2 rounded-lg">Login</a>
      <a href="/register" class="bg-gray-600 text-white px-6 py-2 rounded-lg">Register</a>
    </div>
  </div>

  <div class="mt-8">
  <router-link to="/gallery" class="text-blue-600 underline">
    Browse Gallery (for buyers)
  </router-link>
</div>
</template>