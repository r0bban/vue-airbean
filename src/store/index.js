import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    menu: [],
  },
  mutations: {
    addProductToCart(state, payload) {
      state.cart.push(payload)
    },
    setMenuList(state, newMenuList) {
      state.menu = newMenuList
    }
  },
  actions: {
    async loadMenu(context) {
      if(context.state.menu.length<=0){
        const updatedMenu = await API.fetchMenu()
        context.commit('setMenuList', updatedMenu)
      }
    }
  },
  modules: {
  },
  getters: {}
})
