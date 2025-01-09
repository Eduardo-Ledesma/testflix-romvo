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

          <ActionButton @click="alreadyInList = !alreadyInList" text="MI LISTA" type="semi-transparent" class="hidden sm:flex">
            <ReadyIcon v-if="alreadyInList" class="w-5 h-5 text-white" />
            <PlusIcon v-else class="w-5 h-5 text-white" />
          </ActionButton>

          <ActionButton @click="alreadyInList = !alreadyInList" text="" type="semi-transparent" class="!w-[45px] !gap-0 sm:hidden">
            <ReadyIcon v-if="alreadyInList" class="w-5 h-5 text-white" />
            <PlusIcon v-else class="w-5 h-5 text-white" />
          </ActionButton>
        </div>
      </div>

      <GallerySection class="hidden lg:flex mt-4" />
    </div>
    
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ActionButton from '../reusables/ActionButton.vue';
  import PlayIcon from '../icons/PlayIcon.vue';
  import PlusIcon from '../icons/PlusIcon.vue';
  import ReadyIcon from '../icons/ReadyIcon.vue';
  import GallerySection from '../gallery/GallerySection.vue';

  const alreadyInList = ref(false);
</script>

<style scoped>
  main {
    background: linear-gradient(to top, #242424 0%, rgba(24, 24, 24, 0.3) 15%, transparent 21%), url(/img/desktop-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;

    @media (min-width: 1024px) {
      background: url(/img/desktop-bg.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
    }
  }
</style>
