<template>
  <div class="max-w-2xl mx-auto mt-10 p-6">
    <h1 class="text-3xl font-bold mb-6">Post a New Flyer</h1>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block mb-2">Product Name</label>
        <input v-model="form.name" class="w-full p-2 border rounded" required>
      </div>

      <div>
        <label class="block mb-2">Description</label>
        <textarea v-model="form.description" class="w-full p-2 border rounded" rows="4" required></textarea>
      </div>

      <div>
        <label class="block mb-2">Price (RWF)</label>
        <input v-model="form.price" type="number" class="w-full p-2 border rounded" required>
      </div>

      
      <div>
        <label class="block mb-2">Category</label>
        <select v-model="form.category" class="w-full p-2 border rounded">
          <option value="art">Art</option>
          <option value="furniture">Furniture</option>
          <option value="textiles">Textiles</option>
          <option value="jewelry">Jewelry</option>
        </select>
      </div>

      <div>
        <label class="block mb-2">Image URL</label>
        <input v-model="form.image" class="w-full p-2 border rounded" placeholder="/images/your-image.jpg">
        <p class="text-sm text-gray-500 mt-1">Use: /images/img1.jpeg, /images/img2.jpeg, etc.</p>
      </div>

      <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded">Publish Flyer</button>
    </form>
  </div>
</template>

<script>
import flyerStore from '../stores/flyerStore'
import authStore from '../stores/authStore'

export default {
  data() {
    return {
      form: {
        name: '',
        description: '',
        price: '',
        category: 'jewelry',
        image: '/images/placeholder.jpg'  
      }
    }
  },
  methods: {
    handleSubmit() {
      const user = authStore.getCurrentUser()
      if (!user) {
        alert('Please login first')
        this.$router.push('/login')
        return
      }

      
      const newFlyer = {
        id: Date.now(),
        name: this.form.name,
        description: this.form.description,
        price: Number(this.form.price),
        category: this.form.category,
        image: this.form.image,  
        artisanId: user.id,
        artisanName: user.name,
        views: 0,
        createdAt: new Date().toLocaleDateString()
      }

      
      flyerStore.add(newFlyer)
      
      alert('✅ Flyer posted successfully!')
      this.$router.push('/artisan/dashboard')
    }
  }
}
</script>