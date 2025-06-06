<template>
    <div class="flex justify-center items-end gap-4 relative w-56 h-36 hover:w-[250px] hover:h-[247px] transition-all duration-300 rounded"
        :style="{backgroundImage: 'url(' + props.serie.img + ')'}"
        :class="['bg-contain bg-top bg-no-repeat']"
        @mouseover="serieHovered = true"
        @mouseleave="serieHovered = false"
    >
        <!-- Gradient overlay -->
        <div v-if="serieHovered" class="absolute inset-0 bg-gradient-to-b from-transparent to-dark to-70% z-10"></div>

        <!-- New season tag -->
        <div v-if="props.serie.id === 1" class="bg-base-light pl-1 py-[1px] absolute top-2 right-1">
            <p class="text-[10px] tracking-[3px] font-bold">NUEVA TEMPORADA</p>
        </div>
        
        <!-- Info showed when the card is hovered -->
        <div v-if="serieHovered" class="flex flex-col gap-3 z-20 w-full px-3 pb-2">
            <div class="flex justify-between">
                <div class="flex items-center text-white gap-3 self-end">
                    <div class="flex items-center border hover:cursor-pointer border-white hover:bg-base-light hover:border-base-light 
                        rounded-full py-2 pl-[10px] pr-[6px] play-parent transition-colors"
                    >
                        <PlayIcon class="w-[10px] h-[10px] play-icon transition-colors" />
                    </div>
                    <h3 class="text-white font-semibold tracking-big">{{ props.serie.title }}</h3>
                </div>

                <!-- Manage list and like icons -->
                <div class="flex flex-col items-center text-white gap-3">
                    <ReadyIcon v-if="props.serie.in_list" @click="handleToggleInList(props.serie.id)" class="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <PlusIcon v-else @click="handleToggleInList(props.serie.id)" class="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <LikeFilledIcon v-if="props.serie.in_favorite" @click="handleToggleLike(props.serie.id)" class="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <LikeIcon v-else @click="handleToggleLike(props.serie.id)" class="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                </div>
            </div>

            <p class="text-white text-xs font-light tracking-wider">{{ props.serie.description }}</p>

            <div class="flex justify-between items-center tracking-wider text-sm">
                <p class="text-white"><StarFilledIcon class="w-4 h-4 text-base-light inline-block mr-1 mb-1" />{{ props.serie.score }}</p>
                <p class="text-white">{{ props.serie.year }}</p>
            </div>
        </div>

        <!-- Info showed when the card is not hovered -->
        <div v-else class="pb-1 flex flex-col items-center gap-4 z-20">
            <PlaySerieIcon />
            <h3 class="text-white font-semibold text-lg tracking-big">{{ props.serie.title }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import PlaySerieIcon from '../icons/PlaySerieIcon.vue';
    import PlayIcon from '../icons/PlayIcon.vue';
    import { type Serie } from '../../utils/types';
    import PlusIcon from '../icons/PlusIcon.vue';
    import ReadyIcon from '../icons/ReadyIcon.vue';
    import LikeIcon from '../icons/LikeIcon.vue';
    import LikeFilledIcon from '../icons/LikeFilledIcon.vue';
    import StarFilledIcon from '../icons/StarFilledIcon.vue';
    import { useSeriesStore } from '@/stores/series';

    const seriesStore = useSeriesStore();

    const props = defineProps<{
        serie: Serie;
    }>();

    const serieHovered = ref<boolean>(false);

    const handleToggleInList = (id: number) => {
        seriesStore.updateListOrLiked(id, 'list');
    }

    const handleToggleLike = (id: number) => {
        seriesStore.updateListOrLiked(id, 'liked');
    }
</script>

<style scoped>
    .play-parent:hover .play-icon {
        fill: black;
        color: black;
    }
</style>