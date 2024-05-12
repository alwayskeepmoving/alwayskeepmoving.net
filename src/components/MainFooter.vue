<template>
    <div class="footer-box">
        <div class="footer-container">
            <div class="footer">
                <NavigationBar />
                <div class="footer-infobox">
                    <div class="footer-info">
                        <h3>always <br>
                            keep - <br>
                            moving <br>
                        </h3>
                        <h4>© 2024</h4>
                    </div>
                    <div class="footer-info">
                        <h1>有关本站</h1>
                        <h2><a href="javascript:void(0)" id="cookies">Cookies</a></h2>
                        <h2><a href="javascript:void(0)">问题反馈</a></h2>
                        <h2><a id="privateLink" href="javascript:void(0)">隐私政策</a></h2>
                    </div>
                    <div class="footer-info">
                        <h1>社交媒体</h1>
                        <h2><a target="_blank" :href="sociallinks.bilibili">BiliBili</a></h2>
                        <h2><a target="_blank" :href="sociallinks.netease_music">网易云音乐</a></h2>
                        <h2><a target="_blank" :href="sociallinks.twitter">X (旧 Twitter)</a></h2>
                    </div>
                    <div class="footer-info">
                        <h1>流媒体</h1>
                        <h2><a target="_blank" :href="sociallinks.dizzylab">Dizzylab</a></h2>
                        <h2><a :href="sociallinks.beatport_link">Beatport</a></h2>
                        <h2><a target="_blank" :href="sociallinks.bandcamp">Bandcamp</a></h2>
                    </div>
                    <div class="footer-info">
                        <h1>友情链接</h1>
                        <h2><a href="https://www.dizzylab.net/">Dizzylab</a></h2>
                        <h2><a href="https://www.akmeow.top">akmeow 阿卡喵</a></h2>
                        <h2><a href="https://www.polarissmusic.cn">CryolysiS 冷分解</a></h2>
                    </div>
                    <div class="footer-info">
                        <h1>取得联系</h1>
                        <h2><a target="_blank" href="http://qm.qq.com/cgi-bin/qm/qr?group_code=716318729">QQ 交流群</a>
                        </h2>
                        <h2><a href="mailto:submission@alwayskeepmoving.net">投递稿件</a></h2>
                        <h2><a href="mailto:cs@alwayskeepmoving.net">联系我们</a></h2>
                    </div>
                </div>

            </div>
            <div class="bottom">
                <div class="footer-logobox">
                    <div>
                        <a :href="sociallinks.twitter"><img class="footer-logo" src="/img/social/x.svg"
                                title="在 Twiter 上关注我们"></a>
                    </div>
                    <div>
                        <a :href="sociallinks.bilibili"><img class="footer-logo" src="/img/social/bilibili.svg"
                                title="在 BiliBili 上关注我们"></a>
                    </div>
                    
                    <div>
                        <a :href="sociallinks.beatport_link"><img class="footer-logo" src="/img/social/beatport.svg"
                                title="在 Beatport 上关注我们"></a>
                    </div>
                    <div>
                        <a :href="sociallinks.soundcloud_link"><img class="footer-logo" src="/img/social/soundcloud.svg"
                                title="在 SoundCloud 上关注我们"></a>
                    </div>
                </div>
                <div class="status">
                    <span
                        style="height: 10px;width: 10px;border-radius: 100%;background-color: rgb(112, 255, 175);margin: 0 0 0 10px;"></span>
                    <span style="margin: 0 10px 0 6px;">{{ status }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavigationBar from './NavigationBar.vue';
const sociallinks = {
    bilibili: "https://space.bilibili.com/2119054500",
    bandcamp: "https://alwayskeepmoving.bandcamp.com/",
    netease_music: "https://music.163.com/#/user/home?id=2010697893",
    dizzylab: "https://www.dizzylab.net/l/AlwaysKeepMoving/",
    soundcloud_link: "https://soundcloud.com/alwayskeepmoving",
    dizzylab_link: "https://www.dizzylab.net/l/AlwaysKeepMoving/",
    beatport_link: "https://www.beatport.com/label/alwayskeepmoving-records/102961",
    twitter: "https://twitter.com/ayskeepmoving"
}

const status = "All Systems Normal";
</script>

<style scoped>
.footer-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    --background-color: linear-gradient(180deg, rgb(20, 20, 20) 0%, rgb(10, 10, 10) 50%);
    background: var(--background-color);
    border-top: 1px solid #ffffff24;
    user-select: none;
    overflow-y: auto;
    position: relative;
    z-index: 1;
}

.footer {
    display: block;
    height: auto;
    width: 100%;
    margin: auto;
    position: relative;
    flex-direction: column;
}

.footer-info {
    font-weight: 500;
    font-size: 10px;
    width: auto;
    height: auto;
    margin-left: 20px;
    margin-right: 20px;
    color: #ffffff;
    margin-bottom: 20px;
}

.footer-infobox {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: auto;
    height: auto;
}

.footer-info h1 {
    margin-top: 8px;
    font-size: 12px;
    font-weight: 600;
}

.footer-info h2 {
    font-size: 14px;
    height: 16px;
    color: rgb(255, 255, 255);
    font-weight: 400;
}

.footer-info h3 {
    display: block;
    font-size: 32px;
    font-weight: 500;
    line-height: 0.8;
    letter-spacing: -3px;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
}

.footer-info h4 {
    color: rgb(160, 160, 160);
    margin-top: 8px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -1px;
}

.footer a {
    font-size: 10px;
    color: rgb(160, 160, 160);
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.footer a:active {
    color: rgb(255, 255, 255);
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.footer-container {
    width: 100%;
}

.bottom {
    display: flex;
    height: auto;
    width: 100%;
    margin-top: auto;
    align-items: center;
    margin-bottom: 20px;
}

.footer-logobox {
    display: flex;
    width: auto;
    height: 30px;
    
    margin-left: 20px;
    margin-right: auto;
    align-items: center;
    gap: 12px;
}

.footer-logo {
    opacity: 0.6;
    width: auto;
    height: 16px;
    display: flex;
    margin-right: 0;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.82, 0, 0.58, 1);
}

.footer-logo:hover {
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.status {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: auto;
    font-size: 10px;
    font-weight: 400;
    margin-left: auto;
    margin-right: 20px;
    color: rgb(160, 160, 160);
}

/* 响应式布局 */
@media screen and (min-width:520px) {
    .footer-infobox {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media screen and (min-width:840px) {

    .footer-infobox {
        display: flex;
        /* display: grid; */
        /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
        justify-content: space-between;
        gap: 1.5rem;
    }

    .footer-container {
        width: 1000px;
    }

    .footer-info {
        margin-bottom: 0;
    }

    .footer-info h3 {
        display: block;
    }

    .footer-logobox {
        display: flex;
    }

    .status{
        display: flex;
    }
}

@media (any-hover: hover) {
    .footer a:hover {
        color: rgb(255, 255, 255);
        transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    }
}
</style>