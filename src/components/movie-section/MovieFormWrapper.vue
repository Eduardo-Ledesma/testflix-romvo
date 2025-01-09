<template>
    <MovieFormMobile v-if="isMobile"
        :showDropzone="showDropzone"
        :isUploading="isUploading"
        :isError="isError"
        :isUploaded="isUploaded"
        :isSaved="isSaved"
        :loadingPercentage="loadingPercentage"
        :movieTitle="movieTitle"
        @update:uploadMovie="handleUploadMovie"
        @update:cancelUpload="handleCancelUpload"
        @update:retry="handleRetry"
        @update:saveMovie="handleSaveMovie"
        @update:goHome="handleGoHome"
    />

    <MovieFormDesktop v-else
        :showDropzone="showDropzone"
        :isUploading="isUploading"
        :isError="isError"
        :isUploaded="isUploaded"
        :isSaved="isSaved"
        :loadingPercentage="loadingPercentage"
        :movieTitle="movieTitle"
        @update:uploadMovie="handleUploadMovie"
        @update:cancelUpload="handleCancelUpload"
        @update:retry="handleRetry"
        @update:saveMovie="handleSaveMovie"
        @update:goHome="handleGoHome"
    />
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import MovieFormDesktop from './MovieFormDesktop.vue';
    import MovieFormMobile from './MovieFormMobile.vue';
    import { useWindowSize } from '../../composables/useWindowSize';

    const { isMobile } = useWindowSize();

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