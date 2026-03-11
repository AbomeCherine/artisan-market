const messageStore = {

  getAll() {
    return JSON.parse(localStorage.getItem('messages')) || []
  },

  
  getForArtisan(artisanId) {
    const messages = this.getAll()
    return messages.filter(m => m.artisanId === artisanId)
  },

  
  getFromBuyer(buyerId) {
    const messages = this.getAll()
    return messages.filter(m => m.buyerId === buyerId)
  },


  send(messageData) {
    const messages = this.getAll()
    const newMessage = {
      id: Date.now(),
      ...messageData,
      createdAt: new Date().toLocaleString(),
      read: false
    }
    messages.push(newMessage)
    localStorage.setItem('messages', JSON.stringify(messages))
    return newMessage
  },


  markAsRead(messageId) {
    const messages = this.getAll()
    const message = messages.find(m => m.id === messageId)
    if (message) {
      message.read = true
      localStorage.setItem('messages', JSON.stringify(messages))
    }
  },

  
  delete(messageId) {
    const messages = this.getAll()
    const filtered = messages.filter(m => m.id !== messageId)
    localStorage.setItem('messages', JSON.stringify(filtered))
  }
}

export default messageStore