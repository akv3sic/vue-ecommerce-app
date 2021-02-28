<template>
    <v-app class="">
        <!-- Sizes your content based upon application components -->
      <v-main :class="{'pa-0':$route.path == '/'}">
        <!-- Provides the application the proper gutter -->
        <v-container fluid class="pa-0" :class="{'fill-height':$route.path == '/prijava' || $route.path == '/kosarica'}">
        <!-- Ovdje se injektiraju pogledi -->
          <router-view></router-view>
       </v-container>
      </v-main>
    </v-app>
</template>

<script>
export default {
  name: 'App',
 
};
</script>
