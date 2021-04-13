<template>
    <div>
        <v-navigation-drawer 
            v-model="drawer"
            app
        >
        <v-list-item>
            <v-list-item-content>
                <v-row>
                    <v-col justify-center>
                    <router-link to="/admin" class="text-decoration-none  text-uppercase primary--text">
                        <span class="font-weight-normal primary--text d-inline">Dash</span>
                        <img class="" :src="require('../../../assets/logo.svg')" height="18"/>
                        <span class="d-inline font-weight-bold">etailing</span>
                    </router-link>
                    </v-col>
                </v-row>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

            <v-list
                nav
                dense
            >
                <v-list-item
                to="/admin"
                exact
                >
                    <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Izvještaj</v-list-item-title>
                </v-list-item>
                <v-list-group
                    v-for="item in navigationItemsMulti"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.icon"
                    no-action
                >
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    </template>

                    <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    :to="child.to"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="child.title"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-group>

                 <v-list-item
                 v-for="item in navigationItemsSingle"
                 :key="item.title"
                 >
                    <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>

export default {
    name: 'NavigationDrawer',
    data: () => ({
        navigationItemsMulti: [
        {
          icon: 'mdi-package-variant-closed',
          items: [
            { title: 'Svi proizvodi', to: '/admin/proizvodi'},
            { title: 'Dodaj novi', to: '/admin/proizvodi-dodaj-novi' },
            { title: 'Kategorije', to: '/admin/proizvodi-kategorije' },
          ],
          title: 'Proizvodi',
        },
        {
          icon: 'mdi-account-supervisor',
          items: [{ title: 'Svi korisnici' }],
          title: 'Korisnici',
        },
        {
          icon: 'mdi-cart',
          items: [{ title: 'Sve nardužbe' }],
          title: 'Narudžbe',
        },
      ],
      navigationItemsSingle: [
        {
          icon: 'mdi-sine-wave',
          title: 'Analitika',
        },
        {
          icon: 'mdi-cog',
          title: 'Postavke',
        },
        {
          icon: 'mdi-help',
          title: 'Pomoć',
        },
      ]
    }),
    computed: {
      drawer: {
        get () {
          return this.$store.getters['admin/drawer']
        },
        set (val) {
          this.$store.dispatch('admin/setDrawer', val)
        },
      },
    },
}
</script>