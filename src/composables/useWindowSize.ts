import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useWindowSize() {
    const width = ref(window.innerWidth)

    const isMobile = computed(() => width.value < 768)
    const isMD = computed(() => width.value >= 768)
    const isLG = computed(() => width.value >= 1024)

    const onResize = () => {
        width.value = window.innerWidth
    }

    onMounted(() => {
        window.addEventListener('resize', onResize)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', onResize)
    })

    return { isMobile, isMD, isLG }
}