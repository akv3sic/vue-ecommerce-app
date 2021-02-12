<template>
<v-col cols="12" sm="6" md="4" lg="3" xl="2">
    <v-card :to="productLink" class="mx-auto my-2" width="" flat>
        <v-img :src=product.url_slike contain height="200"></v-img>
        <v-card-title class="py-0 v-card__title">{{ product.ime }}</v-card-title>
         <v-card-text class="py-0">
            {{ product.cijena }} KM
        </v-card-text>
    </v-card>
</v-col>
</template>

<script>

export default {
    name: 'ProductPreview',
    props: {
        product: {type: Object, required: true}
    },
    computed: {
        productLink() {
            return {
                name: "product",
                params: {
                    id: this.product.id,
                    slug: this.product.slug
                    }
            }
        }
    }
    
}
</script>

<style scoped>
.v-card__title {
    overflow-wrap: anywhere;
    word-wrap: break-word;
    word-break: normal;
}
</style>