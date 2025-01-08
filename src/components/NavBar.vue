<template>
    <navbar class="flex mx-4 justify-between">
      <img src="../assets/LITEFLIX.svg" alt="testflix logo" class="h-10" />

      <ul class="flex items-center gap-8">
        <li>
          <ButtonWithIcon text="AGREGAR PELICULA" :class="'text-lg font-medium gap-6 mr-6'">
            <div class="rounded-full bg-base p-[3px]">
              <ArrowRight class="w-4 h-4 text-base-dark" />
            </div>
          </ButtonWithIcon>
        </li>

        <li>
          <button class="hover:scale-110 transition-transform">
            <MenuIcon class="w-6 h-6 text-white" />
          </button>
        </li>
      
        <li>
          <button class="hover:scale-110 transition-transform">
            <NotificationIcon class="w-6 h-6 text-white" />
          </button>
        </li>

        <li>
          <button class="hover:scale-110 transition-transform">
            <img src="/img/avatar-profile.png" alt="testflix logo" class="h-10" />
          </button>
        </li>
      </ul>
    </navbar>
</template>

<script setup lang="ts">
    import ButtonWithIcon from './Buttons/ButtonWithIcon.vue';
    import ArrowRight from './icons/ArrowRight.vue';
    import MenuIcon from './icons/MenuIcon.vue';
    import NotificationIcon from './icons/NotificationIcon.vue';
</script>