<template>
  <header class="pt-6 px-20 fixed w-full top-0">
    <NavBar @update:sidebar="handleOpenSidebar" />
  </header>

  <HeroSection />
  <SidebarMenu :is-active="isSidebarActive" @update:isActive="handleCloseSidebar" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import NavBar from './components/layout/NavBar.vue';
  import HeroSection from './components/layout/HeroSection.vue';
  import SidebarMenu from './components/layout/SidebarMenu.vue';

  const isSidebarActive = ref(false);

  const handleOpenSidebar = () => {
    isSidebarActive.value = true;
  };

  const handleCloseSidebar = () => {
    isSidebarActive.value = false;
  };
</script>