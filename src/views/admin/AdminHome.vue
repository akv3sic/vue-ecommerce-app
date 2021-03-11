<template>
    <div>
        <Navbar />
        <NavigationDrawer />
        <v-container fluid class="pa-0">
        <!-- Ovdje se injektiraju pogledi -->
          <router-view></router-view>
       </v-container>
    </div>
</template>

<script>
import Navbar from "@/components/admin/layout/TheNavbar";
import NavigationDrawer from "@/components/admin/layout/TheNavigationDrawer";

export default {
    name: "adminHome",
    components: { Navbar, NavigationDrawer, },
}
</script>