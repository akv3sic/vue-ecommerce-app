<template>
    <div>
    <SearchBar />
    <PromoBanner />
    </div>
</template>

<script>
import SearchBar from "@/components/shop/TheSearchBar"
import PromoBanner from "@/components/shop/PromoBanner"

export default {
    name: "shopHome",
    components: { SearchBar, PromoBanner },
    data: () => ({

    })
}
</script>

<style scoped>

</style>
