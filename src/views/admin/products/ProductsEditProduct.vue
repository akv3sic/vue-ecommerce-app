<template>
    <v-container>
        <v-row>
            <v-col>
                 <span class="text-h5">Uredi proizvod</span>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="10">
                <v-text-field
                    v-model="product.ime"
                    label="Naziv proizvoda"
                    counter="50"
                    dense
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="10">
                <span class="text-caption ml-3 desc-caption">Opis proizvoda</span>
                <!-- WYSIWYG editor -->
                <vue-editor v-model="product.opis">
                </vue-editor>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" md="3">
                <v-select
                v-model="product.kategorijaID"
                :items="categories"
                item-text="kategorija"
                item-value="kategorijaID"
                label="Kategorija"
                dense
                outlined
                ></v-select>
            </v-col>
            <v-col cols="6" md="3">
                <v-select
                v-model="product.brandID"
                :items="brands"
                item-text="brand"
                item-value="brandID"
                label="Brand"
                dense
                outlined
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="10">
                <v-text-field
                    v-model="product.url_slike"
                    label="URL slike"
                    append-icon="mdi-image"
                    hint="Preporuka: veličina slike oko 800 x 800 px."
                    dense
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" md="3">
                <v-text-field
                    v-model="product.cijena"
                    label="Cijena"
                    dense
                    outlined
                    hint="Zadana valuta je BAM. Valutu ne trebate unositi."
                ></v-text-field>
            </v-col>
        </v-row>
        
        <v-btn class="primary" @click="updateProduct">Spremi promjene</v-btn>

    </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import store from "@/store";
import { VueEditor } from "vue2-editor"

export default {
    name: 'editProduct',
    components: { VueEditor },
    data: () => ({

    }),
    computed: {
        ...mapGetters('product', ['product', 'brands', 'categories'])
    },
    beforeRouteEnter(to, from, next) {
    store.dispatch('product/fetchProductEditingData', to.params.id, {root: true})
    next()
    },
    methods: {
        updateProduct() {
        this.$store
            .dispatch('product/updateProductDetails', this.product, { root: true })
            .catch( err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
.desc-caption{
    opacity: 0.8;
}
</style>