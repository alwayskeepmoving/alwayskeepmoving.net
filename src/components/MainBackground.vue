<template>
    <div class="main-background">
        <div class="insbox">
            <div class="ins-background">
                <slot></slot>

            </div>
            <MainFooter />
        </div>
    </div>
</template>

<script setup lang="ts">
import MainFooter from './MainFooter.vue';
</script>

<style scoped>
.insbox {
    background-color: rgb(20, 20, 20);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 100%;
    z-index: 0;
    position: relative;
}
</style>