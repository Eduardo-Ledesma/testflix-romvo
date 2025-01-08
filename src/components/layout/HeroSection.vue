<template>
  <main class="h-screen">
    <div class="flex items-center pl-20 px-16 h-screen max-w-[1900px] mx-auto">
      <div class="flex flex-col mt-96 min-w-fit">
        <h2 class="font-medium tracking-widest text-xl pl-2 text-white">ORIGINAL DE TESTFLIX</h2>
        <h1 class="font-medium text-base-light text-9xl tracking-[16px]">BREAKING BAD</h1>

        <div class="mt-6 flex items-center gap-4">
          <ActionButton text="REPRODUCIR">
            <PlayIcon class="w-5 h-5 text-white" />
          </ActionButton>
          <ActionButton text="MI LISTA" type="semi-transparent">
            <PlusIcon class="w-5 h-5 text-white" />
          </ActionButton>
        </div>
      </div>

      <GallerySection class="mt-4" />
    </div>
    
  </main>
</template>

<script setup lang="ts">
  import ActionButton from '../reusables/ActionButton.vue';
  import PlayIcon from '../icons/PlayIcon.vue';
  import PlusIcon from '../icons/PlusIcon.vue';
  import GallerySection from '../gallery/GallerySection.vue';
</script>

<style scoped>
  main {
    background: url(/img/desktop-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
</style>
