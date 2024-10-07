<template>
    <DownFxBox />
    <HeaderDownBox title="SP: Lullaby">
        <DetailsButton detailsname="入手" />
    </HeaderDownBox>
    <DetailsBox />
    <MainBackground>
        <InstBackground>
            <div style="height: 1000px; width: auto; background-color: aliceblue;"></div>
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
import DetailsButton from '@/components/DetailsButton.vue';
</script>

<style scoped></style>