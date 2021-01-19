<template>
  <v-carousel
      cycle
      interval="5000"
      hide-controls
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      style=""
      height="100vh"
      v-model="carrouselIndex"
      >
      <v-carousel-item
        eager
        reverse-transition="fade"
        transition="fade"
        >
        <v-img 
        src="https://images.unsplash.com/photo-1605437211365-7257403ea287?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        height="100%"
        gradient="to top right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)"
        ></v-img> 
        <div class="mainPitch">
          <div class="hero-text">
                <h3>mi smo spremni.</h3>
                <button class="btn btn-rezerviraj">Rezervirajte termin.</button>
            </div>
        </div>
        
      </v-carousel-item>
      <v-carousel-item
        eager
        reverse-transition="fade"
        transition="fade"
        > 
        <v-img 
        src="https://images-na.ssl-images-amazon.com/images/I/717Gs4SySEL._AC_SL1500_.jpg"
        height="100%"
        gradient="to top right, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
        ></v-img>
        <div class="mainPitch">
          <div class="hero-text">
                <h3>samo najbolje <br> za Vas.</h3>
                <button class="btn btn-rezerviraj">Istražite trgovinu.</button>
            </div>
        </div>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
  name: "Hero",
  data: () => ({

  })
};
</script>

<style scoped>
  .hero-text{
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 3em;
  }
  .btn{
      border: 1px solid #fff;
      background: none;
      padding: 10px 20px;
      font-size: 20px;
      cursor: pointer;
      transition: 0.7s;
  }
  .btn-rezerviraj{
      color: #fff;
  }
</style>