<template>
        <div class="header">
            <v-app-bar app 
                color="white"
                flat
            >
                <v-spacer class="hidden-xs-only"></v-spacer>
                 <img class="mr-3" :src="require('../../assets/logo.svg')" height="30"/>
                <v-toolbar-title class="text-uppercase">
                        <router-link to="/" class="text-decoration-none primary--text">
                            <span class="font-weight-light">Dash</span>
                            <span class="">Detailing</span>
                        </router-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <!-- Mobile menu icon -->
                <span class="hidden-sm-and-up">
                    <v-btn 
                        @click.stop="drawer = !drawer"
                        text
                    >
                        <v-icon large right>mdi-menu</v-icon>
                    </v-btn>
                </span>
                 <!-- Standard menu -->
                <v-toolbar-items class="hidden-xs-only">
                    <v-btn to="/" text> 
                        naslovna
                    </v-btn>
                      <v-btn to="trgovina" text>
                        trgovina
                    </v-btn>
                      <v-btn to="prijava" text>
                        prijava
                    </v-btn>
                </v-toolbar-items>
                <v-spacer class="hidden-xs-only"></v-spacer>
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
                     <v-list-item to="prijava">
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
            drawer: null
        }
    }
}
</script>

<style scoped>

</style>