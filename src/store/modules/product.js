import httpClient from '@/common/httpClient'
import Swal from 'sweetalert2'

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
    fetchProduct( {commit}, productId) {
        const url = '/proizvodi/' + productId
        console.log('Request to' + url)
        httpClient.get(url)
            .then((response) => {
                console.log(response.data)
                commit('SET_PRODUCT', response.data)
            })
            .catch(err => {
                console.log(err)
             })
        
    },
    publishProduct( {commit}, payload) {
        return new Promise((resolve, reject) => {
            httpClient.post("/proizvodi", payload)
            .then(response => {
                // check response status
                if(response.status === 200) { // OK
                    // assign response data
                    const msg = response.data.message
                    console.log(msg)
                    // call mutation
                    commit('PUBLISH_SUCCESS')
                    resolve(response)
                }
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    },
    deleteProduct( {commit}, productId) {
        return new Promise((resolve, reject) => {
            const url = '/proizvodi/' + productId + '/update'
            const payload = { delete: 1 }
            httpClient.put(url, payload)
            .then(response => {
                // check response status
                if(response.status === 200) { // OK
                    // assign response data
                    const msg = response.data.message
                    console.log(msg)
                    // call mutation
                    commit('DELETE_SUCCESS')
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
    SET_PRODUCT(state, product) {
        state.product = product
    },
    PUBLISH_SUCCESS() {
        /* success alert */
        Swal.fire({
            width: 400,
            position: 'top-end',
            icon: 'success',
            title: 'Proizvod uspješno dodan.',
            showConfirmButton: false,
            timer: 1500
        })
        /*********************************/
    },
    DELETE_SUCCESS() {
        /* success alert */
        Swal.fire({
            width: 400,
            position: 'top-end',
            icon: 'info',
            title: 'Proizvod više nije vidljiv.',
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