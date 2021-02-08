import httpClient from '@/common/httpClient'

// initial state
const state = () => ({
   products: [],
   isLoading: true
})

// getters
const getters = {
    products(state) {
        return state.products;
      },
    isLoading(state) {
        return state.isLoading;
      }
}

// actions
const actions = {
    fetchProducts( {commit} ) {
        commit(FETCH_START)
        httpClient.get("/proizvodi")
        .then((response) => {
            console.log(response.data);
            // zavrsiti
          })
        .catch(err => {
           console.log(err)
        })
    }
}

// mutations
const mutations = {
    FETCH_START(state){
      state.isLoading = true
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}