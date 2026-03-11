const authStore = {
  
  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || []
  },

  
  saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users))
  },

  
  register(userData) {
    const users = this.getUsers()
    
    
    const exists = users.find(u => u.email === userData.email)
    if (exists) {
      return { success: false, message: 'Email already registered' }
    }

    
    const newUser = {
      id: Date.now(),
      ...userData,
      role: userData.role || 'buyer'
    }

    users.push(newUser)
    this.saveUsers(users)
    return { success: true, message: 'Registration successful' }
  },


  login(email, password) {
    const users = this.getUsers()
    const user = users.find(u => u.email === email && u.password === password)
    
    if (user) {
      
      const { password, ...userWithoutPassword } = user
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
      return { success: true, user: userWithoutPassword }
    }
    
    return { success: false, message: 'Invalid email or password' }
  },

  
  logout() {
    localStorage.removeItem('currentUser')
  },

  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'))
  },

  
  isLoggedIn() {
    return !!this.getCurrentUser()
  }
}

export default authStore
