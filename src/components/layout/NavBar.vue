<template>
    <navbar class="flex mx-auto pr-6 justify-between max-w-[1900px]">
      <img src="../../assets/LITEFLIX.svg" alt="testflix logo" class="h-10" />

      <ul class="flex items-center gap-8">
        <li>
          <ButtonWithIcon text="AGREGAR PELICULA" :class="'text-lg font-medium gap-6 mr-6'">
            <div class="rounded-full bg-base-light p-[3px]">
              <ArrowRightIcon class="w-4 h-4 text-base-dark" />
            </div>
          </ButtonWithIcon>
        </li>

        <li>
          <button class="hover:scale-110 transition-transform">
            <MenuIcon @click="handleOpenMenu" class="w-6 h-6 text-white" />
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
    import ButtonWithIcon from '../reusables/ButtonWithIcon.vue';
    import ArrowRightIcon from '../icons/ArrowRightIcon.vue';
    import MenuIcon from '../icons/MenuIcon.vue';
    import NotificationIcon from '../icons/NotificationIcon.vue';

    const handleOpenMenu = () => {
        console.log('Menu opened');
    }
</script>