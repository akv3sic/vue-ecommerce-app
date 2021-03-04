<template>
    <div class="pa-2">
    <Header/>
    <SearchBar />
    <PromoBanner />
    <Page />
    </div>
</template>

<script>
import Header from "@/components/layout/TheHeader";
import SearchBar from "@/components/shop/TheSearchBar"
import PromoBanner from "@/components/shop/PromoBanner"
import Page from "@/components/shop/productsPage/TheProductsPage"

export default {
    name: "shopHome",
    components: { Header, SearchBar, PromoBanner, Page },
    data: () => ({

    }),
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            this.$store
                .dispatch('products/fetchProducts', {categoryId: null}, {root: true})
        }
    }
}
</script>

<style scoped>

</style>
