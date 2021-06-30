import httpClient from '@/common/httpClient'

// initial state
const state = () => ({
    orders: [],
    isLoading: true
 })
 
 // getters
 const getters = {
    orders(state) {
        return state.orders;
      },
    isLoading(state) {
        return state.isLoading;
      }
 }
 
 // actions
 const actions = {
    fetchOrders( {commit}) {
        commit('FETCH_START')
        const url = '/povijest'
        httpClient.get(url)
        .then((response) => {
            // console.log(response.data);
            commit('FETCH_END', response.data.povijestKupovine)
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
      FETCH_END(state, orders) {
        state.orders = orders
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