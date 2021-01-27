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

export default {
    name: "shopHome",
    components: { SearchBar, PromoBanner, Page },
    data: () => ({

    })
}
</script>

<style scoped>

</style>
