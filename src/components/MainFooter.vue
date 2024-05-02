<template>
    <div class="footer-box">
        <div class="footer">
            <div class="footer-logobox">
                <div>
                    <img class="footer-logo" src="/img/alwayskeepmoving.svg" alt="alwayskeepmoving logo">
                </div>
                <div>
                    <a href="https://space.bilibili.com/2119054500"><img class="footer-logo"
                            src="/img/social/bilibili.svg" alt="在 BiliBili 上关注我们"></a>
                </div>
                <div>
                    <a href="https://twitter.com/ayskeepmoving"><img class="footer-logo" src="/img/social/twitter.svg"
                            alt="在 Twiter 上关注我们"></a>
                </div>
                <div>
                    <a href="https://www.beatport.com/label/alwayskeepmoving-records/102961"><img class="footer-logo"
                            src="/img/social/beatport.svg" alt="在 Beatport 上关注我们"></a>
                </div>
                <div>
                    <a href="https://soundcloud.com/alwayskeepmoving"><img class="footer-logo"
                            src="/img/social/soundcloud.svg" alt="在 SoundCloud 上关注我们"></a>
                </div>
            </div>
            <div class="footer-infobox">
                <div class="footer-info">
                    <h1>有关本站</h1>
                    <h2><a href="javascript:void(0)" id="cookies">Cookies</a></h2>
                    <h2><a href="javascript:void(0)">隐私政策</a></h2>
                </div>
                <div class="footer-info">
                    <h1>取得联系</h1>
                    <h2><a target="_blank" href="http://qm.qq.com/cgi-bin/qm/qr?group_code=716318729">QQ交流群</a></h2>
                    <h2><a href="mailto:submission@alwayskeepmoving.net">投递稿件</a></h2>
                    <h2><a href="mailto:cs@alwayskeepmoving.net">联系我们</a></h2>
                </div>
                <div class="footer-info">
                    <h1>友情链接</h1>
                    <h2><a href="https://www.dizzylab.net/">Dizzylab</a></h2>
                    <h2><a href="https://www.akmeow.top">akmeow 阿卡喵</a></h2>
                    <h2><a href="https://www.polarissmusic.cn">CryolysiS 冷分解</a></h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer-box {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    background-color: rgb(10, 10, 10);
    user-select: none;
    overflow-y: auto;
    position: relative;
    z-index: 1;
}

.footer {
    display: block;
    background-color: rgb(10, 10, 10);
    height: auto;
    width: 100%;
    margin: auto;
    position: relative;
    flex-direction: column;
}

.footer-logobox {
    width: auto;
    height: 70px;
    display: flex;
    align-items: center;
}

.footer-logo {
    width: auto;
    height: 20px;
    display: flex;
    margin-left: 20px;
    margin-right: 0;
    margin-top: 20px;
    user-select: none;
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
    display: fle;
    width: auto;
    height: auto;
}

.footer-info h1 {
    font-size: 14px;
    font-weight: 600;
}

.footer-info h2 {
    font-size: 14px;
    color: rgb(255, 255, 255);
    font-weight: 400;
}

.footer a {
    font-size: 10px;
    color: rgb(255, 255, 255);
    transition: all 0.1s cubic-bezier(0.82, 0, 0.58, 1);
}

.footer a:active {
    color: rgb(200, 200, 200);
    transition: all 0.1s cubic-bezier(0.82, 0, 0.58, 1);
}

/* 响应式布局 */
@media screen and (min-width:1000px) {

    .footer-infobox {
        display: flex;
    }

}
</style>