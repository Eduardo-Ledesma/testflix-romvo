<template>
    <button class="rounded-md max-w-64 h-14 w-full flex items-center justify-center gap-2" :class="classes" :disabled="props.disabled">
        <slot></slot>
        <span class="text-lg tracking-widest font-semibold">{{ props.text }}</span>
    </button>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    const props = withDefaults(
        defineProps<{
            text: string;
            type?: 'dark' | 'light' | 'primary' | 'semi-transparent';
            disabled?: boolean;
        }>(),
        {
            type: 'dark',
            disabled: false
        }
    );

    const classes = computed(() => {
        switch (props.type) {
            case 'dark':
                return 'bg-dark text-white hover:bg-opacity-80 transition-colors';
            case 'light':
                return 'bg-white text-dark hover:bg-opacity-80 transition-colors disabled:bg-opacity-50 disabled:cursor-not-allowed';
            case 'primary':
                return 'bg-base-light text-dark hover:bg-opacity-80 transition-colors';
            case 'semi-transparent':
                return 'bg-dark text-white bg-opacity-50 border border-gray-200 hover:bg-opacity-80 transition-colors';
            default:
                return 'bg-dark text-white';
        }
    })
</script>