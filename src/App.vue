<template>
    <v-app class="">
     <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
       <Header v-show="$route.path !== '/prijava'"/>

        <!-- Sizes your content based upon application components -->
      <v-main :class="{'pa-0':$route.path == '/'}">
        <!-- Provides the application the proper gutter -->
        <v-container fluid :class="{'pa-0':$route.path == '/'}">
          <router-view></router-view>
       </v-container>
      </v-main>
    </v-app>
</template>

<script>

import Header from "@/components/layout/TheHeader";

export default {
  name: 'App',

  components: {
    Header
  },

 
};
</script>
