<template>
    <div class="main-background">
        <div class="insbox">
            <div class="ins-background">
                <div class="header-mmj"></div>
                <slot></slot>
                <MainFooter />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import MainFooter from './MainFooter.vue';
    import NavigationBar from './NavigationBar.vue';
</script>

<style scoped>

</style>