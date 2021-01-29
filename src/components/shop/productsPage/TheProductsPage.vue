<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2" class="hidden-sm-and-down">
                <ProductsFilterBar />
            </v-col>
            <v-col>
                <!-- Odabir kategorije i filtera ZA XS I SM -->
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
                <!-- XS I SM kraj -->

                <!-- Lista proizvoda -->
                <ProductGrid />

               
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProductsFilterBar from "@/components/shop/productsPage/TheProductsFilterBar"
import ProductGrid from "@/components/shop/productsPage/ProductGrid"

export default {
    name: "Page",
    components: { ProductsFilterBar, ProductGrid },
    data: () => ({

    }),
}
</script>