<template>
    <v-form>
        <v-row justify="center">
            <v-col cols="6">
                <v-autocomplete
                    v-model="model"
                    :loading="isLoading"
                    :search-input.sync="search"
                    color="grey"
                    hide-no-data
                    no-data-text="Nema rezultata za traženi pojam."
                    hide-selected
                    placeholder=""
                    label="Pretražite trgovinu"
                    single-line
                    append-icon="mdi-magnify"
                    return-object
                ></v-autocomplete>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    name: "SearchBar",
    data: () => ({
        model: null,
        isLoading: false,
        search: null
    })
}
</script>>

<style scoped>

</style>