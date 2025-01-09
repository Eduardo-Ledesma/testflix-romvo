<template>
    <div class="flex justify-center items-end gap-4 relative w-full max-w-[327px] h-[172px] rounded transition-all duration-300"
        :style="{backgroundImage: 'url(' + props.serie.img + ')'}"
        :class="['bg-cover bg-no-repeat', props.serie.id === 1 ? 'bg-center' : 'bg-top']"
        @mouseover="serieHovered = true"
        @mouseleave="serieHovered = false"
    >
        <!-- Gradient overlay -->
        <Transition mode="out-in">
            <div v-if="serieHovered" class="absolute inset-0 bg-dark bg-opacity-60 z-10 transition-colors"></div>
            <div v-else class="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)] z-10"></div>
        </Transition>

        <!-- New season tag -->
        <div v-if="props.serie.id === 1" class="bg-base-light pl-1 py-[1px] absolute top-2 right-0">
            <p class="text-[10px] tracking-[3px] font-bold">NUEVA TEMPORADA</p>
        </div>
        
        <!-- Info showed when the card is hovered -->
        <Transition mode="out-in">
            <div v-if="serieHovered" class="flex flex-col gap-3 z-20 w-full px-3 pb-4">
                 <!-- Manage list and like icons -->
                 <div class="flex items-center self-end text-white gap-3">
                    <ReadyIcon v-if="props.serie.in_list" @click="handleToggleInList(props.serie.id)" class="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <PlusIcon v-else @click="handleToggleInList(props.serie.id)" class="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <LikeFilledIcon v-if="props.serie.in_favorite" @click="handleToggleLike(props.serie.id)" class="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <LikeIcon v-else @click="handleToggleLike(props.serie.id)" class="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                </div>

                <div class="flex items-center text-white gap-3">
                    <div class="flex items-center border hover:cursor-pointer border-white hover:bg-base-light hover:border-base-light 
                        rounded-full py-2 pl-[10px] pr-[6px] play-parent transition-colors"
                    >
                        <PlayIcon class="w-[10px] h-[10px] play-icon transition-colors" />
                    </div>
                    <h3 class="text-white font-semibold tracking-big">{{ props.serie.title }}</h3>
                </div>

                <p class="text-white text-sm font-light tracking-wider">{{ props.serie.description }}</p>

                <div class="flex justify-between items-center tracking-wider text-sm">
                    <p class="text-white"><StarFilledIcon class="w-4 h-4 text-base-light inline-block mr-1 mb-1" />{{ props.serie.score }}</p>
                    <p class="text-white">{{ props.serie.year }}</p>
                </div>
            </div>

            <!-- Info showed when the card is not hovered -->
            <div v-else class="pb-3 flex flex-col items-center gap-6 z-20">
                <PlaySerieIcon class="w-10 h-10" />
                <h3 class="text-white font-semibold text-lg tracking-big">{{ props.serie.title }}</h3>
            </div>
        </Transition>
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

    const props = defineProps<{
        serie: Serie;
    }>();

    const serieHovered = ref<boolean>(false);

    const emit = defineEmits(['update:list', 'update:fav']);

    const handleToggleInList = (id: number) => {
        emit('update:list', id);
    }

    const handleToggleLike = (id: number) => {
        emit('update:fav', id);
    }
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.play-parent:hover .play-icon {
    fill: black;
    color: black;
}
</style>