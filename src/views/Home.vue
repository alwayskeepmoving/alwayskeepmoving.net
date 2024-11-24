<template>
    <div>
        <DownFxBox />
        <MainBackground>
            <InstBackground>
                <HomeView />
            </InstBackground>
        </MainBackground>
        <HeaderDOM />
    </div>
</template>

<script setup lang="ts">
import DownFxBox from '@/components/DownFxBox.vue'
import HeaderDOM from '@/components/HeaderDOM.vue';
import MainBackground from '@/components/MainBackground.vue';
import InstBackground from "@/components/InstBackground.vue";
import HomeView from '@/components/index/HomeView.vue';
</script>

<style scoped></style>