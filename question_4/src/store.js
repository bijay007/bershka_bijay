import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [],
    quantity: 0,
  },
  mutations: {
    addToCart(_, payload) {
      // eslint-disable-next-line no-plusplus
      this.state.quantity++;
      this.state.cartItems.push({ payload });
    },
    clearCart() {
      this.state.quantity = 0;
    },
  },
  actions: {
    ADD_CART({ commit }, payload) {
      commit('addToCart', payload);
    },
    CLEAR_CART({ commit }) {
      commit('clearCart');
    },
  },
  getters: {
    getItems: state => state.cartItems,
  },
});
