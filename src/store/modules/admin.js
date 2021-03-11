// import httpClient from '@/common/httpClient'

// initial state
const state = () => ({
    drawer: null,
 })
 
 // getters
 const getters = {
    drawer(state) {
        return state.drawer
    },
 }
 
 // actions
 const actions = {
    setDrawer( {commit}, payload) {
        commit('SET_DRAWER', payload)
    },
 }
 
 // mutations
 const mutations = {
    SET_DRAWER (state, payload) {
        state.drawer = payload
      },
 }
 
 export default {
     namespaced: true,
     state,
     getters,
     actions,
     mutations
 }