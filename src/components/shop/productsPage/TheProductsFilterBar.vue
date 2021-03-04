<template>
    <v-card flat>
        <v-card-title>Kategorije</v-card-title>
        <v-list class="">
            <v-list-item-group>
                <v-list-item
                v-for="(kategorija, id) in kategorije"
                :key="id"
                :to="'/kategorija/' + kategorija.kategorijaID + '/' + 'slug-kategorije'"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="kategorija.kategorija"></v-list-item-title>
                    </v-list-item-content>  
                </v-list-item>
            </v-list-item-group>
        </v-list>

        <v-card-title>Filtriraj po:</v-card-title>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Brandu
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-radio-group
                    v-model="brandsRadioGroup"
                    dense
                    >
                        <v-radio 
                        v-for="(brand, brandID) in brandovi"
                        :key="brandID"
                        :value="brand.brandID"
                        :label="brand.brand"
                        off-icon="mdi-checkbox-blank-outline"
                        on-icon="mdi-check-box-outline"
                        >
                        </v-radio>
                    </v-radio-group>
                   
                </v-expansion-panel-content>
            </v-expansion-panel>
        
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Cijeni
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-range-slider
                        max="2000"
                        min="0"
                    ></v-range-slider>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>

<script>

export default {
    name: "ProductsFilterBar",
    data: () => ({
       brandsRadioGroup: null
    }),
    props: {
        kategorije: { type: Array, required: true },
        brandovi: { type: Array, required: true }
    },
    watch: {
        brandsRadioGroup() {
            console.log('ID odabranog branda: '+ this.brandsRadioGroup)
            let paramsList = {
                categoryId: this.$route.params.id,
                brandId: this.brandsRadioGroup
            }
            
            this.$store.dispatch('products/fetchProducts', paramsList, {root: true})
        },
        // resetiraj odabir branda kad se ruta promijeni
        $route(){
            this.brandsRadioGroup = null
        }
    }
}
</script>