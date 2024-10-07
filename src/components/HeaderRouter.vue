<template>
    <RouterLink class="header-fx white underline" :to="to">
        <p class="text">{{ text }}</p>
        <slot></slot>
        <Arrow />
    </RouterLink>
</template>

<script setup lang="ts">
import Arrow from './icons/Arrow.vue';

defineProps({
    text: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
})
</script>

<style scoped>
.text {
    margin-left: 40px;
}
</style>