import httpClient from '@/common/httpClient'

// initial state
const state = () => ({
    reportItems: [
        { value: 0, title: "Broj narudžbi", color: "cyan" },
        { value: 0, title: "Broj registriranih korisnika", color: "primary" },
        { value: 0, title: "Broj proizvoda", color: "teal" },
    ],
   isLoading: true
 })
 
 // getters
 const getters = {
    reportItems(state) {
        return state.reportItems
      },
    isLoading(state) {
        return state.isLoading;
      }
 }
 
 // actions
 const actions = {
    fetchReport( {commit}) {
        commit('FETCH_START')
        const url = '/izvjestaj'
        httpClient.get(url)
        .then((response) => {
            // console.log(response.data);
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
      FETCH_END(state, payload) {
        state.reportItems[0].value = payload.broj_narudzbi
        state.reportItems[1].value = payload.broj_korisnika
        state.reportItems[2].value = payload.broj_proizvoda
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