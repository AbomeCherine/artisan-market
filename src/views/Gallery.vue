<template>
  <div class="p-8">
    
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-green-600">Buyer Gallery</h1>
      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>

    <p class="mb-6">Welcome, {{ user?.name }}! Browse products from all artisans.</p>

    
    <div class="mb-8 flex flex-col md:flex-row gap-4">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search products..." 
        class="flex-1 p-2 border rounded"
      >
      
      <select v-model="selectedCategory" class="p-2 border rounded md:w-48">
        <option value="">All Categories</option>
        <option value="art">Art</option>
        <option value="furniture">Furniture</option>
        <option value="textiles">Textiles</option>
        <option value="jewelry">Jewelry</option>
      </select>
    </div>

    
    <div v-if="filteredFlyers.length === 0" class="text-center text-gray-500 py-10">
      No flyers found.
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="flyer in filteredFlyers" :key="flyer.id" class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img :src="flyer.image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold">{{ flyer.name }}</h3>
          <p class="text-gray-600 text-sm mb-2">{{ flyer.description.substring(0, 100) }}...</p>
          
          <div class="flex justify-between items-center mb-2">
            <span class="text-lg font-bold">{{ flyer.price }} RWF</span>
            <span class="text-xs bg-gray-200 px-2 py-1 rounded">{{ flyer.category }}</span>
          </div>
          
          <p class="text-sm text-gray-500 mb-3">Artisan: {{ flyer.artisanName }}</p>
          
          <button 
            @click="openContactModal(flyer)"
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Contact Artisan
          </button>
        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <ContactForm 
      v-if="showContactModal"
      :artisan="selectedArtisan"
      @close="showContactModal = false"
    />
  </div>
</template>

<script>
import authStore from '../stores/authStore'
import flyerStore from '../stores/flyerStore'
import ContactForm from '../components/messaging/ContactForm.vue'

export default {
  components: { ContactForm },
  data() {
    return {
      user: authStore.getCurrentUser(),
      flyers: [],
      searchQuery: '',
      selectedCategory: '',
      showContactModal: false,
      selectedArtisan: null
    }
  },
  computed: {
    filteredFlyers() {
      return this.flyers.filter(flyer => {
        const matchesSearch = flyer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             flyer.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesCategory = !this.selectedCategory || flyer.category === this.selectedCategory
        return matchesSearch && matchesCategory
      })
    }
  },
  mounted() {
    this.loadFlyers()
  },
  methods: {
    loadFlyers() {
      this.flyers = flyerStore.getAll()
    },
    openContactModal(flyer) {
      this.selectedArtisan = {
        id: flyer.artisanId,
        name: flyer.artisanName,
        productName: flyer.name
      }
      this.showContactModal = true
    },
    logout() {
      authStore.logout()
      this.$router.push('/')
    }
  }
}
</script>