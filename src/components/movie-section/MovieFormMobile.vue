<template>
    <NavBarMobile :showCloseIcon="true" @update:close="$emit('update:goHome')" />
    <form v-if="!isSaved" class="flex flex-col justify-center items-center gap-16 mt-20" @submit.prevent="$emit('update:saveMovie')">
        <h3 class="text-[22px] font-medium tracking-big text-base-light">AGREGAR PELÍCULA</h3>

        <!-- Dropzone -->
        <div v-if="showDropzone"
            @click="$emit('update:uploadMovie')"
            class="flex justify-center items-center max-w-[400px] w-full h-20 rounded-[10px] border border-gray-400 border-dashed
            text-white gap-3 hover:cursor-pointer hover:border-white transition-colors"
        >
            <ClipIcon class="w-5 h-5" /><p class="tracking-big">Agregá un archivo</p>
        </div>

        <!-- Uploading states -->
        <div v-if="!showDropzone" class="flex flex-col justify-between gap-2 w-full">

            <!-- Loading text and percentage -->
            <div class="text-white text-sm tracking-big flex gap-4">
                <Transition name="slide-up">
                    <p v-if="isUploading" class="mb-1">Cargando...</p>
                    <p v-else-if="isError" class="mb-1">¡ERROR! No se pudo cargar la película</p>
                    <p v-else class="mb-1">Cargado</p>
                </Transition>
                <Transition name="slide-up">
                    <p v-if="!isError">{{ loadingPercentage }}</p>
                </Transition>
            </div>
            
            <!-- Loading icon, error icon and success icon -->
            <div class="relative w-full">
                <Transition name="slide-up">
                    <div v-if="isUploading" class="flex w-full items-center">
                        <div class="h-[6px] bg-base-light w-1/2"></div>
                        <div class="h-1 bg-white opacity-50 w-1/2"></div>
                    </div>
                    
                    <div v-else-if="isError" class="w-full h-[6px] bg-error"></div>

                    <div v-else  class="w-full h-[6px] bg-base-light"></div>
                </Transition>
            </div>

            <!-- Cancel button, Retry button and Success text -->
            <Transition name="slide-up">
                <button 
                    v-if="!isUploaded && !isError"
                    @click.prevent="$emit('update:cancelUpload')" 
                    class="tracking-big text-white self-end underline decoration-gray-500 w-28 text-right"
                    :class="[!isError ? 'opacity-100' : 'opacity-0']"
                >
                    Cancelar
                </button>
            </Transition>

            <Transition name="slide-up">
                <button 
                    v-if="isError" 
                    @click.prevent="handleRetry" 
                    class="self-end text-right mt-1"
                    :class="[isError ? 'opacity-100' : 'opacity-0']">
                    <RetryIcon class="w-8 h-8 text-error hover:text-red-600" />
                </button>
            </Transition>

            <Transition name="slide-up">
                <p v-if="isUploaded" class="tracking-big mt-1 text-base-light self-end w-28 text-right" :class="[isUploaded ? 'opacity-100' : 'opacity-0']">
                    ¡LISTO!
                </p>
            </Transition>
        </div>

        <Transition name="slide-up">
            <div v-if="!isSaved" class="w-full max-w-64 flex flex-col gap-4">
                <input
                    v-model="currentMovieTitle"
                    type="text" 
                    class=" h-12 border-b border-white bg-dark text-white px-4 text-center tracking-big mb-20" 
                    placeholder="Ingresa el título"
                    disabled
                />

                <ActionButton v-if="!showDropzone" text="SUBIR PELÍCULA" type="light" :disabled="disabledBtn" />
                <ActionButton @click="$emit('update:goHome')" text="SALIR" class="border border-gray-400 hover:border-white" />
            </div>
        </Transition>
    </form>

    <div v-if="isSaved" class="flex flex-col gap-16 py-4 mt-16 items-center justify-center">
        <CheckIcon class="w-44 h-44 text-base-light" />
        <p class="text-white tracking-big text-xl">“Testflix The Movie” fue correctamente subida.</p>
        <ActionButton text="IR A HOME" type="light" @click="$emit('update:goHome')" />
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import ClipIcon from '../icons/ClipIcon.vue';
    import ActionButton from '../reusables/ActionButton.vue';
    import RetryIcon from '../icons/RetryIcon.vue';
    import CheckIcon from '../icons/CheckIcon.vue';
    import NavBarMobile from '../layout/NavBarMobile.vue';

    const props = withDefaults(
        defineProps<{
            showDropzone: boolean;
            isUploading: boolean;
            isError: boolean;
            isUploaded: boolean;
            isSaved: boolean;
            loadingPercentage: string;
            movieTitle: string;
        }>(), {
            showDropzone: true,
            isUploading: false,
            isError: false,
            isUploaded: false,
            isSaved: false,
            loadingPercentage: '50%',
            movieTitle: 'Ingresa el título'
        }
    )

    const emit = defineEmits(['update:uploadMovie', 'update:cancelUpload', 'update:retry', 'update:saveMovie', 'update:goHome']);

    const disabledBtn = ref<boolean>(true);
    const currentMovieTitle = computed<string>(() => props.movieTitle);

    const handleRetry = () => {
        disabledBtn.value = false;
        emit('update:retry');
    }
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all .3s ease-in-out;
}

.slide-up-enter-from {
  opacity: 0;
  position: absolute;
}

.slide-up-leave-to {
  opacity: 0;
  position: absolute;
}
</style>