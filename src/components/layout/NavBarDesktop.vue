<template>
    <NavBarMobile v-if="isMobile" @update:openSidebar="handleOpenMenu" />

    <nav v-else class="flex mx-auto pr-6 justify-between max-w-[1900px]">
      <img src="@/assets/LITEFLIX.svg" alt="testflix logo" class="h-10" />

      <ul class="flex items-center gap-8">
        <li>
          <ButtonWithIcon @click="handleOpenModal" text="AGREGAR PELICULA" :class="'text-lg font-medium gap-6 mr-6'">
            <div class="rounded-full bg-base-light p-[3px]">
              <ArrowRightIcon class="w-4 h-4 text-base-dark" />
            </div>
          </ButtonWithIcon>
        </li>

        <li>
          <button @click="handleOpenMenu" class="hover:scale-110 transition-transform">
            <MenuIcon class="w-6 h-6 text-white" />
          </button>
        </li>
      
        <li>
          <NotificationDropDown />
        </li>

        <li>
          <button class="hover:scale-110 transition-transform">
            <img src="/img/avatar-profile.png" alt="testflix logo" class="h-10" />
          </button>
        </li>
      </ul>
    </nav>
</template>

<script setup lang="ts">
    import ButtonWithIcon from '../reusables/ButtonWithIcon.vue';
    import ArrowRightIcon from '../icons/ArrowRightIcon.vue';
    import MenuIcon from '../icons/MenuIcon.vue';
    import { useWindowSize } from '@/composables/useWindowSize';
    import NavBarMobile from './NavBarMobile.vue';
    import NotificationDropDown from './NotificationDropDown.vue';

    const { isMobile } = useWindowSize();

    const emit = defineEmits(['update:openSidebar', 'update:openModal']);

    const handleOpenMenu = () => {
        emit('update:openSidebar');
    }

    const handleOpenModal = () => {
        emit('update:openModal');
    }
</script>