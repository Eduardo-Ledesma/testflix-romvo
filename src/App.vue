<template>
  <header class="pt-6 pb-4 px-6 md:px-14 lg:px-20 w-full absolute">
    <NavBarLayout @update:openSidebar="handleOpenSidebar" @update:openModal="handleOpenModal" />
  </header>

  <HeroSection @update:openModal="handleOpenModal" />

  <SidebarMenu :is-active="isSidebarActive" @update:closeSidebar="isSidebarActive = false" @update:openModal="handleOpenModal" />
  
  <ModalWrapper :is-modal-active="isModalActive" @update:closeModal="isModalActive = false">
    <MovieFormWrapper @update:closeModal="isModalActive = false" />
  </ModalWrapper>

  <ModalWrapper :is-modal-active="listModalActive" @update:closeModal="listModalActive = false" :modal-height-desktop="'md:min-h-[500px]'">
    <ModalList @update:goHome="listModalActive = false" />
  </ModalWrapper>

  <div class="flex lg:hidden bg-dark w-full">
    <div class="w-full py-10 mx-auto">
      <GallerySection />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import NavBarLayout from './components/layout/NavBarDesktop.vue';
  import HeroSection from './components/layout/HeroSection.vue';
  import SidebarMenu from './components/layout/SidebarMenu.vue';
  import ModalWrapper from './components/reusables/ModalWrapper.vue';
  import MovieFormWrapper from './components/movie-section/MovieFormWrapper.vue';
  import GallerySection from './components/gallery/GallerySection.vue';
  import ModalList from './components/reusables/ModalList.vue';
  import { type Modal } from '@/utils/types';

  const isSidebarActive = ref(false);
  const isModalActive = ref(false);
  const listModalActive = ref(false);

  const handleOpenSidebar = () => {
    isSidebarActive.value = true;
  };

  const handleOpenModal = (modal: Modal) => {
    if(modal === 'form') {
      isModalActive.value = true;
    } else if(modal === 'list') {
      listModalActive.value = true;
    }
  };
</script>

<style>
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.3s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>