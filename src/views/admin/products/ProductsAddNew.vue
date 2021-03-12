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
                <v-textarea
                v-model="noviProizvod.opis"
                label="Opis proizvoda"
                dense
                outlined
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" md="3">
                <v-select
                v-model="noviProizvod.kategorija"
                :items="items"
                label="Kategorija"
                dense
                outlined
                ></v-select>
            </v-col>
            <v-col cols="6" md="3">
                <v-select
                v-model="noviProizvod.brand"
                :items="items"
                label="Brand"
                dense
                outlined
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="10">
                <v-text-field
                    v-model="noviProizvod.urlSlike"
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
        
        <v-btn class="primary">Dodaj proizvod</v-btn>

    </v-container>
</template>

<script>
export default {
    name: 'addNewProduct',
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      noviProizvod: {
          ime: '',
          opis:'',
          kategorija: '',
          brand: '',
          urlSlike: '',
          cijena: ''
      }
    }),
}
</script>