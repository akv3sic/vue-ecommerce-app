import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import products from './modules/products'
import product from './modules/product'
import cart from './modules/cart'
import checkout from './modules/checkout'
import admin from './modules/admin'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
      auth, products, product, cart, checkout, admin
  }
});
