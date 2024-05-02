<template>
    <DownFxBox />
    <HeaderDownBox title="照片墙"/>
    <MainBackground>
        <InstBackground />
    </MainBackground>
    
    <HeaderDOM />
</template>

<script setup lang="ts">
    import DownFxBox from './components/DownFxBox.vue'
    import HeaderDownBox from './components/HeaderDownBox.vue';
    import HeaderDOM from './components/HeaderDOM.vue';
    import MainBackground from './components/MainBackground.vue';
    import InstBackground from './components/InstBackground.vue';
</script>

<style scoped></style>