<template>
    <div>
        <DownFxBox />
        <MainBackground>
            <InstBackground>
                <Coding />
            </InstBackground>
        </MainBackground>
        <HeaderDOM />
    </div>
</template>

<script setup lang="ts">
import DownFxBox from '@/components/DownFxBox.vue'
import HeaderDownBox from '@/components/HeaderDownBox.vue';
import HeaderDOM from '@/components/HeaderDOM.vue';
import MainBackground from '@/components/MainBackground.vue';
import Coding from '@/components/index/Coding.vue';
import InstBackground from "@/components/InstBackground.vue";
</script>

<style scoped></style>