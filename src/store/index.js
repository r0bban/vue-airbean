import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    menu: [],
    totalOrderQuantity: 0,
    totalOrderAmount: 0,
  },
  mutations: {
    addProductToCart(state, orderArticle) {
      const currIndex = state.cart.findIndex((product) => product.id == orderArticle.id)
      if (currIndex == -1) {
        orderArticle.quantity = 1;
        state.cart.push(orderArticle)
      } else {
        state.cart[currIndex].quantity += 1;
      }
      state.totalOrderQuantity += 1;
      state.totalOrderAmount += orderArticle.price;
    },
    setMenuList(state, newMenuList) {
      state.menu = newMenuList
    },
    reduceQuantOrderProd(state, orderArticle) {
      if (orderArticle.quantity <= 1) {
        orderArticle.quantity = 0;
        state.cart = state.cart.filter(article => article.id != orderArticle.id)
      } else {orderArticle.quantity -= 1;}
      state.totalOrderQuantity -= 1;
      state.totalOrderAmount -= orderArticle.price;
    },
    increaseQuantOrderProd(state, orderArticle){
      orderArticle.quantity += 1;
      state.totalOrderQuantity += 1;
      state.totalOrderAmount += orderArticle.price;
    }
  },
  actions: {
    async loadMenu(context) {
      if (context.state.menu.length <= 0) {
        const updatedMenu = await API.fetchMenu()
        context.commit('setMenuList', updatedMenu)
      }
    }
  },
  modules: {
  },
  getters: {}
})
