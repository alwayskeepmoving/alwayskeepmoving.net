<template>
    <DownFxBox />
    <HeaderDownBox title="照片墙" />
    <MainBackground>
        <InstBackground>
            <InstView />
        </InstBackground>
    </MainBackground>

    <HeaderDOM />
</template>

<script setup lang="ts">
import DetailsBox from '@/components/DetailsBox.vue';
import DownFxBox from '@/components/DownFxBox.vue'
import HeaderDownBox from '@/components/HeaderDownBox.vue';
import HeaderDOM from '@/components/HeaderDOM.vue';
import MainBackground from '@/components/MainBackground.vue';
import InstBackground from '@/components/InstBackground.vue';
import InstView from '@/components/inst/InstView.vue';
</script>

<style scoped></style>