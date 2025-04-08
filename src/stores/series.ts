import { defineStore } from 'pinia'
import { type Serie, type ListOrLiked } from '@/utils/types';
import { SERIES } from '@/utils/data';

interface SeriesState {
    series: Serie[]
}

export const useSeriesStore = defineStore('series', {
    state: (): SeriesState => ({
        series: []
    }),
    persist: true,
    getters: {
        getSeries: (state: SeriesState): Serie[] => state.series,
        getList: (state: SeriesState): Serie[] => state.series.filter((serie: Serie) => serie.in_list),
    },
    actions: {
        loadSeries(): void {
            if(this.series.length === 0) {
                this.series = SERIES
            }
        },
        addSeries(serie: Serie[]): void {
            this.series = serie
        },
        updateListOrLiked(id: number, action: ListOrLiked): void {
            this.series = this.series.map((serie: Serie) => {
                if (serie.id === id) {
                    if (action === 'list') {
                        serie.in_list = !serie.in_list
                    } else if (action === 'liked') {
                        serie.in_favorite = !serie.in_favorite
                    }
                }
                return serie
            })
        },
    },
})