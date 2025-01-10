<template>
    <div class="flex flex-col gap-4 justify-center items-center w-full">
        <button @click="goPrevious" class="hover:scale-110 transition-transform" :disabled="hideGoPreviousBtn" :class="{'opacity-0': hideGoPreviousBtn}">
            <ArrowUpIcon class="text-white" />
        </button>

        <TransitionGroup v-if="isLG && seriesToShow.length" name="list" tag="ul" class="flex flex-col items-center gap-4 w-full">
            <SerieCardDesktop v-for="serie in seriesToShow" :serie="serie" :key="serie.id" @update:list="handleToggleInList" @update:fav="handleToggleLike"  />
        </TransitionGroup>

        <TransitionGroup v-else-if="!isLG && seriesToShow.length" name="list" tag="ul" class="flex flex-col items-center gap-4 w-full">
            <SerieCardMobile v-for="serie in seriesToShow" :serie="serie" :key="serie.id" @update:list="handleToggleInList" @update:fav="handleToggleLike"  />
        </TransitionGroup>

        <button @click="goNext" class="hover:scale-110 transition-transform" :disabled="hideGoNextBtn" :class="{'opacity-0': hideGoNextBtn}">
            <ArrowDownIcon class="text-white" />
        </button>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import ArrowUpIcon from '../icons/ArrowUpIcon.vue';
    import ArrowDownIcon from '../icons/ArrowDownIcon.vue';
    import { type Serie } from '../../utils/types';
    import SerieCardDesktop from './SerieCardDesktop.vue';
    import SerieCardMobile from './SerieCardMobile.vue';
    import { useWindowSize } from '../../composables/useWindowSize';

    const { isLG, height } = useWindowSize();

    const props = withDefaults(
        defineProps<{
            series: Serie[];
        }>(),
        {
            series: () => [],
        }
    );

    const emit = defineEmits(['update:list', 'update:fav']);

    const currentIndex = ref(0);

    const seriesToShow = computed(() => {
        if(props.series.length) {
            if(height.value < 800 && isLG.value) {
                console.log(isLG)
                return props.series.slice(currentIndex.value, currentIndex.value + 3);
            }
            return props.series.slice(currentIndex.value, currentIndex.value + 4);
        }
        return [];
    })

    const hideGoPreviousBtn = computed(() => {
        return currentIndex.value === 0;
    })

    const hideGoNextBtn = computed(() => {
        if(height.value < 800 && isLG.value) {
            return currentIndex.value + 3 >= props.series.length;
        }
        return currentIndex.value + 4 >= props.series.length;
    })

    const goPrevious = () => {
        if (currentIndex.value > 0) {
            currentIndex.value--;
        }
    }

    const goNext = () => {
        if(height.value < 800 && isLG.value) {
            if (currentIndex.value + 3 < props.series.length) {
                currentIndex.value++;
            }
        }
        if (currentIndex.value + 4 < props.series.length) {
            currentIndex.value++;
        }
    }

    const handleToggleInList = (id: number) => {
        emit('update:list', id);
    }

    const handleToggleLike = (id: number) => {
        emit('update:fav', id);
    }
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to{
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>