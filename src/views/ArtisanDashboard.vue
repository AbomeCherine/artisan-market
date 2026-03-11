<template>
  <div class="p-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-blue-600">Artisan Dashboard</h1>
      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
    
    <p class="mb-6">Welcome, {{ user?.name }}!</p>

    
    <router-link to="/post-flyer" class="bg-blue-600 text-white px-4 py-2 rounded">
      + Post New Flyer
    </router-link>

    <h2 class="text-2xl font-bold mb-4">My Flyers</h2>
    
    <div v-if="myFlyers.length === 0" class="text-gray-500">
      You haven't posted any flyers yet.
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="flyer in myFlyers" :key="flyer.id" class="border rounded-lg overflow-hidden shadow">
        <img :src="flyer.image || 'https://picsum.photos/400/400'" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold">{{ flyer.name }}</h3>
          <p class="text-gray-600 text-sm">{{ flyer.description }}</p>
          <p class="text-lg font-bold mt-2">{{ flyer.price }} rwf</p>
          <p class="text-sm text-gray-500">Category: {{ flyer.category }}</p>
          <p class="text-sm text-gray-500">Views: {{ flyer.views }}</p>
          <button 
            @click="deleteFlyer(flyer.id)" 
            class="mt-3 text-red-500 text-sm hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authStore from '../stores/authStore'
import flyerStore from '../stores/flyerStore'

export default {
  data() {
    return {
      user: authStore.getCurrentUser(),
      myFlyers: []
    }
  },
  mounted() {
    this.loadFlyers()
  },
  methods: {
   loadFlyers() {
  if (this.user) {
    this.myFlyers = flyerStore.getByArtisan(this.user.id)
    console.log('Flyers loaded:', this.myFlyers)
  }
},
   deleteFlyer(id) {
  console.log('Tentative de suppression ID:', id) 
  if (confirm('Are you sure?')) {
    flyerStore.delete(id)
    this.loadFlyers()  
    console.log('Après suppression, flyers:', flyerStore.getByArtisan(this.user.id))
  }
},
    logout() {
      authStore.logout()
      window.location.href = '/'
    }
  }
}
</script>