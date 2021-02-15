<template>
    <v-container>
        <v-row v-if="isLoading" class="pt-10" dense> 
            <h4 class="text-overline">Učitavanje proizvoda...</h4>
        </v-row>
        <v-row v-else-if="products.length === 0" class="pt-10" dense> 
            <h4 class="text-overline">Nažalost, trenutno nema proizvoda.</h4>
        </v-row>   
        <v-row v-else>
            <h4 class="text-overline">Broj prikazanih proizvoda: {{ products.length }}.</h4>
            <v-row>
                <ProductPreview 
                    v-for="product in products"
                    :product=product
                    :key="product.id"
                /> 
            </v-row>
            <v-row>
            <div class="mx-auto my-6">
                    <v-pagination
                    :length="1"
                    disabled
                    ></v-pagination>
                </div>
            </v-row>

        </v-row>

    </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import ProductPreview from "@/components/shop/productsPage/VProductPreview"


export default {
    name: "ProductGrid",
    components: { ProductPreview },
    data: () => ({
       
    }),
    props: {
        products: {
            type: Array,
            required: true
        }
    },
   computed: {

        ...mapGetters('products', ['isLoading'])
   }
}
</script>

<style scoped>

</style>