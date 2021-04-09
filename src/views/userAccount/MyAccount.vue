<template>
    <v-container blue-grey lighten-5 fluid height="100vh" style="height: 100vh;">
        <v-container class=""> 
            <v-container>
                <v-row justify="center">
                    <v-col cols="6" md="3" xl="2">
                        <router-link to="/trgovina">
                            <img class="" :src="require('../../assets/logo.svg')" height="25"/>
                        </router-link>
                    </v-col>
                    <v-col cols="6" md="7" xl="6">
                        <h1 class="text-h5 text-uppercase font-weight-medium">Moj račun</h1>
                    </v-col>
                </v-row>
            

            </v-container>
            <v-row justify="center">
                <v-col cols="12" md="3" xl="2">
                    <v-card>
                        
                        <v-list-item :class="{'py-4': $vuetify.breakpoint.mdAndUp}">
                            <v-list-item-content>
                            <v-list-item-title class="title">
                                Pozdrav, {{ displayName }}
                            </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list
                            dense
                            nav
                        >
                            <v-list-item
                            v-for="item in menuItems"
                            :key="item.title"
                            :to="item.to"
                            @click="item.action"
                            exact
                            link
                            :class="{'py-1': $vuetify.breakpoint.mdAndUp}"
                            >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        
                    </v-card>
                </v-col>
                <v-col cols="12" md="7" xl="6">
                    
                        <router-view></router-view>
                    
                </v-col>
            </v-row>
        </v-container>
        <ThinFooter />
    </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import ThinFooter from "@/components/layout/TheThinFooter";

export default {
    name: "MyAccount",
    components: { ThinFooter},
    data () {
        return {
            menuItems: [
            { title: 'Pregled računa', icon: 'mdi-account', to: '/moj-racun', action: this.defaultHandler },
            { title: 'Moje narudžbe', icon: 'mdi-package-variant-closed', to: '/moj-racun/narudzbe', action: this.defaultHandler },
            { title: 'Moji podatci', icon: 'mdi-account-details-outline', to: '/moj-racun/moji-podatci', action: this.defaultHandler },
            { title: 'Plaćanje', icon: 'mdi-credit-card-outline', to: '/moj-racun/placanje', action: this.defaultHandler },
            { title: 'Pomoć', icon: 'mdi-help-box', action: this.defaultHandler},
            { title: 'Odjava', icon: 'mdi-logout', action: this.logOut },
            ],
            right: null,
        }
        },
    computed: {
        ...mapGetters('auth', ['displayName']),
    },
    methods: {
        defaultHandler() {
            
        },
        logOut() {
            this.$store
            .dispatch('auth/logOut', { root: true })
            .then(() => { this.$router.push('/trgovina') })
        }
    }
}
</script>

<style>

</style>
