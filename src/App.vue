<template>
  <header class="pt-6 pb-4 px-6 md:px-14 lg:px-20 w-full absolute">
    <NavBar @update:openSidebar="handleOpenSidebar" @update:openModal="handleOpenModal" />
  </header>

  <HeroSection />
  <SidebarMenu :is-active="isSidebarActive" @update:closeSidebar="isSidebarActive = false" @update:openModal="handleOpenModal" />
  <ModalWrapper :is-modal-active="isModalActive" @update:closeModal="isModalActive = false">
    <MovieFormWrapper @update:closeModal="isModalActive = false" />
  </ModalWrapper>

  <div class="flex lg:hidden bg-dark w-full">
    <div class="w-full py-10 mx-auto">
      <GallerySection />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import NavBar from './components/layout/NavBarDesktop.vue';
  import HeroSection from './components/layout/HeroSection.vue';
  import SidebarMenu from './components/layout/SidebarMenu.vue';
  import ModalWrapper from './components/reusables/ModalWrapper.vue';
  import MovieFormWrapper from './components/movie-section/MovieFormWrapper.vue';
  import GallerySection from './components/gallery/GallerySection.vue';

  const isSidebarActive = ref(false);
  const isModalActive = ref(false);

  const handleOpenSidebar = () => {
    isSidebarActive.value = true;
  };

  const handleOpenModal = () => {
    isModalActive.value = true;
  };
</script>