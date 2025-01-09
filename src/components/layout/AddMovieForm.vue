<template>
    <form v-if="!isSaved" class="flex flex-col justify-center items-center gap-10" @submit.prevent="handleSaveMovie">
        <h3 class="text-xl font-medium tracking-big text-base-light">AGREGAR PELÍCULA</h3>

        <!-- Dropzone -->
        <div v-if="showDropzone"
            @click="handleUploadMovie"
            class="flex justify-center items-center max-w-[600px] w-full h-48 rounded-[10px] border border-gray-400 border-dashed
            text-white gap-3 hover:cursor-pointer hover:border-white transition-colors"
        >
            <ClipIcon class="w-5 h-5" /><p class="tracking-big">Agregá un archivo o arrastralo y soltalo aquí</p>
        </div>

        <!-- Uploading states -->
        <div v-if="!showDropzone" class="flex justify-between">

            <!-- Loading text and percentage -->
            <div class="w-28">
                <Transition name="slide-up">
                    <p v-if="isUploading" class="tracking-big text-white mb-1">Cargando...</p>
                    <p v-else-if="isError" class="tracking-big text-white mb-1">No se pudo cargar la película...</p>
                    <p v-else class="tracking-big text-white mb-1">Cargado</p>
                </Transition>
                <Transition name="slide-up">
                    <p v-if="!isError" class="tracking-big text-white text-4xl">{{ loadingPercentage }}</p>
                </Transition>
            </div>
            
            <!-- Loading icon, error icon and success icon -->
            <div class="relative w-58 h-58">
                <Transition name="slide-up">
                    <LoadingIcon v-if="isUploading" class="w-58 h-58 text-white" />
                    
                    <div v-else-if="isError" class="flex justify-center items-center">
                        <CircleIcon class="relative w-58 h-58 text-error" />
                        <div class="absolute flex flex-col justify-center items-center gap-3">
                            <span class="text-white tracking-big text-3xl">ERROR</span>
                            <button @click.prevent="handleRetry"><RetryIcon class="w-8 h-8 text-error hover:text-red-600" /></button>
                        </div>
                    </div>

                    <CircleIcon v-else class="relative w-58 h-58 text-base-light" />
                </Transition>
            </div>

            <!-- Cancel button and success text -->
            <Transition name="slide-up">
                <button 
                    v-if="!isUploaded"
                    @click.prevent="handleCancelUpload" 
                    class="tracking-big text-white self-end underline decoration-gray-500 w-28 text-right"
                    :class="[!isError ? 'opacity-100' : 'opacity-0']"
                >
                    Cancelar
                </button>
            </Transition>

            <Transition name="slide-up">
                <p v-if="isUploaded" class="tracking-big text-base-light self-end w-28 text-right" :class="[isUploaded ? 'opacity-100' : 'opacity-0']">
                    ¡LISTO!
                </p>
            </Transition>
        </div>

        <Transition name="slide-up">
            <div v-if="!isSaved" class="w-full max-w-64 flex flex-col gap-4">
                <input
                    v-model="movieTitle"
                    type="text" 
                    class=" h-12 border-b border-white bg-dark text-white px-4 text-center tracking-big" 
                    placeholder="Ingresa el título"
                    disabled
                />
                <ActionButton text="SUBIR PELÍCULA" type="light" :disabled="disabledBtn" />
            </div>
        </Transition>
    </form>

    <div v-if="isSaved" class="flex flex-col gap-10 py-4 items-center justify-center">
        <img src="../../assets/LITEFLIX.svg" alt="testflix logo" class="h-8" />
        <CheckIcon class="w-44 h-44 text-base-light" />
        <p class="text-white tracking-big text-xl">“Testflix The Movie” fue correctamente subida.</p>
        <ActionButton text="IR A HOME" type="light" @click="handleGoHome" />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import ClipIcon from '../icons/ClipIcon.vue';
    import ActionButton from '../reusables/ActionButton.vue';
    import LoadingIcon from '../icons/LoadingIcon.vue';
    import CircleIcon from '../icons/CircleIcon.vue';
    import RetryIcon from '../icons/RetryIcon.vue';
    import CheckIcon from '../icons/CheckIcon.vue';

    const emit = defineEmits(['update:closeModal']);

    const disabledBtn = ref<boolean>(true);
    const showDropzone = ref<boolean>(true);
    const isUploading = ref<boolean>(false);
    const isError = ref<boolean>(false);
    const isUploaded = ref<boolean>(false);
    const isSaved = ref<boolean>(false);

    const loadingPercentage = ref<string>('50%');
    const movieTitle = ref<string>('Ingresa el título');

    const handleUploadMovie = () => {
        showDropzone.value = false
        isUploading.value = true
        movieTitle.value = 'Testflix The Movie'
    }

    const handleCancelUpload = () => {
        isUploading.value = false
        isError.value = true
    }

    const handleRetry = () => {
        isError.value = false
        loadingPercentage.value = '100%'
        isUploaded.value = true
        disabledBtn.value = false
    }

    const handleSaveMovie = () => {
        isUploading.value = false
        isUploaded.value = false
        isSaved.value = true
    }

    const handleGoHome = () => {
        emit('update:closeModal');
        isSaved.value = false
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