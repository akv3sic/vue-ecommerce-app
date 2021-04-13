<template>
    <div>
        <v-app-bar
            app
            flat
        >
            <v-app-bar-nav-icon @click="setDrawer(!drawer)"></v-app-bar-nav-icon>
            <v-toolbar-title>Upravljačka ploča</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-bell-outline</v-icon>
            </v-btn>

            <v-menu offset-y left>
                <template v-slot:activator="{ on, attrs }">    
                    <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon class="">mdi-account-circle</v-icon>
                    </v-btn>
                </template>
                    <v-list
                        dense
                    >
                    <v-list-item
                    v-for="(item, index) in accountMenuItems"
                    :key="index"
                    @click="handleAccountMenuItemClick(item.action)"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
          
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: 'Navbar',
    data: () => ({
       accountMenuItems: [
            { title: 'Odjava', action: 'logOut'},  
            ],
    }),
    computed: {
      ...mapState('admin', ['drawer'])
    },
     methods: {
         handleAccountMenuItemClick(action) {
             switch(action) {
             case 'logOut':
                this.$store
                    .dispatch('auth/logOut', { root: true })
                 this.$router.push({path: '/trgovina'})
                break;
                }
             },
     ...mapActions('admin', ['setDrawer'])
    },
}
</script>