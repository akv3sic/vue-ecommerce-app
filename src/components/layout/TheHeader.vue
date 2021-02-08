<template>
        <div class="header">
            <v-app-bar app 
                color="white"
                height="80"
                flat
            >
                <!-- Mobile shopping basket button -->
                <v-btn to="kosarica" class="hidden-md-and-up" text>
                    <v-icon large left>mdi-basket-outline</v-icon>
                    <v-badge color="accent" content="0"></v-badge>
                </v-btn>

                <!-- Logo area -->
                <v-spacer class="hidden-md-and-up"></v-spacer>
                 <img class="mr-1" :src="require('../../assets/logo.svg')" height="25"/>
                <v-toolbar-title class="text-uppercase">
                        <router-link to="/" class="text-decoration-none primary--text">
                            <span class="font-weight-light">Dash</span>
                            <span class="">Detailing</span>
                        </router-link>
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
                    <v-btn to="/" text> 
                        naslovna
                    </v-btn>
                      <v-btn to="trgovina" text>
                        trgovina
                    </v-btn>
                    <v-btn text>
                        projekt
                    </v-btn>
                </v-toolbar-items>
                <v-spacer class="hidden-sm-and-down"></v-spacer>
                
                <v-toolbar-items class="hidden-sm-and-down">

                <!-- Auth butttons -->    
                <v-btn v-if="isLoggedIn" to="mojracun" class="remove-text-transform" text>
                        <v-icon>mdi-account</v-icon>
                        Moj račun
                    </v-btn>
                    <v-btn v-else to="prijava" class="remove-text-transform" text>
                        <v-icon>mdi-login</v-icon>
                        Prijava
                    </v-btn>

                <!-- Shopping basket buttton -->    
                <v-btn to="kosarica" class="" text>
                    <v-icon>mdi-basket-outline</v-icon>
                    <v-badge color="accent" content="0"></v-badge>
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
                    <v-list-item to="trgovina">
                      <v-list-item-icon>
                          <v-icon>mdi-cart</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Trgovina</v-list-item-title>
                    </v-list-item>
                      <v-list-item>
                      <v-list-item-icon>
                          <v-icon>mdi-information-variant</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Projekt</v-list-item-title>
                    </v-list-item>
                  <!-- Auth butttons -->
                    <v-list-item v-if="isLoggedIn" to="mojracun">
                      <v-list-item-icon>
                          <v-icon>mdi-account</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Moj račun</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-else to="prijava">
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
export default {
    name: "Header",
    data() {
        return {
            drawer: null,
            isLoggedIn: false
        }
    }
}
</script>

<style scoped>
.remove-text-transform {
    text-transform: none !important;
}
</style>