<template>
    <v-container :class="{'pa-1':$vuetify.breakpoint.xs}">
        <Header />
        <v-container :class="{'pa-0':$vuetify.breakpoint.xs, 'px-8':$vuetify.breakpoint.sm,'px-10':$vuetify.breakpoint.md, 'px-16':$vuetify.breakpoint.lgAndUp}">
            <v-alert
            color="blue-grey"
            dark
            class="my-4"
            >
            <span>Besplatna dostava za narudžbe iznad 200 KM.</span>
            </v-alert>
            
            <v-container v-if="cartItems.length > 0 && !isCartDataLoading" class="pa-0">
                <!-- **** ZAGLAVLJE liste **** -->
                <v-row class="mt-2 hidden-sm-and-down">
                    <v-col class="text-center" cols="2">
                    <v-icon class="mb-1">mdi-image</v-icon>
                    </v-col>
                    <v-col class="text-left" cols="4">
                        Stavka
                    </v-col>
                    <v-col class="text-left" cols="2">
                        Cijena
                    </v-col>
                    <v-col class="text-left" cols="2">
                        Količina
                    </v-col>
                    <v-col class="text-left" cols="2">
                        Ukupno
                    </v-col>
                </v-row>
                <!-- ************************** -->
                 <!-- **** STAVKE liste **** -->
                <v-card
                    v-for="(item, index) in cartItems"
                    :key="index"
                    class="pa-1 my-2"
                    outlined
                >
                    <v-row>
                    <v-col cols="3" md="2">
                        <v-img :src="products[index].url_slike" contain height="50px"></v-img>
                    </v-col>
                    <v-col cols="7" md="4">
                        {{ products[index].ime }}
                    </v-col>
                    <v-col cols="4" md="2">
                        <v-row class="hidden-md-and-up"> 
                            <v-col class="text-caption">Cijena</v-col>
                        </v-row>
                        {{ products[index].cijena }}
                    </v-col>
                    <v-col cols="4" md="2">
                        <v-row class="hidden-md-and-up"> 
                            <v-col class="text-caption">Količina</v-col>
                        </v-row>
                        <span class="d-flex">
                            <v-icon  @click.prevent="decrementQuantity( {id: item.id} )">mdi-minus-box-outline</v-icon>
                            <span class="text-button mx-1 primary--text font-weight-bold">{{ item.quantity }}</span>
                            <v-icon @click.prevent="incrementQuantity( {id: item.id} )">mdi-plus-box-outline</v-icon>
                        </span>
                    </v-col>
                    <v-col cols="4" md="2">
                        <v-row class="hidden-md-and-up"> 
                            <v-col class="text-caption">Ukupno</v-col>
                        </v-row>
                        <span class="d-flex">
                            <span class="px-1"> {{ (products[index].cijena * item.quantity).toFixed(2) }} </span>
                            <v-icon :class="{'px-2':$vuetify.breakpoint.mdAndUp}" @click.prevent="removeFromCart( {id: item.id} )" color="primary">mdi-close-circle-outline</v-icon>
                        </span>
                    </v-col>
                    </v-row>
                </v-card>
                <!-- ************************** -->
                <!-- CART TOTALS -->
                <v-row>
                    <v-col class="mr-2">
                        <div class="data-cart-totals py-2">
                            <ul class="cart-totals">
                                <li>
                                    <span class="text-subtitle-1 mr-2">Ukupno:</span>
                                    <span>{{ totalPrice }}</span>
                                </li>
                                <v-divider></v-divider>
                                <li>
                                    <span class="text-subtitle-1 mr-2">Dostava:</span>
                                    <span>{{ shipping }}</span>
                                </li>
                                <v-divider></v-divider>
                                <li>
                                    <span class="text-subtitle-1 mr-2">Konačna cijena:</span>
                                    <span>{{ finalPrice }}</span>
                                </li>
                            </ul>
                        </div> 
                    </v-col>
                </v-row>
                <!--*******-->

                <!-- ACTIONS -->
                <v-container class="text-end pa-0">
                    <v-row>
                        <v-col >
                            <v-btn class="primary" @click="confirmThePurchase(isLoggedIn, cartItems)">
                                Potvrdi kupovinu
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                <!--*******-->
            </v-container>

            <!--OVAJ DIO RENDERA SE SAMO KAD JE KOŠARICA PRAZNA -->
            <v-container v-else-if="cartItems.length == 0 ">
                <v-row>
                    <v-col>
                        <p class="text-subtitle-1">Trenutno nemate ništa u košarici.</p>
                    </v-col>
                </v-row>
            </v-container>
            <!--************************************************-->
            <!-- ***** OVERLAY if loading ****** -->
            <v-overlay :value="showOverlay">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
            </v-overlay>
            <!-- ******************************* -->
        </v-container>
    </v-container>
</template>

<script>
import Header from "@/components/layout/TheHeader";
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: 'shoppingCart',
    components: { Header },
    data: () => ({
        overlay: false,
    }),
    mounted() {
        if(this.cartItems.length > 0)
            this.fetchCartData()
    },
    computed: {
        totalPrice () {
            let sum = 0
            this.cartItems.forEach((item, index) => {
            sum = sum + item.quantity * this.products[index].cijena
            })

            return sum.toFixed(2)
        },
        shipping () {
            return this.totalPrice > 200 ? 'besplatna' : '8.00'
        },
        finalPrice () {
            return this.totalPrice > 200 ? this.totalPrice : (Number(this.totalPrice) + 8).toFixed(2)
        },
        showOverlay () {
            return this.isLoading
        },

        ...mapGetters('checkout', ['isLoading']),
        ...mapGetters('cart', ['cartItems', 'products', 'isCartDataLoading']),
        ...mapGetters('auth', ['isLoggedIn']),
    },
    methods: {
        // checkout
        confirmThePurchase(isLoggedIn, payload){
            if(!isLoggedIn)
                this.$router.push('/prijava')
            else
            {
                console.log('Košarica:  ' + JSON.stringify(payload))
                const cartData = {
                    proizvodi: payload,
                }
                this.$store
                    .dispatch('checkout/callCheckout', cartData, { root: true })
                    .catch( err => {
                        console.log("Greška na checkoutu: " + err)
                    })
                    .then(setTimeout(() => { this.$router.push('trgovina')}, 1500))
                    .then(setTimeout(() => { this.clearCart() }, 1500))
                console.log('Kupovina obavljena.') 
            }
        },
        // fetch cart items additional data
        fetchCartData() {
            let IDs = this.cartItems.map(x => x.id)
            
            console.log('Ovi IDevi se šalju: ' + IDs)
            this.$store
                .dispatch('cart/fetchCartProducts', IDs, {root: true})
        },
    
        ...mapActions('cart', ['removeFromCart', 'incrementQuantity', 'decrementQuantity', 'clearCart'])
    }
}
</script>

<style>
.data-cart-totals {
    display: block;
    float: right;
}
.cart-totals {
    list-style: none;
}
.cart-actions {
    display: block;
    float: right;
}
</style>