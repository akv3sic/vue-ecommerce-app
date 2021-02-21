<template>
<div>
    <!-- Hero -->
    <v-container>
        <v-row class="py-5 align-center">
            <v-col  cols="12" md="6" class="">
                <h1 class="ml-4">naša vizija.</h1>
                <p class="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit ut adipisci quisquam perspiciatis?</p>

                <!-- ******** -->
                <!-- Controls -->
                <!-- ******** -->
                <v-container class="px-0">
                    <v-btn color="primary ml-4 mr-2" href="https://docs.google.com/document/d/1JzsLHWfdC9LEyuukmeVUxToQmCsCsy9Hc-fkxp9aitw/edit?usp=sharing" target="_blank">Pogledajte viziju</v-btn>

                    <!-- Src code button and srcCodeDialog -->
                    <v-dialog
                    v-model="srcCodeDialog"
                    max-width="400"
                    transition="dialog-bottom-transition"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn 
                            text
                            class="code-btn mx-2"
                            v-bind="attrs"
                            v-on="on"
                            >
                            <v-icon>mdi-github</v-icon>
                            Izvorni kod
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="">
                        
                        </v-card-title>

                        <v-card-text>
                            <ul>
                                <li>
                                  <a href="https://github.com/antekvesic/dashdetailing-frontend" target="_blank"> Frontend repozitorij </a>   
                                </li>
                                <li>
                                  <a href="https://github.com/VjekoRezic/FlaskBackend" target="_blank"> Backend repozitorij </a>  
                                </li>
                            </ul>
                            
                        </v-card-text>


                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="srcCodeDialog = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-container>
                
            </v-col>
            <v-col cols="12" md="6">
                <div class="github-hero-art" :class="{'mt-10' : $vuetify.breakpoint.mdAndDown}">
                    <v-row justify="center" class="pa-0 ma-0">
                        <div :class="githubHeroItem" class=""></div>
                        <div :class="githubHeroItem" class="green-1"></div>
                        <div :class="githubHeroItem" class="gray-1"></div>
                        <div :class="githubHeroItem" class="gray-2"></div>
                        <div :class="githubHeroItem" class=""></div>
                    </v-row>
                    <v-row justify="center" class="pa-0 ma-0">
                        <div :class="githubHeroItem" class="green-2"></div>
                        <div :class="githubHeroItem" class="gray-1"></div>
                        <div :class="githubHeroItem" class="green-3"></div>
                        <div :class="githubHeroItem" class="gray-2"></div>
                        <div :class="githubHeroItem" class="green-2"></div>
                    </v-row>
                    <v-row justify="center" class="pa-0 ma-0">
                        <div :class="githubHeroItem" class=""></div>
                        <div :class="githubHeroItem" class="green-3"></div>
                        <div :class="githubHeroItem" class="green-4"></div>
                        <div :class="githubHeroItem" class="green-2"></div>
                        <div :class="githubHeroItem" class="green-3"></div>
                    </v-row>
                    <v-row justify="center" class="pa-0 ma-0">
                        <div :class="githubHeroItem" class="green-2"></div>
                        <div :class="githubHeroItem" class=""></div>
                        <div :class="githubHeroItem" class="gray-2"></div>
                        <div :class="githubHeroItem" class=""></div>
                        <div :class="githubHeroItem" class="green-2"></div>
                    </v-row>
                </div>
                
            </v-col>
  
        </v-row>  
    </v-container>

    <!-- Korištene tehnologije start -->
    <v-container fluid blue-grey lighten-5 class="mt-3">
      <v-row class="py-10">
          <v-col cols="6" sm="3">
              <v-img class="img-grayscale" src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png" height="50px" contain></v-img>
          </v-col>
          <v-col cols="6" sm="3">
              <v-img class="img-grayscale" src="https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png" height="50px" contain></v-img>
          </v-col>
          <v-col cols="6" sm="3">
              <v-img class="img-grayscale" src="https://seeklogo.com/images/F/flask-logo-44C507ABB7-seeklogo.com.png" height="50px" contain></v-img>
          </v-col>
          <v-col cols="6" sm="3">
              <v-img class="img-grayscale" src="https://seeklogo.com/images/M/MySQL-logo-17DB4E5FD6-seeklogo.com.png" height="50px" contain></v-img>
          </v-col>
         
      </v-row>
    </v-container>
    <!-- Korištene tehnologije end -->
    
</div>
</template>

<script>
export default {
    name: "Projekt",
    data: () => ({
        srcCodeDialog: false,
  }),
  computed: {
      githubHeroItem() {
        let classString = ''
        switch (this.$vuetify.breakpoint.name) {
            case 'xs':
            classString = 'github-hero-item smaller'
            break
            case 'sm':
            classString = 'github-hero-item smaller'
            break
            case 'md':
            classString = 'github-hero-item smaller'
            break
            case 'lg':
            classString = 'github-hero-item'
            break
            case 'xl':
            classString = 'github-hero-item'
            break
        }
        return classString
            
        }
  }
}
</script>

<style>
/* Github button */
.code-btn:hover {
    border: 1px solid black ;
}
/****************************************/
/* HERO - Github contribution art  START*/
/****************************************/

.github-hero-art {
    max-width: 545px;
    min-width: 320px;
}

.github-hero-item {
    width: 87px;
    height: 87px;
    margin: 11px;
    border-radius: 10px;
}
.smaller {
    height: 49px;
    width: 49px;
    margin: 5px;
}
/* colors */
.green-1 {
    background-color: #d6f6e4;
}
.green-2 {
    background-color: #56c288;
}
.green-3 {
    background-color: #63ac8c;
}
.green-4 {
    background-color: #033b1b;
}
.gray-1 {
    background-color: #f9f9f9;
}
.gray-2 {
    background-color: #ccc;
}



/***************************************/
/* HERO - Github contribution art END */
/**************************************/



/* Logotipi tehnologija */
.img-grayscale {
  filter: grayscale(100%);
}
.img-grayscale:hover {
  filter: grayscale(45%);
}

</style>