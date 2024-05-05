<template>
    <div v-if="isInstPage">
        <div class="navigation-bar">
            <Logo class="logo" />
            <NavArrow class="arrow" />
            <a :href="links.home" class="white underline text">主页</a>
            <NavArrow class="arrow" />
            <a :href="links.inst" class="white underline text">照片墙</a>
        </div>
    </div>
    <div v-if="isHomePage">
        <div class="navigation-bar">
            <Logo class="logo" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './icons/Logo.vue';
import NavArrow from './icons/NavArrow.vue';

const isInstPage = window.location.pathname === '/inst/'
const isHomePage = window.location.pathname === '/'

const links = {
    home: "https://www.alwayskeepmoving.net/",
    inst: "https://www.alwayskeepmoving.net/inst/"
}
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
@media screen and (min-width:1000px) {
.navigation-bar {
    margin-top: 40px;
}


}
</style>