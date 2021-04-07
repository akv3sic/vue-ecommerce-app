<template>
<div class="flex">
    <v-row align="center" class="my-auto">
        <v-col class="my-auto"> 
            <v-card class="mx-auto my-5" max-width="600px" min-width="250px" elevation="6">
                <div>
                    <v-tabs v-model="tab" show-arrows background-color="" icons-with-text grow>
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab v-for="(tab, i) in tabs" :key="i">
                            <h4 class="pr-2 caption">{{ tab.name }}</h4>
                            <v-icon large>{{ tab.icon }}</v-icon>
                        </v-tab>
                        <v-tab-item>
                            <v-card class="px-4 pt-1">
                                <v-card-text>
                                    <v-form ref="loginForm" v-model="valid" lazy-validation>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" class="mb-2">
                                                <v-text-field v-model="loginPassword" :append-icon="showLoginPassword?'mdi-eye':'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="showLoginPassword ? 'text' : 'password'" name="input-10-1" label="Lozinka" hint="Minimalno 8 znakova." counter @click:append="showLoginPassword = !showLoginPassword"></v-text-field>
                                            </v-col>
                                            <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                                <v-btn x-large block :disabled="!valid" color="primary" @click="validateAndLogIn">Prijava</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card class="px-4">
                                <v-card-text>
                                    <v-form ref="registerForm" v-model="valid" lazy-validation>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="ime" :rules="[rules.required]" label="Ime" maxlength="20" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="prezime" :rules="[rules.required]" label="Prezime" maxlength="20" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="phoneNum" label="Broj mobitela" hint="Ovaj podatak možete unijeti i kasnije."></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="password" :append-icon="showRegPassword1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="showRegPassword1 ? 'text' : 'password'" name="input-10-1" label="Lozinka" hint="Minimalno 8 znakova." counter @click:append="showRegPassword1 = !showRegPassword1"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field block v-model="verify" :append-icon="showRegPassword2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="showRegPassword2 ? 'text' : 'password'" name="input-10-1" label="Potvrdite lozinku" counter @click:append="showRegPassword2 = !showRegPassword2"></v-text-field>
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                                <v-btn x-large block :disabled="!valid" color="primary" @click="validateAndRegister">Izradi</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </div>
        </v-card>
    </v-col>
    </v-row>
    <ThinFooter />
</div>
</template>

<script>
import ThinFooter from "@/components/layout/TheThinFooter";

export default {
    name: "Login",
    components: { ThinFooter },
    computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Lozinke se ne podudaraju.";
    }
    },
    methods: {
        
        // metoda za validaciju i login
        validateAndLogIn() {
        if (this.$refs.loginForm.validate()) {

            const USER = {
                email: this.loginEmail,
                lozinka: this.loginPassword,
                admin_required: 0               // to be deleted in future
            }
            console.log(USER)
            this.$store
                .dispatch('auth/logIn', USER, { root: true })
                .then(() => this.$router.go(-1))
                .catch( err => {
                    console.log(err)
                })
        }
        },
        // metoda za validaciju i registraciju
        validateAndRegister() {
        if (this.$refs.registerForm.validate()) {
    
            const USER = {
                email: this.email,
                lozinka: this.password,
                ime: this.ime,
                prezime: this.prezime,
                mobitel: this.phoneNum
            }
            console.log(USER)
            this.$store
                .dispatch('auth/register', USER, { root: true })
                .catch( err => {
                    console.log("Greska pri registraciji: " + err)
                })
        }
        },
        reset() {
        this.$refs.form.reset();
        },
        resetValidation() {
        this.$refs.form.resetValidation();
        }
    },
    data: () => ({
        dialog: true,
        tab: 0,
        tabs: [
            {name:"Prijava", icon:"mdi-login"},
            {name:"Novi račun", icon:"mdi-account-plus"}
        ],
        valid: true,
        
        ime: "",
        prezime: "",
        email: "",
        phoneNum: null,
        password: "",
        verify: "",
        loginPassword: "",
        loginEmail: "",
        loginEmailRules: [
        v => !!v || "Obavezno polje.",
        v => /.+@.+\..+/.test(v) || "Unesite ispravnu e-mail adresu."
        ],
        emailRules: [
        v => !!v || "Obavezno polje.",
        v => /.+@.+\..+/.test(v) || "Unesite ispravnu e-mail adresu."
        ],

        showLoginPassword: false,
        showRegPassword1:false,
        showRegPassword2: false,
        rules: {
        required: value => !!value || "Obavezno polje.",
        min: v => (v && v.length >= 8) || "Minimalno 8 znakova."
        }
    })
}
</script>

<style scoped>

</style>