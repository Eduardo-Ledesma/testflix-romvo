<template>
    <div>
        <Transition>
            <div v-if="isSidebarOpen" @click="handleCloseSidebar" class="fixed inset-0 bg-black/50 z-[99]"></div>
        </Transition>

        <Transition name="slide-fade">
            <aside v-if="isSidebarOpen"  class="fixed top-0 bottom-0 right-0 w-[760px] z-[100] sidebar px-14 py-6">
                <div class="flex flex-col gap-10">
                    <div class="flex justify-between items-center">
                        <button class="hover:scale-110 transition-transform">
                            <CloseIcon @click="handleCloseSidebar" class="w-5 h-5 text-white" />
                        </button>
                        
                        <div class="flex items-center gap-8">
                            <button class="hover:scale-110 transition-transform">
                                <NotificationIcon class="w-6 h-6 text-white" />
                            </button>
                            <button class="hover:scale-110 transition-transform">
                                <img src="/img/avatar-profile.png" alt="testflix logo" class="h-9" />
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col gap-20">
                        <ul class="flex flex-col gap-8">
                            <li v-for="option in LIST_OPTIONS" :key="option.id">
                                <ButtonWithIcon
                                    @mouseover="hoveredOption = option.id"
                                    @mouseleave="hoveredOption = null"
                                    :text="option.name" :class="'text-[22px] gap-8 mr-6 hover:font-semibold'" text-style="tracking-[5px]"
                                >
                                    <component 
                                        :is="hoveredOption === option.id ? option.iconFilled : option.icon" 
                                        class="w-7 h-7 text-white"
                                    />
                                </ButtonWithIcon>
                            </li>
                        </ul>

                        <ButtonWithIcon text="AGREGAR PELICULA" :class="'text-xl gap-8 mr-6 w-fit hover:font-semibold'" text-style="tracking-[5px]">
                            <div class="rounded-full bg-base-light p-[3px]">
                                <ArrowRightIcon class="w-5 h-5 text-base-dark" />
                            </div>
                        </ButtonWithIcon>

                        <ActionButton text="CERRAR SESIÓN" type="primary" />
                    </div>
                </div>
            </aside>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import CloseIcon from '../icons/CloseIcon.vue';
    import NotificationIcon from '../icons/NotificationIcon.vue';
    import ButtonWithIcon from '../reusables/ButtonWithIcon.vue';
    import ArrowRightIcon from '../icons/ArrowRightIcon.vue';
    import ActionButton from '../reusables/ActionButton.vue';
    import HomeIcon from '../icons/HomeIcon.vue';
    import HomeFilledIcon from '../icons/HomeFilledIcon.vue';
    import StarIcon from '../icons/StarIcon.vue';
    import StarFilledIcon from '../icons/StarFilledIcon.vue';
    import FilmIcon from '../icons/FilmIcon.vue';
    import FilmFilledIcon from '../icons/FilmFilledIcon.vue';
    import TicketIcon from '../icons/TicketIcon.vue';
    import TicketFilledIcon from '../icons/TicketFilledIcon.vue';
    import TrendingUpIcon from '../icons/TrendingUpIcon.vue';
    import TrendingUpFilledIcon from '../icons/TrendingUpFilledIcon.vue';
    import LikeIcon from '../icons/LikeIcon.vue';
    import LikeFilledIcon from '../icons/LikeFilledIcon.vue';
    import PlusIcon from '../icons/PlusIcon.vue';

    const props = withDefaults(
        defineProps<{
            isActive: boolean;
        }>(),
        {
            isActive: false,
        }
    );

    const emit = defineEmits(['update:isActive']);

    const isSidebarOpen = computed(() => props.isActive);

    const handleCloseSidebar = () => {
        emit('update:isActive', false);
    }

    const hoveredOption = ref<number | null>(null);

    const LIST_OPTIONS = ref([
        { id: 1, name: 'Inicio', icon: HomeIcon, iconFilled: HomeFilledIcon },
        { id: 2, name: 'Series', icon: StarIcon, iconFilled: StarFilledIcon },
        { id: 3, name: 'Películas', icon: FilmIcon, iconFilled: FilmFilledIcon },
        { id: 4, name: 'Agregadas Recientemente', icon: TicketIcon, iconFilled: TicketFilledIcon },
        { id: 5, name: 'Tendencia', icon: TrendingUpIcon, iconFilled: TrendingUpFilledIcon },
        { id: 6, name: 'Mis Películas', icon: LikeIcon, iconFilled: LikeFilledIcon },
        { id: 7, name: 'Mi Lista', icon: PlusIcon, iconFilled: PlusIcon },
    ])
</script>

<style scoped>
    .sidebar {
        background: url('/img/sidebar-bg.jpg') no-repeat center center;
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(300px);
        opacity: 0;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>