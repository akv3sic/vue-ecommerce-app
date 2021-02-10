import httpClient from '@/common/httpClient'

// initial state
const state = () => ({
   products: [],
   brands: [],
   categories: [],
   isLoading: true
})

// getters
const getters = {
    products(state) {
        return state.products;
      },
    brands(state) {
        return state.brands;
      },
    categories(state) {
        return state.categories;
      },
    isLoading(state) {
        return state.isLoading;
      }
}

// actions
const actions = {
    fetchProducts( {commit}, params) {
        commit('FETCH_START')
        console.log(params)
        if(params)
          console.log("U params ima nesto")
        else
          console.log("Params su prazni")
        httpClient.get("/proizvodi")
        .then((response) => {
            console.log(response.data);
            commit('FETCH_END', response.data)
          })
        .catch(err => {
           console.log(err)
        })
    }
}

// mutations
const mutations = {
    FETCH_START(state) {
      state.isLoading = true
    },
    FETCH_END(state, { proizvodi, brendovi, kategorije }) {
      state.products = proizvodi
      state.brands = brendovi
      state.categories = kategorije
      state.isLoading = false
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}