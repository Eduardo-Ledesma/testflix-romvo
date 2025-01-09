<template>
    <button class="flex items-center gap-10 bg-transparent hover:scale-105 transition-transform" :class="props.btnStyle">
        <slot />
        <span class="text-white tracking-widest" :class="props.textStyle">{{ props.text }}</span>
    </button>
</template>

<script setup lang="ts">
    const props = defineProps<{
        text: string;
        btnStyle?: string;
        textStyle?: string;
    }>();
</script>