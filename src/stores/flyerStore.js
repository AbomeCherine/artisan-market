const flyerStore = {
  getAll() {
    return JSON.parse(localStorage.getItem('flyers')) || []
  },

  getByArtisan(artisanId) {
    return this.getAll().filter(f => f.artisanId === artisanId)
  },

 add(flyerData) {
  const flyers = this.getAll()
  flyers.push(flyerData)  
  localStorage.setItem('flyers', JSON.stringify(flyers))
},


  delete(flyerId) {
    const flyers = this.getAll()
    const filtered = flyers.filter(f => f.id !== flyerId)
    localStorage.setItem('flyers', JSON.stringify(filtered))
    return filtered
  }
}

export default flyerStore