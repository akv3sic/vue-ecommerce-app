<template>
    <v-container fluid class="pa-0 mt-13">
        <v-row dense>
            <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            :md="card.flex"
            >
            <v-card>
                <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.8)"
                :height="card.height"
                >
                <v-card-title v-text="card.title"></v-card-title>
                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon :to="card.to" v-if="card.search">
                    <v-icon color="white">mdi-magnify</v-icon>
                </v-btn>

                </v-card-actions>
                </v-img>


            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "PromoBanner",
    data: () => ({
      cards: [
        { title: '3M proizvodi', src: 'https://images-na.ssl-images-amazon.com/images/I/717Gs4SySEL._AC_SL1500_.jpg', flex: 12, height:'240px', to: "", search: false},
        { title: 'Profesionalne polirke', src: 'https://res.cloudinary.com/sonax-gmbh/image/fetch/c_fill,h_823,q_auto:best,w_1920/c_crop,h_823,q_auto:best,w_1646,x_232,y_0/ar_2:1,c_scale,h_280,q_auto:eco,w_560/dpr_2,f_auto/https://sonax.de/var/site/storage/images/5/6/9/1/41965-3-eng-ROW/Image20191104143740.png', flex: 5, height:'210px', to: "/kategorija/9/poliranje", search: true },
        { title: 'Njega motornog prostora', src: 'https://images.pexels.com/photos/3689314/pexels-photo-3689314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', flex: 7, height:'210px', to: "/kategorija/12/motorni-prostor", search: true },
      ],
    }),
}
</script>