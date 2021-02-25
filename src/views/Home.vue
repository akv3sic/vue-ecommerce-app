<template>
  <div>
    <Header />
    <Hero />
  </div>
</template>

<script>
import Hero from "@/components/home/TheHero"
import Header from "@/components/layout/TheHeader";


export default {
name: "Home",
  components: {
    Hero, Header
  }
}
</script>