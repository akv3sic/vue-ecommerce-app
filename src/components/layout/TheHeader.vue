<template>
        <div class="header no-print">
            <v-app-bar
                app  
                color="white"
                height="80"
                :class="{'px-16':$vuetify.breakpoint.mdAndUp}"
            >
                <!-- Mobile shopping basket button -->
                <v-btn to="kosarica" class="hidden-md-and-up" text small>
                    <v-icon>mdi-basket-outline</v-icon>
                    <v-badge color="accent" :content="numberOfItems > 0 ? numberOfItems : '0'"></v-badge>
                </v-btn>

                <!-- Logo area -->
                <v-spacer class="hidden-md-and-up"></v-spacer>
                
                <v-toolbar-title class="text-uppercase">
                    <v-row>
                        <v-col justify-center>
                        <router-link to="/" class="text-decoration-none primary--text">
                            
                            <span class="font-weight-normal primary--text d-none d-sm-inline">Dash</span>
                            <img class="" :src="require('../../assets/logo.svg')" height="24"/>
                            <span class="d-none d-sm-inline font-weight-bold">etailing</span>
                        </router-link>
                        </v-col>
                        
                    </v-row>
                        
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <!-- Mobile menu icon -->
                <span class="hidden-md-and-up">
                    <v-btn 
                        @click.stop="drawer = !drawer"
                        text
                    >
                        <v-icon large right>mdi-menu</v-icon>
                    </v-btn>
                </span>
                 <!-- Standard menu -->
                <v-toolbar-items class="hidden-sm-and-down">
                   <v-list-item
                        v-for="(item, index) in navigationItems"
                        :key="index"
                        :to="item.to"
                        active-class="no-active"
                        class="on-hover mx-4"
                        >
                        <v-list-item-title class="text-body font-weight-medium">{{ item.title }}.</v-list-item-title>
                        </v-list-item>
                    
                </v-toolbar-items>
        
                <v-spacer class="hidden-sm-and-down"></v-spacer>

                <v-toolbar-items class="hidden-sm-and-down">
                
                <!-- Auth butttons -->

                 <!-- ******* Ako je korisnik prijavljen  POČETAK******* -->
                  <!-- Button with dropdown menu -->
                <v-menu offset-y v-if="isLoggedIn" rounded="0" open-on-hover>
                    <template v-slot:activator="{ on, attrs }">    
                        <v-btn v-if="isLoggedIn" class="remove-text-transform" text v-bind="attrs" v-on="on">
                                <v-icon class="mr-1">mdi-account</v-icon>
                                {{ displayName }}
                        </v-btn>
                    </template>
                      <v-list>
                        <v-list-item
                        v-for="(item, index) in racunDropDownMenuItems"
                        :key="index"
                        @click="item.onClick"
                        >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                 <!-- ******* Ako je korisnik prijavljen  KRAJ******* -->
                
                 <!-- ******* Ako korisnik  NIJE prijavljen  POČETAK******* -->
                    <v-tooltip v-else bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" to="/prijava" class="remove-text-transform" text>
                            <v-icon>mdi-login</v-icon>
                        </v-btn>
                    </template>
                    <span>Prijavite se</span>
                    </v-tooltip>
                  
                 <!-- ******* Ako korisnik  NIJE prijavljen  KRAJ******* -->
                

                    <!-- Shopping basket buttton -->    
                    <v-btn to="/kosarica" class="" text small>
                        <v-icon>mdi-basket-outline</v-icon>
                        <v-badge color="accent" :content="numberOfItems > 0 ? numberOfItems : '0'"></v-badge>
                    </v-btn>
                    
                </v-toolbar-items>
            </v-app-bar>

            <!-- Mobile menu -->
            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
            >
            <v-list 
                dense
                nav
            >
                <v-subheader class="my-4">
                     <img class="mx-auto" :src="require('../../assets/logo.svg')" height="30"/>
                </v-subheader>
                <v-list-item-group>
                    <v-list-item to="/">
                      <v-list-item-icon>
                          <v-icon>mdi-home</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Naslovna</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/trgovina">
                      <v-list-item-icon>
                          <v-icon>mdi-cart</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Trgovina</v-list-item-title>
                    </v-list-item>
                      <v-list-item to="/projekt">
                      <v-list-item-icon>
                          <v-icon>mdi-information-variant</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Projekt</v-list-item-title>
                    </v-list-item>
                  <!-- Auth butttons -->
                    <v-list-item v-if="isLoggedIn" to="/moj-racun">
                      <v-list-item-icon>
                          <v-icon>mdi-account</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Moj račun</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-else to="/prijava">
                      <v-list-item-icon>
                          <v-icon>mdi-login</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Prijava</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-navigation-drawer>
        </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Header",
    data() {
        return {
            drawer: null,
            navigationItems: [
                {title: 'naslovna', to:'/'},
                {title: 'trgovina', to:'/trgovina'},
                {title: 'projekt', to:'/projekt'},
            ],
            racunDropDownMenuItems: [
            { title: 'Moj račun', onClick: this.otvoriMojRacun},
            { title: 'Odjava', onClick: this.logOut},  
            ],

        }
    },
    computed: {

        ...mapGetters('auth', ['isLoggedIn', 'displayName']),
        ...mapGetters('cart', ['numberOfItems'])

    },
    methods: {
        otvoriMojRacun() {
            this.$router.push({path: '/moj-racun'})
        },
        logOut() {
            this.$store
            .dispatch('auth/logOut', { root: true })
        },
     }
}
</script>

<style>
.v-list-item--active.no-active:before {
  opacity: 0 !important;
}

.v-list-item.on-hover:hover:before {
  background-color:#052949;
  opacity: 0.1 !important;
}
</style>

<style scoped>
.remove-text-transform {
    text-transform: none !important;
}
</style>
