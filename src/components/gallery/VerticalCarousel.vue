<template>
    <div class="flex flex-col gap-4 justify-center items-center w-full">
        <button @click="goPrevious" class="hover:scale-110 transition-transform"><ArrowUpIcon class="text-white" /></button>

        <TransitionGroup name="list" tag="ul" v-if="seriesToShow.length" class="flex flex-col items-center gap-4 w-full">
            <SerieCard v-for="serie in seriesToShow" :serie="serie" :key="serie.id" @update:list="handleToggleInList" @update:fav="handleToggleLike"  />
        </TransitionGroup>

        <button @click="goNext" class="hover:scale-110 transition-transform"><ArrowDownIcon class="text-white" /></button>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import ArrowUpIcon from '../icons/ArrowUpIcon.vue';
    import ArrowDownIcon from '../icons/ArrowDownIcon.vue';
    import { type Serie } from '../../utils/types';
    import SerieCard from './SerieCard.vue';

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
            return props.series.slice(currentIndex.value, currentIndex.value + 4);
        }
        return [];
    })

    const goPrevious = () => {
        if (currentIndex.value > 0) {
            currentIndex.value--;
        }
    }

    const goNext = () => {
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