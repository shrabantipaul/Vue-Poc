import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Restaurant from '../views/restaurants.vue'
import Cart from '../views/cart.vue'
import ItemDetails from '../views/item/_id.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/:id',
    name: 'ItemDetails',
    component: ItemDetails
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurant
  },
  {
    path: '/cart',
    name: 'Cart',
    component : Cart
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
