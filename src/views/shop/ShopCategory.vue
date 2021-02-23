<template>
    <div>
    <SearchBar />
    <PromoBanner />
    <Page />
    </div>
</template>

<script>
import SearchBar from "@/components/shop/TheSearchBar"
import PromoBanner from "@/components/shop/PromoBanner"
import Page from "@/components/shop/productsPage/TheProductsPage"
import store from "@/store";

export default {
    name: "shopHome",
    components: { SearchBar, PromoBanner, Page },
    data: () => ({

    }),
     beforeRouteEnter(to, from, next) {
      store.dispatch('products/fetchProducts', to.params.id, {root: true})
      next()
    },
     beforeRouteUpdate(to, from, next) {
      store.dispatch('products/fetchProducts', to.params.id, {root: true})
      next()
    },
}
</script>

<style scoped>

</style>
