<template>
    <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
            <component :is="Component" :key="$route.path" />
        </transition>

    </router-view>
</template>

<script>
import HeaderDOM from './components/HeaderDOM.vue';
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.82, 0, 0.58, 1);
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
}
</style>