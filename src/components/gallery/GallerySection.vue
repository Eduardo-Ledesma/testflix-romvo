<template>
    <section class="flex justify-end w-full gap-4">
        <div class="flex flex-col items-center gap-4 w-full lg:w-80">
            <DropDown :options="DROPDOWN_OPTIONS" />
            <VerticalCarousel :series="seriesStore.getSeries" />
        </div>
    </section>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import DropDown from '../reusables/DropDown.vue';
    import VerticalCarousel from './VerticalCarousel.vue';
    import { useSeriesStore } from '@/stores/series';

    const seriesStore = useSeriesStore();

    onMounted(() => {
        seriesStore.loadSeries();
    });

    const DROPDOWN_OPTIONS = ['TENDENCIA', 'MIS PELICULAS', 'AGREGADAS RECIENTEM.'];
</script>