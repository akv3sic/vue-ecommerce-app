import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service"
import { resolve } from "core-js/fn/promise";

const state = {
    errors: null,
    user: {},
    isAuthenticated: true
}

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated
    }
}

const actions = {
    
},

const mutations = {
    
}

export default {
    state,
    getters,
    actions,
    mutations
}