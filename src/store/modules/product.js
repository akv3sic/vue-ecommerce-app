import httpClient from '@/common/httpClient'

// initial state
const state = () => ({
    product: {}
 })
 
 // getters
 const getters = {
    product(state) {
        return state.product
    }
 }
 
 // actions
 const actions = {
    fetchProduct( {commit}, productSlug) {
        const url = '/proizvod/' + productSlug
        console.log(url)
        httpClient.get(url)
            .then((response) => {
                console.log(response.data)
                commit('SET_PRODUCT', response.data)
            })
            .catch(err => {
                console.log(err)
             })
        
    }
 }
 
 // mutations
 const mutations = {
    SET_PRODUCT(state, product) {
        state.product = product
    }
 }
 
 export default {
     namespaced: true,
     state,
     getters,
     actions,
     mutations
 }