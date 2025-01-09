<template>
  <header class="pt-6 px-20 fixed w-full top-0">
    <NavBar @update:openSidebar="handleOpenSidebar" @update:openModal="handleOpenModal" />
  </header>

  <HeroSection />
  <SidebarMenu :is-active="isSidebarActive" @update:closeSidebar="isSidebarActive = false" @update:openModal="handleOpenModal" />
  <ModalWrapper :is-modal-active="isModalActive" @update:closeModal="isModalActive = false">
    <AddMovieForm @update:closeModal="isModalActive = false" />
  </ModalWrapper>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import NavBar from './components/layout/NavBar.vue';
  import HeroSection from './components/layout/HeroSection.vue';
  import SidebarMenu from './components/layout/SidebarMenu.vue';
  import ModalWrapper from './components/reusables/ModalWrapper.vue';
  import AddMovieForm from './components/layout/AddMovieForm.vue';

  const isSidebarActive = ref(false);
  const isModalActive = ref(false);

  const handleOpenSidebar = () => {
    isSidebarActive.value = true;
  };

  const handleOpenModal = () => {
    isModalActive.value = true;
  };
</script>