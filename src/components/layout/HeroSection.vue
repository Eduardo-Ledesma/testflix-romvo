<template>
  <main class="min-h-sceen h-full">
    <div class="flex items-center justify-center md:justify-left px-2 md:pl-20 md:px-16 h-screen max-w-[1900px] mx-auto">
      <div class="flex flex-col mt-80 items-center md:items-start md:mt-96 min-w-fit">
        <h2 class="font-medium tracking-widest text-xl pl-2 text-white">ORIGINAL DE TESTFLIX</h2>
        <h1 class="font-medium text-base-light text-center text-6xl sm:text-8xl md:text-left md:text-9xl tracking-[16px] lg:max-w-[500px] xl:max-w-full" >BREAKING BAD</h1>

        <div class="mt-6 flex items-center gap-4 w-full">
          <ActionButton text="REPRODUCIR">
            <PlayIcon class="w-5 h-5 text-white" />
          </ActionButton>

          <ActionButton text="MI LISTA" type="semi-transparent" class="hidden sm:flex" @click="emit('update:openModal', 'list')">
            <PlusIcon class="w-5 h-5 text-white" />
          </ActionButton>

          <ActionButton text="" type="semi-transparent" class="!w-[45px] !gap-0 sm:hidden" @click="emit('update:openModal', 'list')">
            <PlusIcon class="w-5 h-5 text-white" />
          </ActionButton>
        </div>
      </div>

      <GallerySection class="hidden lg:flex mt-4" />
    </div>
    
  </main>
</template>

<script setup lang="ts">
  import ActionButton from '../reusables/ActionButton.vue';
  import PlayIcon from '../icons/PlayIcon.vue';
  import PlusIcon from '../icons/PlusIcon.vue';
  import GallerySection from '../gallery/GallerySection.vue';
  import { type Modal } from '@/utils/types';

  const emit = defineEmits<{
      (e: 'update:openModal', modal: Modal): void;
  }>();
</script>

<style scoped>
  main {
    background-image: linear-gradient(to top, #242424 0%, rgba(24, 24, 24, 0.3) 15%, transparent 21%), url(/img/desktop-bg.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top, calc(50% + 20px) top;

    @supports (background-image: url('/img/desktop-bg.webp')) {
      background-image: linear-gradient(to top, #242424 0%, rgba(24, 24, 24, 0.3) 15%, transparent 21%), url(/img/desktop-bg.webp);
    }
    
    @media (min-width: 600px) {
      background-position: center top;
    }

    @media (min-width: 1024px) {
      background-image: url(/img/desktop-bg.webp);

      @supports (background-image: url('/img/desktop-bg.webp')) {
        background-image: url(/img/desktop-bg.webp);
      }
    }
  }
</style>
