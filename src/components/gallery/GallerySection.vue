<template>
    <section class="flex justify-end w-full gap-4">
        <div class="flex flex-col items-center gap-4 w-80">
            <DropDown :options="DROPDOWN_OPTIONS" />
            <VerticalCarousel :series="SERIES" @update:list="handleToggleInList" @update:fav="handleToggleLike" />
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { type Serie } from '../../utils/types';
    import DropDown from '../reusables/DropDown.vue';
    import VerticalCarousel from './VerticalCarousel.vue';

    const SERIES = ref<Serie[]>([
        {
            id: 1,
            title: 'DRIVE TO SURVIVE',
            description: 'Muestra el mundo de la Fórmula 1 desde el punto de vista de los pilotos, gerentes...',
            img: '/img/DRIVETOSURVIVE.jpg',
            score: 8.2,
            year: 2021,
            in_list: false,
            in_favorite: false
        },
        {
            id: 2,
            title: 'BLACK MIRROR',
            description: 'Su vida depende del status en las redes sociales y la boda elitista de una amiga...',
            img: '/img/BLACKMIRROR.jpg',
            score: 7.9,
            year: 2018,
            in_list: false,
            in_favorite: false
        },
        {
            id: 3,
            title: 'GRISELDA',
            description: 'La historia de la reina de la cocaína, Griselda Blanco, quien se convirtió en una de...',
            img: '/img/GRISELDA.jpg',
            score: 8.1,
            year: 2015,
            in_list: false,
            in_favorite: false
        },
        {
            id: 4,
            title: 'EL MARGINAL',
            description: 'Un ex policía es enviado a una prisión para investigar el secuestro de la hija de...',
            img: '/img/ELMARGINAL.jpg',
            score: 7.5,
            year: 2016,
            in_list: false,
            in_favorite: false
        },
        {
            id: 5,
            title: 'PEAKY BLINDERS',
            description: 'Una familia de gánsteres asciende en el mundo del crimen organizado en la Inglaterra...',
            img: '/img/PEAKYBLINDERS.jpg',
            score: 8.8,
            year: 2013,
            in_list: false,
            in_favorite: false
        }
    
    ]);

    const DROPDOWN_OPTIONS = ['TENDENCIA', 'MIS PELICULAS', 'AGREGADAS RECIENTEM.'];

    const handleToggleInList = (id: number) => {
        SERIES.value = SERIES.value.map(serie => {
            if(serie.id === id) {
                serie.in_list = !serie.in_list;
            }
            return serie;
        });
    }

    const handleToggleLike = (id: number) => {
        SERIES.value = SERIES.value.map(serie => {
            if(serie.id === id) {
                serie.in_favorite = !serie.in_favorite;
            }
            return serie;
        });
    }
</script>