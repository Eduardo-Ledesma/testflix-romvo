<template>
    <navbar class="w-full">
        <ul class="flex mx-auto justify-between w-full items-center">
            <li v-if="props.showCloseIcon">
                <button @click="$emit('update:close')" class="hover:scale-110 transition-transform">
                    <CloseIcon class="w-6 h-6 text-white" />
                </button>
            </li>
            <li v-else>
                <button @click="handleOpenMenu" class="hover:scale-110 transition-transform">
                    <MenuIcon class="w-6 h-6 text-white" />
                </button>
            </li>

            <img src="../../assets/LITEFLIX.svg" alt="testflix logo" class="h-7" />

            <li>
                <button class="hover:scale-110 transition-transform">
                    <img src="/img/avatar-profile.png" alt="testflix logo" class="h-10" />
                </button>
            </li>
        </ul>
    </navbar>
</template>

<script setup lang="ts">
    import CloseIcon from '../icons/CloseIcon.vue';
    import MenuIcon from '../icons/MenuIcon.vue';

    const props = withDefaults(
        defineProps<{
            showCloseIcon?: boolean;
        }>(),
        {
            showCloseIcon: false
        }
    );

    const emit = defineEmits(['update:openSidebar', 'update:openModal', 'update:close']);

    const handleOpenMenu = () => {
        emit('update:openSidebar');
    }
</script>