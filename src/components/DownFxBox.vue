<template>
    <div class="downfxbox">
        <div class="downfx">
            <div class="downfx-text">
                <p>
                    什么风把您吹到这儿了？这个网站还在搭建和测试中哦——————(*/ω＼*)<br>
                    欸多，话说都来到这里了，不来 <a class="white"
                        :href="links.qq_group_links">{{links.qq_group}}</a>
                    喝杯茶咩[]~(￣▽￣)~*<br>
                    <br>
                    哇门哒网易云音乐: <a class="white"
                        :href="links.netease_music">@Always-KeepMoving</a><br>
                    哇门哒 Dizzylab: <a class="white"
                        :href="links.dizzylab">@AlwaysKeepMoving</a><br>
                    哇门哒 Bilibili: <a class="white"
                        :href="links.bilibili">@AlwaysKeepMoving</a><br>
                    向哇门递交稿件: <a class="white"
                        :href="links.submission">submission@alwayskeepmoving.net</a><br>
                    与哇门取得联系: <a class="white" :href="links.contact">cs@alwayskeepmoving.net</a><br>
                    <br>
                    2023/7/30 GBXIN
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const links = {
        qq_group_links: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Wgyb-7WjpEqtT8vCMFVGp06x7VBcvtF4&authKey=LFCMVnklfZurKfIlhIISgnNiukv4j%2FtDFS1RY%2FqWp2PTTy2aNrlPojlvl2iTONO6&noverify=0&group_code=716318729",
        qq_group: "716318729",
        bilibili: "https://space.bilibili.com/2119054500",
        netease_music: "https://music.163.com/#/user/home?id=2010697893",
        dizzylab: "https://www.dizzylab.net/l/AlwaysKeepMoving/",
        submission: "mailto:submission@alwayskeepmoving.net",
        contact: "mailto:cs@alwayskeepmoving.net"
    }
</script>

<style scoped></style>