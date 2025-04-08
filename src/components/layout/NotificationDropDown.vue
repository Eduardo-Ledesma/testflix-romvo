<template>
    <div class="relative inline-block" ref="notificationDropdown">
        <button class="hover:scale-110 transition-transform" @click="isActive = !isActive">
            <NotificationIcon class="w-6 h-6 text-white" />
        </button>

        <Transition>
            <div v-if="isActive" class="absolute -right-4 mt-2 bg-dark shadow-lg rounded-md w-max py-1 px-2 z-50 border border-gray-400 lg:border-none">
                <div 
                    class="absolute -top-2 right-5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-400 lg:border-b-dark"
                ></div>
                <p class="p-6 text-white text-xl">
                    No tienes notificaciones aún.
                </p>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import NotificationIcon from '../icons/NotificationIcon.vue';

    const isActive = ref(false);
    const notificationDropdown = ref<HTMLElement | null>(null);

    const closeDropDown = (e: MouseEvent) => {
        if (notificationDropdown.value && !notificationDropdown.value.contains(e.target as Node)) {
            isActive.value = false;
        }
    };

    onMounted(() => {
        window.addEventListener('click', closeDropDown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('click', closeDropDown);
    });
</script>