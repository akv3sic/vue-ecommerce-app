<template>
<v-container blue-grey lighten-5 fluid fill-height class="full">
    <v-row align="center" class="my-auto">
        <v-col class="my-auto"> 
            <v-card class="mx-auto my-5 px-3" max-width="400px" min-width="250px" elevation="6">
                <div class="d-flex justify-center pt-4">
                    <img :src="require('../../assets/logo.svg')" height="30"/>
                </div>
                <v-card-text>
                    <v-form ref="loginForm" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                            </v-col>
                            <v-col cols="12" class="mb-2">
                                <v-text-field v-model="password" :append-icon="showPassword?'mdi-eye':'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-1" label="Lozinka" hint="Minimalno 8 znakova." counter @click:append="showPassword = !showPassword"></v-text-field>
                            </v-col>
                            <v-col class="d-flex" cols="12" sm="6" xsm="12">
                            </v-col>
                            
                            <v-col class="d-flex" align-end>
                                <v-btn large block :disabled="!valid" color="primary" @click="validateAndLogIn">Prijava</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
        </v-card>
    </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'AdminLogin',
    data: () => ({
        valid: true,
        password: "",
        email: "",
        emailRules: [
        v => !!v || "Obavezno polje.",
        v => /.+@.+\..+/.test(v) || "Unesite ispravnu e-mail adresu."
        ],
        showPassword: false,
        rules: {
        required: value => !!value || "Obavezno polje.",
        min: v => (v && v.length >= 8) || "Minimalno 8 znakova."
        }
    }),
    methods: {
        validateAndLogIn() {
        if (this.$refs.loginForm.validate()) {

            const user = {
                email: this.email,
                lozinka: this.password,
                admin_required: 1
            }
            console.log(user)
            this.$store
                .dispatch('auth/logIn', user, { root: true })
                .then(() => this.$router.push('admin'))
                .catch( err => {
                    console.log(err)
                })
        }
        },
    }
}
</script>

<style>
.full{
    height: 100vh;
}
</style>