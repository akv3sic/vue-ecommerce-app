import httpClient from '@/common/httpClient'
import qs from 'qs'
// at page load first read value from Local storage
let cartItems = window.localStorage.getItem('cartItems');


// initial state
const state = () => ({
    cartItems: cartItems ? JSON.parse(cartItems) : [], // just crucial data (id and quantity) here
    products: [], // additional products data fetched here
    isLoading: true
 })
 
 // getters
 const getters = {
    cartItems(state) {
        return state.cartItems;
    },
    numberOfItems(state)
    {   
        let n = 0
        state.cartItems.forEach(item => {
            n = n + Number(item.quantity)
        });
        return n
    },
    products(state) {
        return state.products;
    },
    isCartDataLoading(state) {
        return state.isLoading;
    }
 }
 
 // actions
 const actions = {
    addToCart( {commit}, item) {
        commit('ADD_TO_CART', item)

        // console.log("Proizvod s ID-em " + item.id + " dodan u košaricu. Količina: " + item.quantity + "." )
        commit('SAVE_CART')
    },

    removeFromCart( {commit}, item) {
        commit('REMOVE_FROM_CART', item)
        commit('SAVE_CART')
    },
    incrementQuantity( {commit}, item ) {
        commit('INCREMENT_QUANTITY', item)
        commit('SAVE_CART')
    },
    decrementQuantity( {commit}, item ) {
        commit('DECREMENT_QUANTITY', item)
        commit('SAVE_CART')
    },
    clearCart( {commit} ) {
        commit('RESET_CARD')
        commit('SAVE_CART')
    },
    fetchCartProducts( {commit}, productIdParams) {
        commit('FETCH_START')
        const endpoint = 'kosarica'
        httpClient.get(endpoint, {
            params: {
                id: productIdParams,
                },
                paramsSerializer: (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
                },
        })
        .then((response) => {
            // console.log(response.data);
            commit('FETCH_END', response.data.proizvodi)
          })
        .catch(err => {
           console.log(err)
        })
    } 
 }
 
 // mutations
 const mutations = {
    ADD_TO_CART(state, item) {
    
        let found = state.cartItems.find(product => product.id == item.id);
        
        if(found) {
            found.quantity = Number(found.quantity) + Number(item.quantity)
        }
        else {
            state.cartItems.push(item)
        }
    },

    REMOVE_FROM_CART(state, item) {
        let found = state.cartItems.find(product => product.id == item.id);
        let cartItemIndex = state.cartItems.indexOf(found)
        // console.log(cartItemIndex)
        if(cartItemIndex > -1)
            state.cartItems.splice(cartItemIndex, 1)
       
        // console.log("Proizvod s ID-em " + item.id + " uklonjen iz košarice.")
    },
    INCREMENT_QUANTITY(state, item) {
        let found = state.cartItems.find(product => product.id == item.id);
        if(found) {
            found.quantity++
           // console.log("Quantity of product with ID of " + item.id + " incremented.")
        } 
        else
            console.log("Greška.")
    },
    DECREMENT_QUANTITY(state, item) {
        let found = state.cartItems.find(product => product.id == item.id);
        if(found && found.quantity > 1) {
            found.quantity--
            // console.log("Quantity of product with ID of " + item.id + " decremented.")
        }
        else
            console.log("Greška.")
    },
    SAVE_CART(state) {
        window.localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        // console.log('Card items saved to local storage.')
    },
    RESET_CARD(state) {
        state.cartItems = []
    },
    FETCH_START(state) { 
        state.isLoading = true 
    },
    FETCH_END(state, products) {
        state.products = products
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