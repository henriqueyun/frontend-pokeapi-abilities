import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonDisplay from '../views/PokemonDisplay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pokemon/:name',
    name: 'pokemonDisplay',
    component: PokemonDisplay
  }
]

const router = new VueRouter({
  routes
})

export default router
