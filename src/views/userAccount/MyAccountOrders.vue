<template>
    <div style="height: 100%;">
        <v-card class="mb-2" height="30%">
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
        <v-card height="50%">
        <v-container class="mb-2">
            <v-row>
                <v-col>
                    <p>Još nemate narudžbi.</p>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
    </div>
    
</template>

<script>
export default {
    name: 'MyOrders'
}
</script>

<style scoped>

</style>