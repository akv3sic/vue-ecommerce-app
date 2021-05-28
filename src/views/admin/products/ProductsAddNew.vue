<template>
    <v-container>
        <v-row>
            <v-col>
                 <span class="text-h5">Dodaj novi proizvod</span>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="10">
                <v-text-field
                    v-model="noviProizvod.ime"
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
                <vue-editor v-model="noviProizvod.opis">
                </vue-editor>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" md="3">
                <v-select
                v-model="noviProizvod.kategorijaID"
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
                v-model="noviProizvod.brandID"
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
                    v-model="noviProizvod.url_slike"
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
                    v-model="noviProizvod.cijena"
                    label="Cijena"
                    dense
                    outlined
                    hint="Zadana valuta je BAM. Valutu ne trebate unositi."
                ></v-text-field>
            </v-col>
        </v-row>
        
        <v-btn class="primary" @click="publishProduct">Dodaj proizvod</v-btn>

    </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import store from "@/store";
import { VueEditor } from "vue2-editor"

export default {
    name: 'addNewProduct',
    components: { VueEditor },
    data: () => ({
      noviProizvod: {
          ime: '',
          opis:'',
          kategorijaID: null,
          brandID: null,
          url_slike: '',
          cijena: ''
      }
    }),
    computed: {
        ...mapGetters('products', ['brands', 'categories'])
    },
    beforeRouteEnter(to, from, next) {
    store.dispatch('products/fetchProducts', {categoryId: null}, {root: true})
    next()
    },
    methods: {
        publishProduct() {
        this.$store
            .dispatch('product/publishProduct', this.noviProizvod, { root: true })
            .catch( err => {
                console.log(err)
            })
        }
    }
}
</script>