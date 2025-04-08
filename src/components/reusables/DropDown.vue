<template>
    <div class="relative inline-block" ref="dropdown">
        <button @click="isActive = !isActive" 
            class="flex items-center gap-2 bg-transparent font-semibold text-lg text-white tracking-widest
            hover:scale-105 transition-transform" 
        >
            VER: <span class="text-base-light">{{ selectedOption }}</span> <ArrowDropDownIcon />
        </button>

        <Transition>
            <div v-if="isActive" class="absolute right-0 mt-2 bg-dark shadow-lg rounded-md w-max py-1 px-2 z-50 border border-gray-400 lg:border-none">
                <div 
                    class="absolute -top-2 right-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-400 lg:border-b-dark"
                ></div>
                <ul class="py-2">
                    <li v-for="option in options" :key="option"
                        class="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white tracking-widest transition-colors"
                        :class="[option === selectedOption ? 'text-base-light' : '']"
                        @click="handleSelectOption(option)"
                    >
                        {{ option }}
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import ArrowDropDownIcon from '../icons/ArrowDropDownIcon.vue';

    const props = defineProps<{
        options: string[];
    }>();

    const emit = defineEmits(['update:selectedOption']);

    const isActive = ref(false);
    const selectedOption = ref(props?.options[0]);
    const dropdown = ref<HTMLElement | null>(null);

    const closeDropDown = (e: MouseEvent) => {
        if (dropdown.value && !dropdown.value.contains(e.target as Node)) {
            isActive.value = false;
        }
    };

    onMounted(() => {
        window.addEventListener('click', closeDropDown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('click', closeDropDown);
    });

    const handleSelectOption = (option: string) => {
        selectedOption.value = option;
        isActive.value = false;
        emit('update:selectedOption', option);
    };
</script>