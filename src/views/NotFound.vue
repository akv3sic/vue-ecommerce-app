<template>
<v-container fill-height fluid class="mt-13">
    <v-row justify="center" align="center">
        <v-col cols="8" sm="5" md="4" lg="3">
          <h2 class="subtitle-1 text-center">404</h2>
          <h3 class="subtitle-1 text-center font-weight-medium">Stranica koju tražite nije tu.</h3>
        </v-col>
    </v-row>
    <v-row justify="space-around" align="center">
        <v-col cols="8" sm="5" md="4" lg="3">
            <v-btn class="mt-4" block @click="$router.back()">Natrag.</v-btn>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "NotFound",
  data: () => ({

  })
}
</script>

<style>
</style>