import httpClient from '@/common/httpClient'
import Swal from 'sweetalert2'
// initial state
const state = () => ({
    user: {},
    isLoading: false,
 })
 
 // getters
 const getters = {
    user(state) {
        return state.user;
      },
    isLoading(state) {
        return state.isLoading;
      }
 }
 
 // actions
 const actions = {
    fetchUserDetails( {commit}) {
        const url = '/profil'
        httpClient.get(url)
            .then((response) => {
                console.log(response.data)
                commit('SET_USER_DETAILS', response.data.user)
            })
            .catch(err => {
                console.log(err)
             })
    },
    updateUserDetails({commit, dispatch}, user){
        return new Promise((resolve, reject) => {
            commit('UPDATE_REQUEST')
            console.log('Šalje se ' + JSON.stringify(user))
            httpClient.put("/profil", user)
            .then(response => {
                console.log(response)
                // check response status
                if(response.status === 200) { // OK
                    // assign response data
                    const msg = response.data.message
                    console.log(msg)
                    // call mutation
                    commit('UPDATE_SUCCESS')
                    // call action to fetch updated user details
                    dispatch('fetchUserDetails')
                    resolve(response)
                }
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }
 }
 
 // mutations
 const mutations = {
    SET_USER_DETAILS (state, payload) {
        state.user = payload
      },
    UPDATE_REQUEST(state) {
        state.isLoading = true
    },
    UPDATE_SUCCESS(state) {
        state.isLoading = false
        /*********************************/
        /* successful registration alert */
        Swal.fire({
            width: 400,
            position: 'top-end',
            icon: 'info',
            title: 'Uspješno ste promijenili Vaše podatke.',
            showConfirmButton: false,
            timer: 1500
        })
        /*********************************/
    }
 }
 
 export default {
     namespaced: true,
     state,
     getters,
     actions,
     mutations
 }