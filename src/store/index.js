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
    confirmedOrder: "",
    // requestedOrder: {}, ToDO,as backup if POST request fail
    currentUser: ""
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
      } else { orderArticle.quantity -= 1; }
      state.totalOrderQuantity -= 1;
      state.totalOrderAmount -= orderArticle.price;
    },
    increaseQuantOrderProd(state, orderArticle) {
      orderArticle.quantity += 1;
      state.totalOrderQuantity += 1;
      state.totalOrderAmount += orderArticle.price;
    },
    setConfirmedOrder(state, newConfirmedOrder) {
      state.confirmedOrder = newConfirmedOrder
    },
    sessionStoreCurrentOrder(state) {
      sessionStorage.setItem("currentOrder", JSON.stringify(state.confirmedOrder));
    },
    setCurrentUser(state, newCurrentuser) {
      state.currentUser = newCurrentuser
    },
    localStoreUserId(state, newUserProfile) {
      localStorage.setItem("UserId", JSON.stringify(newUserProfile.id));
    },
  },
  actions: {
    async loadMenu(context) {
      if (context.state.menu.length <= 0) {
        const updatedMenu = await API.fetchMenu()
        context.commit('setMenuList', updatedMenu)
      }
    },
    clearCart(context) {
      context.state.cart = [];
      context.state.totalOrderAmount = 0;
      context.state.totalOrderQuantity = 0;

    },
    async requestOrder(context) {
      if (context.state.cart.length > 0) {

        let orderRequestBody = {
          orderedProducts: [],
          isUserOrder: false,
          userId: ""
        };

        if(context.state.currentUser){
          orderRequestBody.isUserOrder = true;
        }
        if(context.state.currentUser){
          orderRequestBody.userId = context.state.currentUser.id;
        }

        context.state.cart.forEach(cartArticle => {
          let orderItem = {}
          orderItem.productId = cartArticle.id;
          orderItem.quantity = cartArticle.quantity;
          orderRequestBody.orderedProducts.push(orderItem);
        });

        const orderCopy = await API.postOrderRequest(orderRequestBody);
        context.commit("setConfirmedOrder", orderCopy);
        context.commit("sessionStoreCurrentOrder");
        context.dispatch("clearCart");
        console.log(orderCopy);
      } else { console.log("Attempt to place order, but cart is empty") }
    },
    async registerNewUser(context, newUser) {
      const newUserProfile = await API.postNewUserRequest(newUser);
      context.commit("setCurrentUser", newUserProfile)
      context.commit("localStoreUserId", newUserProfile)
      console.log(newUserProfile);
    },
    async setUserProfileById(context, userId) {
      const currentUserProfile = await API.fetchUserProfileById(userId);
      context.commit("setCurrentUser", currentUserProfile);
    },
    async attachUserToConfirmedOrder(context) {
      const currentUser = context.state.currentUser;
      const confirmedOrder = context.state.confirmedOrder;
      const updatedOrder = await API.putNewUserToOrderRequest(currentUser.id, confirmedOrder.id);
      context.commit("setConfirmedOrder", updatedOrder);
    }
  },
  modules: {
  },
  getters: {}
})
