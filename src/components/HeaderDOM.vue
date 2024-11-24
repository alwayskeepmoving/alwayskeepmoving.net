<template>
    <div class="globalfx" :style="{ opacity: isBlured ? '1' : '0' }"></div>
    <div id="globalfx-down" class="globalfx-down"></div>
    <div class="top-fxbox" id="topFxBox">
        <div class="top-fx">
            <HeaderRouter v-for="( Routerlink, text ) in RouterLinks" :text="text" :to="Routerlink" />
        </div>
    </div>
    <div class="shopmenubox" id="shopBox">
        <div class="shopmenu">
            <HeaderLink v-for="( SocialLink, text ) in SocialLinks" :text="text" :link="SocialLink" />
        </div>
    </div>
    <div class="header-topbox" :id="HeaderID">
        <div class="header-top">
            <div class="hbgcontainer" @click="toggleBlurFx()">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="shopcontainer">
                <div class="shop"></div>
                <div class="shopfx"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, computed, onMounted } from 'vue';
import HeaderLink from './HeaderLink.vue';
import HeaderRouter from './HeaderRouter.vue';

const isBlured = ref(false);

function toggleBlurFx() {
    isBlured.value = !isBlured.value;
}

const RouterLinks = {
    '主页': '/',
    '照片墙': '/inst',
    // '故事线': '/story',
    // '作品集': '/works',
    // '关于我们': '/about',
    // '取得联系': '/contact',
    '故事线': '/',
    '作品集': '/',
    '关于我们': '/',
    '取得联系': '/',
}

const SocialLinks = {
    '前往 akmeow 阿卡喵↗': 'https://akmeow.com',
    '前往 Beatport↗': 'https://www.beatport.com/label/alwayskeepmoving-records/102961',
    '前往 Dizzylab↗': 'https://www.dizzylab.net/l/AlwaysKeepMoving/',
    '前往 SoundCloud↗': 'https://soundcloud.com/alwayskeepmoving',
};

const prevScrollpos = ref(window.scrollY);

const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navBar = document.getElementById('navBar');
    const shopBox = document.getElementById('shopBox');
    const topFxBox = document.getElementById('topFxBox');
    const headerDownBox = document.getElementById('headerDownBox');

    if (navBar && shopBox && topFxBox && headerDownBox) {
        if (prevScrollpos.value > currentScrollPos) {
            navBar.style.top = '0';
            shopBox.style.top = '0';
            topFxBox.style.top = '0';
            headerDownBox.style.top = '50px';
        } else {
            navBar.style.top = '-50px';
            shopBox.style.top = '-50px';
            topFxBox.style.top = '-50px';
            headerDownBox.style.top = '0';
        }
    }

    prevScrollpos.value = currentScrollPos;
}

window.addEventListener('scroll', handleScroll);

const HeaderID = computed(() => window.location.pathname === '/' ? 'navBar-unflip' : 'navBar');

onMounted(() => {
    const topFx = document.querySelector('.top-fxbox');
    const hamburger = document.querySelector('.hamburger');
    const body = document.querySelector('body');
    const shop = document.querySelector('.shop');
    const shopfx = document.querySelector('.shopfx');
    const shopMenu = document.querySelector('.shopmenubox');
    const globalfx = document.querySelector('.globalfx');
    // 修复在页面加载时无法正常操作的问题
    body.style.overflow = 'auto';
    let isShopfxExpanded = false;
    let isExpanded = false;

    const toggleShopMenu = () => {
        if (isExpanded) {
            shopMenu.style.height = '50px';
            body.style.overflow = 'auto';
            hamburger.style.opacity = '100%';
            hamburger.classList.remove('noclick');
        } else {
            shopMenu.style.height = '100%';
            body.style.overflow = 'hidden';
            hamburger.style.opacity = '30%';
            hamburger.classList.add('noclick');
        }

        isExpanded = !isExpanded;
        isShopfxExpanded = !isShopfxExpanded;
    }

    shop?.addEventListener('click', toggleShopMenu);

    const toggleHeaderFx = () => {
        if (topFx.classList.contains('expanded')) {
            topFx.style.height = '50px';
            topFx.classList.remove('expanded', 'active');
        } else {
            topFx.style.height = '100%';
            topFx.classList.add('expanded', 'active');
        }
    }

    const toggleHamburgerMenu = () => {
        const lines = document.querySelectorAll('.hamburger span');
        if (hamburger.classList.contains('active')) {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
            hamburger.classList.remove('active');
            body.style.overflow = 'auto';
        } else {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            hamburger.classList.add('active');
            body.style.overflow = 'hidden';
        }
    }

    hamburger?.addEventListener('click', toggleHeaderFx);
    hamburger?.addEventListener('click', toggleHamburgerMenu);
});
</script>

<style scoped>
#navBar-unflip::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, var(--op));
}
</style>
