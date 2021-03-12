<template>
    <v-container>
        <v-row>
            <v-col>
                <span class="text-h5">Proizvodi</span>
                <span class="text-h5 grey--text"> ({{ products.length }})</span>
                <div class="ml-2 d-inline">
                    <v-btn text small class="primary--text" to="proizvodi-dodaj-novi">Dodaj novi</v-btn>   
                </div>
            </v-col>
        </v-row>

        <!-- **** ZAGLAVLJE liste **** -->
        <v-row class="hidden-sm-and-down mt-1">
            <v-col class="text-center" cols="1">
                <v-icon class="mb-1">mdi-image</v-icon>
            </v-col>
            <v-col class="text-left" cols="2">
                Naziv
            </v-col>
            <v-col class="text-left" cols="2">
                SKU
            </v-col>
            <v-col class="text-left" cols="2">
                Stanje
            </v-col>
            <v-col class="text-left" cols="2">
                Cijena
            </v-col>
            <v-col class="text-left" cols="3">
                Kategorija
            </v-col>
        </v-row>
        <!-- ************************** -->

        <!-- AKO se proizvodi učitavaju -->
        <v-skeleton-loader v-if="isLoading" type="table-tbody@3" width="100%"></v-skeleton-loader>
        <!-- ************************** -->
        
        <!-- **** STAVKE liste **** -->
        <v-card
            v-for="product in products"
            :key="product.id"
            class="pa-1 my-2"
            outlined
        >
            <v-row>
            <v-col cols="3" md="1">
                <v-img :src="product.url_slike" contain height="50px"></v-img>
            </v-col>
            <v-col cols="7" md="2">
                {{ product.ime}}
            </v-col>
            <v-col cols="3" md="2">
                <v-row class="hidden-md-and-up"> 
                    <v-col class="text-caption">SKU</v-col>
                </v-row>
                N/A
            </v-col><v-col cols="3" md="2">
                <v-row class="hidden-md-and-up"> 
                    <v-col class="text-caption">Stanje</v-col>
                </v-row>
                <v-icon small>mdi-help</v-icon>
            </v-col><v-col cols="3" md="2">
                <v-row class="hidden-md-and-up"> 
                    <v-col class="text-caption">Cijena</v-col>
                </v-row>
                {{ product.cijena}} KM
            </v-col>
            <v-col cols="3" md="3">
                <v-row class="hidden-md-and-up"> 
                    <v-col class="text-caption">Kategorija</v-col>
                </v-row>
                {{ product.kategorija }}
            </v-col>
            </v-row>
        </v-card>
        <!-- ************************** -->
    </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'productsList',
    data: () => ({
       
    }),
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            this.$store
                .dispatch('products/fetchProducts', {categoryId: null}, {root: true})
        }
    },
    computed: {

        ...mapGetters('products', ['products', 'isLoading'])
    },
}
</script>