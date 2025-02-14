<template>
    <div>
        <DownFxBox />
        <HeaderDownBox title="照片墙" />
        <MainBackground>
            <InstView />
        </MainBackground>

        <HeaderDOM />
    </div>
</template>

<script setup lang="ts">
import DownFxBox from '@/components/DownFxBox.vue'
import HeaderDownBox from '@/components/HeaderDownBox.vue';
import HeaderDOM from '@/components/HeaderDOM.vue';
import MainBackground from '@/components/MainBackground.vue';
import InstView from '@/components/inst/InstView.vue';
</script>

<style scoped></style>