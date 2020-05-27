import Vue from 'vue'
import Vuex from 'vuex'
import CoffeMenu from '@/assets/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    menu: CoffeMenu.menu,
  },
  mutations: {
    addProductToCart(state, payload) {
      state.cart.push(payload)
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getAllProducts(state){
      return state.menu;
    }
  }
})
