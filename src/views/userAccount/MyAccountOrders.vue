<template>
    <div style="height: 100%;">
        <v-card class="mb-2">
            <v-container>
                <v-row>
                    <v-col>
                        <v-row>
                            <v-col>
                                <v-icon color="black" large>mdi-package-variant-closed</v-icon>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <h4 class="text-uppercase text-h5 font-weight-bold">Moje narudžbe</h4>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-card>

            <v-container  v-if="isLoading" class="mb-2">
                <v-row>
                    <v-col>
                        <span class="text-overline">Učitavanje...</span>
                    </v-col>
                </v-row>
            </v-container>

            <v-container v-else-if="orders.length === 0 || orders.message == 'Nema prijašnjih kupnji!!'" class="mb-2">
                <v-row>
                    <v-col>
                        <p>Još nemate narudžbi.</p>
                    </v-col>
                </v-row>
            </v-container>

            <v-expansion-panels v-else accordion> 
                <v-expansion-panel
                    v-for="(order, index) in orders"
                    :key="index"
                >
                    <v-expansion-panel-header>
                        <v-row>
                            <v-col cols="12" sm="6">
                                ID narudžbe: {{ order.kosaricaID }}
                            </v-col>
                            <v-col cols="12" sm="6">
                                Datum: {{ order.datum }}
                            </v-col>
                            <v-col cols="12">
                                <span>Status: </span>
                                <span>N/A</span>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        
                        <!--*********** STAVKE ************-->
                        <v-card
                            v-for="(item, index) in order.proizvodi"
                            :key="index"
                            class="pa-1 my-2"
                            :class="{'pl-10':$vuetify.breakpoint.smAndUp}"
                            outlined
                        >
                        <v-row>
                            <v-col cols="2">
                                <v-img :src="item.url_slike" contain height="35px"></v-img>
                            </v-col>
                            <v-col cols="7">
                                {{ item.ime }}
                            </v-col>
                            <v-col cols="4">
                                <v-row class=""> 
                                    <v-col class="text-caption">Cijena</v-col>
                                </v-row>
                                {{ item.cijena }}
                            </v-col>
                            <v-col cols="4">
                                <v-row class=""> 
                                    <v-col class="text-caption">Količina</v-col>
                                </v-row>
                                <span class="text-button mx-1 primary--text font-weight-bold">{{ item.quantity }}</span>
                            </v-col>
                            <v-col cols="4">
                                <v-row class=""> 
                                    <v-col class="text-caption">Ukupno</v-col>
                                </v-row>
                                <span class="px-1"> {{ (item.cijena * item.quantity).toFixed(2) }} </span>
                            </v-col>
                        </v-row>
                        </v-card>
                        <!--*******************************-->
                        <hr>
                        <v-row>
                            <v-col>
                                <span>Ukupno: </span>
                                <span>{{ totalPrice[index] }} KM</span>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        
    </v-card>
    </div>
    
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'MyOrders',
    data: () => ({
        /*
        povijestKupovine: [
            {
                kosaricaID: 3,
                datum: "15-03-2021",
                proizvodi: [
                    {
                        quantity: 2,
                        url_slike: "https://www.flex-tools.com/fileadmin/_processed_/f/9/csm_pe14-2_150_mit_pad_f38e809dd7.jpg",
                        id: 7,
                        ime: "lorem ipsum sit 1",
                        cijena: 38.0
                    },
                    {
                        quantity: 1,
                        url_slike: "https://www.flex-tools.com/fileadmin/_processed_/f/9/csm_pe14-2_150_mit_pad_f38e809dd7.jpg",
                        id: 5,
                        ime: "lorem amen sit dolor",
                        cijena: 38.0
                    }
                ]
            },
            {
                kosaricaID: 4,
                datum: "16-03-2021",
                proizvodi: [
                    {
                        quantity: 2,
                        url_slike: "https://www.flex-tools.com/fileadmin/_processed_/f/9/csm_pe14-2_150_mit_pad_f38e809dd7.jpg",
                        id: 7,
                        ime: "ipsum sit 1",
                        cijena: 38.0
                    },
                    {
                        quantity: 1,
                        url_slike: "https://www.flex-tools.com/fileadmin/_processed_/f/9/csm_pe14-2_150_mit_pad_f38e809dd7.jpg",
                        id: 5,
                        ime: "sit nutae",
                        cijena: 44.0
                    }
                ]
            },
            {
                kosaricaID: 5,
                datum: "22-03-2021",
                proizvodi: [
                    {
                        quantity: 5,
                        url_slike: "https://www.flex-tools.com/fileadmin/_processed_/f/9/csm_pe14-2_150_mit_pad_f38e809dd7.jpg",
                        id: 8,
                        ime: "quisque lorem",
                        cijena: 38.0
                    },
                    {
                        quantity: 1,
                        url_slike: "https://www.flex-tools.com/fileadmin/_processed_/f/9/csm_pe14-2_150_mit_pad_f38e809dd7.jpg",
                        id: 5,
                        ime: "vendetur",
                        cijena: 38.0
                    }
                ]
            }
        ] */
    }),
    computed: {
        totalPrice () {
            let sum = 0
            let totals = []
            this.orders.forEach((narudzba) => {
                narudzba.proizvodi.forEach((item) => {
                sum = sum + item.quantity * item.cijena
                })
                totals.push(sum.toFixed(2))
                sum = 0
            })
            return totals
        },

        ...mapGetters('userAccountOrders', ['isLoading', 'orders']),
    },
    mounted() {
        this.fetchOrders();
    },
    methods: {
        fetchOrders() {
            this.$store
                .dispatch('userAccountOrders/fetchOrders', null, {root: true})
        }
    }
}
</script>

<style scoped>

</style>