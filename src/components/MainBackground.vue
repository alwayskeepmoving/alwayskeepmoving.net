<template>
    <div class="main-background">
        <div class="insbox">
            <div class="ins-background">
                <div class="header-mmj"></div>
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

</style>