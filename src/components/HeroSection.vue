<template>
  <main class="flex items-center px-12 h-screen">
    <div class="flex flex-col mt-20">
      <h2 class="font-medium tracking-widest text-xl pl-2 text-white">ORIGINAL DE TESTFLIX</h2>
      <h1 class="font-medium text-base text-9xl tracking-[16px]">BREAKING BAD</h1>

      <div class="mt-10">
        <ActionButton text="REPRODUCIR">
          <PlayIcon class="w-5 h-5 text-white" />
        </ActionButton>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import ActionButton from './Buttons/ActionButton.vue';
  import PlayIcon from './icons/PlayIcon.vue';
</script>

<style scoped>
  main {
    background: url(/img/dashboard-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
</style>
