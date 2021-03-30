<template>
    <div style="height: 100%;">
        <v-card class="mb-2">
            <v-container>
                <v-row>
                    <v-col>
                        <v-row>
                            <v-col>
                                <v-icon color="black" large>mdi-account-details-outline</v-icon>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <h4 class="text-uppercase text-h5 font-weight-bold">Moji podatci</h4>
                                <p class="ma-0">Ovdje možete pregledati i promijeniti Vaše podatke.</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-card>
            <v-container>
                <v-row>
                    <v-col>
                        <v-text-field
                        v-model="user.ime"
                            label="Ime"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                        v-model="user.prezime"
                            label="Prezime"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                        v-model="user.email"
                            disabled
                            label="E-mail adresa"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                        v-model="user.mobitel"
                            label="Broj mobitela"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <div class="actions py-7">
                    <v-btn class="primary" @click="updateUserDetails">Spremi promjene</v-btn>
                </div>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'MyDetails',
    data: () => ({
    
    }),
   created() {
        this.fetchUserDetails();
    },
    methods: {
        fetchUserDetails() {
            this.$store
                .dispatch('userAccountDetails/fetchUserDetails', null, {root: true})
        },
        updateUserDetails() {
            this.$store
                .dispatch('userAccountDetails/updateUserDetails', this.user, { root: true })
                .catch( err => {
                    console.log(err)
                })
        }
    },
    computed: {
        ...mapGetters('userAccountDetails', ['isLoading', 'user'])
   }
}
</script>

<style scoped>

</style>