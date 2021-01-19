import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = API_URL
    },

    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
        ] = `Token ${JwtService.getToken()}`
    },

    
}

export default ApiService