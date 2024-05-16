<template>
    <div class="globalfx"></div>
    <div id="globalfx-down" class="globalfx-down"></div>
    <div class="top-fxbox" id="topFxBox">
        <div class="top-fx">
            <HeaderLink text="首页" :link="links.home_link" />
            <HeaderLink text="照片墙" :link="links.inst_link" />
            <HeaderLink text="故事线" link="" />
            <HeaderLink text="作品集" link="" />
            <HeaderLink text="关于我们" link="" />
            <HeaderLink text="取得联系" link="" />
            <!-- <div class="header-fx"><a class="white underline">Complex Dream</a></div>
            <div class="header-fx"><a class="white underline">Amusement Park</a></div>
            <div class="header-fx"><a class="white underline">Sounds Of Future</a></div> -->
        </div>
    </div>
    <div class="shopmenubox" id="shopBox">
        <div class="shopmenu">
            <!-- <div class="shopmenu-fx"><a class="white underline" :href="links.soundcloud_link">在 SoundCloud 上试听</a></div>
            <div class="shopmenu-fx"><a class="white underline" :href="links.dizzylab_link">在 Dizzylab 上购买</a></div>
            <div class="shopmenu-fx"><a class="white underline" :href="links.beatport_link">在 Beatport 上购买</a></div>
            <div class="shopmenu-fx"><a class="white underline" href="">在 Qobuz 上购买</a></div>
            <div class="shopmenu-fx"><a class="white underline" href="">在 Juno 上购买</a></div> -->
            <HeaderLink text="前往 akmeow 阿卡喵↗" link="" />
            <HeaderLink text="前往 Beatport↗" :link="links.beatport_link" />
            <HeaderLink text="前往 Dizzylab↗" :link="links.dizzylab_link" />
            <HeaderLink text="前往 SoundCloud↗" :link="links.soundcloud_link" />
        </div>
    </div>
    <div class="header-topbox" id="navBar">
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
// @ts-nocheck
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

var prevScrollpos = window.scrollY;
window.addEventListener('scroll', function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navBar").style.top = "0";
        document.getElementById("shopBox").style.top = "0";
        document.getElementById("topFxBox").style.top = "0";
        document.getElementById("headerDownBox").style.top = "50px";
    } else {
        document.getElementById("navBar").style.top = "-50px";
        document.getElementById("shopBox").style.top = "-50px";
        document.getElementById("topFxBox").style.top = "-50px";
        document.getElementById("headerDownBox").style.top = "0";

    }
    prevScrollpos = currentScrollPos;
});

</script>

<style scoped></style>