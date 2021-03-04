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
    fetchProducts( {commit}, {categoryId, brandId}) {
        commit('FETCH_START')
        let url = '/proizvodi' // default

        // check for categoryId and brandId
        if(categoryId != null && brandId != null)
          {
            url = '/proizvodi?kategorijaID=' + categoryId + '&brandID=' + brandId
          }
        else if(categoryId)
          {
            url = '/proizvodi?kategorijaID=' + categoryId
          }
        else if(brandId)
          {
            console.log("CategoryId je prazan.")
            console.log('Selected brand ID: ' + brandId)
            url = '/proizvodi?brandID=' + brandId
          }
         
        httpClient.get(url)
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