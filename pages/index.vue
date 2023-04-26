<template>
  <div class="slp-container slp-layout">
    <Nav />
    <Hero />
    <Work />
    <Footer />
  </div>
</template>

<script setup>
import Nav from "~~/components/Nav.vue";
import Hero from "~~/components/Hero.vue";
import Work from "~/components/Work.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.slp-layout::after {
  content: "";
  @apply absolute
    w-full
    bg-cream
    h-[464px]
    left-0
    bottom-[-400px]
    -z-20;
}
</style>
