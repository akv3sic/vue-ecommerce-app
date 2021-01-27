<template>
    <v-card flat>
        <v-card-title>Kategorije</v-card-title>
        <v-list class="">
            <v-list-item-group>
                <v-list-item
                v-for="(kategorija, id) in kategorije"
                :key="id"
                :to="kategorija.id"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="kategorija.imeKategorije"></v-list-item-title>
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
                    <v-checkbox label="Sonax" value="sonax" dense></v-checkbox>
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
        kategorije: [
            {"id": "1", "imeKategorije" : "Kategorija 1"},
            {"id": "2", "imeKategorije" : "Kategorija 2"},
            {"id": "3", "imeKategorije" : "Kategorija 3"},
        ],
    }),
}
</script>