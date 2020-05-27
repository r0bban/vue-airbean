import Vue from 'vue'
import Vuex from 'vuex'
import CoffeMenu from '@/assets/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: CoffeMenu.menu
  },
  mutations: {
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
