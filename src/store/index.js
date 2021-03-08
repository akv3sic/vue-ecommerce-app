import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import products from './modules/products'
import product from './modules/product'
import cart from './modules/cart'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
      auth, products, product, cart
  }
});
