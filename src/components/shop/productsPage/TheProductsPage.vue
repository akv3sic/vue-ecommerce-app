<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2" class="hidden-sm-and-down">
                <ProductsFilterBar />
            </v-col>
            <v-col>
                <div class="hidden-md-and-up">
                    <v-select label="Odaberite kategoriju" class="hidden-md-and-up"></v-select>
                </div>
                <v-container class="px-8">
                <v-btn block color="primary" class="hidden-md-and-up">
                    <v-icon left>mdi-tune</v-icon>
                    <v-spacer></v-spacer>
                     Filtriraj
                     <v-spacer></v-spacer>
                 </v-btn>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProductsFilterBar from "@/components/shop/productsPage/TheProductsFilterBar"

export default {
    name: "Page",
    components: {ProductsFilterBar},
    data: () => ({

    }),
}
</script>