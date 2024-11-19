<template>
    <div v-if="isInstPage">
        <div class="navigation-bar">
            <Logo class="logo" />
            <NavArrow class="arrow" />
            <RouterLink to="/" class="white underline text">首页</RouterLink>
            <NavArrow class="arrow" />
            <RouterLink to="/inst" class="white underline text">照片墙</RouterLink>
        </div>
    </div>

    <div v-if="isHomePage">
        <div class="navigation-bar">
            <Logo class="logo" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Logo from './icons/Logo.vue';
import NavArrow from './icons/NavArrow.vue';

const route = useRoute();

const isHomePage = route.path === '/';
const isInstPage = route.path === '/inst';
</script>


<style scoped>
.navigation-bar {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    height: 30px;
    width: auto;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
}

.logo {
    height: 16px;
}

.arrow {
    margin: 0 6px 0 6px;
    height: auto;
    width: 6px;
}

.text {
    font-size: 10px;
}

.copyright {
    margin-left: 6px;
    color: rgb(160, 160, 160);
}
</style>