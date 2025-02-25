<template>
  <div>
    <Home />
    <About />
    <Services />
    <Academy />
    <Gallery />
    <Contact />
  </div>
</template>

<script setup>
import About from './about.vue';
import Academy from './academy.vue';
import Contact from './contact.vue';
import Gallery from './gallery.vue';
import Home from './home.vue';
import Services from './services.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #fff;
}
</style>