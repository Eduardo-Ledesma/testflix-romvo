<template>
    <section class="min-h-40">
        <NavBarMobile class="block md:hidden mb-10" :showCloseIcon="true" @update:close="handleGoHome" />
        <h2 class="text-3xl text-white font-semibold">Mi lista</h2>
        <div class="flex min-h-[400px]">
            <transition name="fade">
                <div v-if="seriesStore.getList.length === 0" class="flex mx-auto items-center">
                    <p class="text-white text-3xl">Aún no has agregado nada a tu lista.</p>
                </div>
            </transition>

            <transition-group
                name="fade"
                tag="div"
                class="flex flex-col gap-6 w-[500px] pt-10 pb-4"
                :class="seriesStore.getList.length === 0 ? 'hidden' : ''"
            >
                <div v-for="list in seriesStore.getList" :serie="list" :key="list.id" class="flex items-center justify-between gap-6 w-full">
                    <div class="flex items-center gap-6">
                        <img :src="list.img" :alt="'Image of the serie' + list.title" width="128px" height="96px" class="w-32 h-24 object-cover rounded-lg" />
                        <h4 v-show="!isXS" class="text-xl text-white">{{ list.title }}</h4>

                        <div v-show="isXS" class="flex flex-col gap-4">
                            <h4 class="text-xl text-white">{{ list.title }}</h4>
                            <div class="flex item-center gap-6">
                                <button class="flex items-center border hover:cursor-pointer bg-base-light border-base-light hover:bg-white hover:border-white
                                        rounded-full py-2 pl-[10px] pr-[6px] play-parent transition-colors duration-300"
                                    >
                                    <PlayIcon class="w-[10px] h-[10px] play-icon transition-colors" />
                                </button>
                                <button class="bg-red-500 p-1 rounded-full hover:bg-red-600 transition-colors" @click="seriesStore.updateListOrLiked(list.id, 'list');">
                                    <TrashIcon class="w-5 h-5 transition-colors" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-show="!isXS" class="flex item-center gap-6">
                        <button class="flex items-center border hover:cursor-pointer bg-base-light border-base-light hover:bg-white hover:border-white
                                rounded-full py-2 pl-[10px] pr-[6px] play-parent transition-colors duration-300"
                            >
                            <PlayIcon class="w-[10px] h-[10px] play-icon transition-colors" />
                        </button>
                        <button class="bg-red-500 p-1 rounded-full hover:bg-red-600 transition-colors" @click="seriesStore.updateListOrLiked(list.id, 'list');">
                            <TrashIcon class="w-5 h-5 transition-colors" />
                        </button>
                    </div>
                </div>

            </transition-group>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { useSeriesStore } from '@/stores/series';
    import NavBarMobile from '@/components/layout/NavBarMobile.vue';
    import PlayIcon from '../icons/PlayIcon.vue';
    import TrashIcon from '../icons/TrashIcon.vue';
    import { useWindowSize } from '@/composables/useWindowSize';

    const seriesStore = useSeriesStore();
    const { isXS } = useWindowSize();

    const emit = defineEmits<{
        (e: 'update:goHome'): void;
    }>();

    const handleGoHome = () => {
        emit('update:goHome');
    }
</script>

<style scoped>
    .play-parent .play-icon {
        fill: black;
        color: black;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>