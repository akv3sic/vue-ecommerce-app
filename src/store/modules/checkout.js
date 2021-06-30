import httpClient from '@/common/httpClient'
import Swal from 'sweetalert2'

// initial state
const state = () => ({
    isLoading: false,
    status: ''
 })
 
 // getters
 const getters = {
    isLoading(state) {
        return state.isLoading;
      }
 }
 
 // actions
 const actions = {
    callCheckout({commit}, payload) {
        return new Promise((resolve, reject) => {
            commit('CHECKOUT_START')
            httpClient.post("/kosarica", payload)
            .then(response => {
                // Success :)
                // check response status
                if(response.status === 200) { // OK
                    // console.log('Kupovina odgovor: ' + JSON.stringify(response))
                    
                    commit('CHECKOUT_END')
                    commit('CHECKOUT_SUCCESS_ALERT')
                    resolve(response)
                }
            })
            .catch((error) => {
                // Error :\
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
                reject(error)
            });
        })
    }
 }
 
 // mutations
 const mutations = {
    CHECKOUT_START(state) {
        state.isLoading = true
    },
    CHECKOUT_END(state) {
        state.isLoading = false
    },
     /*** successful checkout alert ***/
     CHECKOUT_SUCCESS_ALERT(){
        Swal.fire({
            title: 'Hvala!',
            text: 'Vaša kupovina je uspješna.',
            icon: 'success',
            confirmButtonText: 'Nastavak'
          })
    }
    /*********************************/
 }
 
 export default {
     namespaced: true,
     state,
     getters,
     actions,
     mutations
 }