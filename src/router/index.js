import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ArtisanDashboard from '../views/ArtisanDashboard.vue'
import BuyerDashboard from '../views/BuyerDashboard.vue'
import PostFlyer from '../views/PostFlyer.vue'
import Gallery from '../views/Gallery.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/artisan/dashboard', component: ArtisanDashboard },
{ path: '/buyer/dashboard', component: BuyerDashboard },
{ path: '/post-flyer', component: PostFlyer },
{ path: '/gallery', component: Gallery }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router