<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 max-w-md w-full">
      <h2 class="text-2xl font-bold mb-4">Contact {{ artisan?.name }}</h2>
      
      <form @submit.prevent="sendMessage">
        <div class="mb-4">
          <label class="block mb-2">Your Name</label>
          <input v-model="form.buyerName" class="w-full p-2 border rounded" required>
        </div>
        
        <div class="mb-4">
          <label class="block mb-2">Your Email</label>
          <input v-model="form.buyerEmail" type="email" class="w-full p-2 border rounded" required>
        </div>
        
        <div class="mb-4">
          <label class="block mb-2">Message</label>
          <textarea v-model="form.content" class="w-full p-2 border rounded" rows="4" required></textarea>
        </div>
        
        <div class="flex justify-end gap-2">
          <button type="button" @click="$emit('close')" class="px-4 py-2 border rounded">
            Cancel
          </button>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import messageStore from '../../stores/messageStore'
import authStore from '../../stores/authStore'

export default {
  props: ['artisan'],
  data() {
    return {
      form: {
        buyerName: '',
        buyerEmail: '',
        content: ''
      }
    }
  },
  mounted() {
    const user = authStore.getCurrentUser()
    if (user) {
      this.form.buyerName = user.name || ''
      this.form.buyerEmail = user.email || ''
    }
  },
  methods: {
    sendMessage() {
      const user = authStore.getCurrentUser()
      
      const messageData = {
        ...this.form,
        artisanId: this.artisan.id,
        artisanName: this.artisan.name,
        buyerId: user?.id || 'guest',
        productName: this.artisan.productName || 'General inquiry'
      }
      
      messageStore.send(messageData)
      alert('✅ Message sent! The artisan will contact you soon.')
      this.$emit('close')
    }
  }
}
</script>