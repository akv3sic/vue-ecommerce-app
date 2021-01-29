import httpClient from '@/common/httpClient'

// initial state
const state = () => ({
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
})

// getters
const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
}

// actions
const actions = {
    logIn({commit}, user){
        return new Promise((resolve, reject) => {
            commit('auth_request')
            httpClient.post("/prijava", user)
            .then(response => {
                console.log(response)
                // check response status
                if(response.status === 200) { // OK
                // assign response data
                    const token = response.data.access_token
                    const user = response.data.user
                    // save token to local storage
                    localStorage.setItem('token', token)
                    // set header
                    httpClient.defaults.headers.common['Authorization'] = token
                    // call mutation
                    commit('auth_success', token, user)
                    resolve(response)
                }
            })
            .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
            })
        })
    },
    register({commit}, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            httpClient.post("/registracija", user)
            .then(response => {
                console.log(response.data)
                // check response status
                if(response.status === 201) { // resource created 
                    // assign response data
                    const token = response.data.access_token
                    const user = response.data.user
                    // save token to local storage
                    localStorage.setItem('token', token)
                    // set header
                    httpClient.defaults.headers.common['Authorization'] = token
                    // call mutation
                    commit('auth_success', token, user)
                    resolve(response)
                }
            })
            .catch(err => {
                commit('auth_error', err)
                localStorage.removeItem('token')
                reject(err)
            })
        })
    },
    logOut({commit}) {
        return new Promise((resolve, reject) => {
            // commit('logout')
            httpClient.post("/odjava")
            .then(response => {
                console.log(response.data)
                
                // TREBA LI JOŠ NEŠTO?
                commit('logout')
                localStorage.removeItem('token')
                delete httpClient.defaults.headers.common['Authorization']
                resolve(response)
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
    auth_request(state){
        state.status= 'loading'
    },
    auth_error(state){
        state.status = 'error'
    },
    auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
    },
    logout(state){
        state.status = ''
        state.token = ''
      }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}