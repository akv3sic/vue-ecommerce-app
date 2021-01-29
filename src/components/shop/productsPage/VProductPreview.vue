<template>
<v-col cols="12" sm="6" md="4" lg="3" xl="2">
    <v-card to="/product" class="mx-auto my-2" width="300px" flat>
        <v-img :src=product.imgLink contain height="200"></v-img>
        <v-card-title class="py-0">{{ product.name }}</v-card-title>
         <v-card-text class="py-0">
            {{ product.price }} KM
        </v-card-text>
    </v-card>
</v-col>
</template>

<script>

export default {
    name: 'ProductPreview',
    props: {
        product: {type: Object, required: true}
    }
    
}
</script>

<style scoped>

</style>