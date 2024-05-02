<template>
    <div class="globalfx"></div>
    <div class="globalfx-down"></div>
    <div class="top-fxbox">
        <div class="top-fx">
            <HeaderLink text="首页" :link="links.home_link"/>
            <HeaderLink text="照片墙" :link="links.inst_link"/>
            <HeaderLink text="故事线" link=""/>
            <HeaderLink text="作品集" link=""/>
            <HeaderLink text="关于我们" link=""/>
            <HeaderLink text="取得联系" link=""/>
            <!-- <div class="header-fx"><a class="white underline">Complex Dream</a></div>
            <div class="header-fx"><a class="white underline">Amusement Park</a></div>
            <div class="header-fx"><a class="white underline">Sounds Of Future</a></div> -->
        </div>
    </div>
    <div class="shopmenubox">
        <div class="shopmenu">
            <div class="shopmenu-fx"><a class="white underline" :href="links.soundcloud_link">在 SoundCloud 上试听</a></div>
            <div class="shopmenu-fx"><a class="white underline" :href="links.dizzylab_link">在 Dizzylab 上购买</a></div>
            <div class="shopmenu-fx"><a class="white underline" :href="links.beatport_link">在 Beatport 上购买</a></div>
            <div class="shopmenu-fx"><a class="white underline" href="">在 Qobuz 上购买</a></div>
            <div class="shopmenu-fx"><a class="white underline" href="">在 Juno 上购买</a></div>
        </div>
    </div>
    <div class="header-topbox">
        <div class="header-top">
            <div class="hbgcontainer">
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
import Arrow from './icons/Arrow.vue';
import HeaderLink from './HeaderLink.vue';

const links = {
    home_link: "https://www.alwayskeepmoving.net",
    inst_link: "https://www.alwayskeepmoving.net/inst/",
    story_link: "https://www.alwayskeepmoving.net/story",
    works_link: "https://www.alwayskeepmoving.net/works",
    about_link: "https://www.alwayskeepmoving.net/about",
    contact_link: "https://www.alwayskeepmoving.net/contact",
    soundcloud_link: "https://soundcloud.com/alwayskeepmoving",
    dizzylab_link: "https://www.dizzylab.net/l/AlwaysKeepMoving/",
    beatport_link: "https://www.beatport.com/label/alwayskeepmoving-records/102961"
};
</script>

<style scoped></style>