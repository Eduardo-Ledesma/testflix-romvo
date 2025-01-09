<template>
    <Transition name="modal-bg">
        <div v-show="isModalActive" @keyup.esc="handleCloseModal" tabindex="0" 
            class="absolute top-0 left-0 w-full h-screen flex justify-center items-center md:px-8 bg-black bg-opacity-30 z-[1000]"
        >

            <Transition name="modal-content">
                    <div v-if="isModalActive" class="py-8 px-10 bg-dark max-w-[730px] relative overflow-x-hidden overflow-y-auto md:overflow-hidden w-full rounded-md h-screen md:h-auto">
                        <button class="hidden md:flex absolute top-4 right-4 hover:scale-110" @click="handleCloseModal">
                            <CloseIcon class="w-4 h-4 text-white" />
                        </button>
                        <slot />
                    </div>
            </Transition>

        </div>
    </Transition>
</template>

<script setup lang="ts">
    import { watch } from 'vue';
    import CloseIcon from '../icons/CloseIcon.vue';

    const props = withDefaults(
        defineProps<{
            isModalActive: boolean;
        }>(), {
            isModalActive: false
        })

    const emit = defineEmits(['update:closeModal']);

    const handleCloseModal = () => {
        emit('update:closeModal');
    }

    watch(() => props.isModalActive, (newValue) => {
        if (newValue) {
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 500);
        }
    })
</script>

<style scoped>
    .modal-bg-enter-active, .modal-bg-leave-active {
        transition: opacity 0.5s;
    }

    .modal-bg-enter-from, .modal-bg-leave-to {
        @media (min-width: 768px) {
            opacity: 0;
        }
    }

    .modal-content-enter-active, .modal-content-leave-active {
        transition: transform 0.5s;
    }

    .modal-content-enter-from, .modal-content-leave-to {
        transform: translateY(1000px);
        @media (min-width: 768px) {
            transform: translateY(400px);
        }
    }
</style>