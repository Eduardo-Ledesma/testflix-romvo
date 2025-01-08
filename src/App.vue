<template>
  <header class="pt-6 px-20 fixed w-full top-0">
    <NavBar />
  </header>

  <HeroSection />
</template>

<script setup lang="ts">
  import NavBar from './components/layout/NavBar.vue';
  import HeroSection from './components/layout/HeroSection.vue';
</script>