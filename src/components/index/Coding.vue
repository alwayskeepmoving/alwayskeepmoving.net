<template>
    <div class="header-mmj"></div>
    <div class="coding-container">
        <h2>🛠️
            <br>
            Still
            <br>
            <span class="animated-gradient">Building...</span>
            <br>
            & <span>Testing...</span>
        </h2>
        <h3>
            我知道你很急，但是你先别急（
        </h3>
        <p class="text">
            什么风把您吹到这儿了？这个网站还在搭建和测试中。在其他页面构建完成之前，你可以先行浏览我们的<a href="./inst/">照片墙</a>。
        </p>
    </div>
</template>

<style scoped>
* {
    color: #FFF;
    margin: 0;
    padding: 0;
}

.coding-container {
    width: 100%;
    height: 100%;
}

h2 {
    margin-top: 20px;
    font-size: 60px;
    font-weight: 600;
    margin-left: 20px;
    margin-right: 20px;
}

h3 {
    margin-top: 20px;
    font-size: 26px;
    font-weight: 500;
    margin-left: 20px;
    margin-right: 20px;
}

.text {
    font-weight: 400;
    font-size: 12px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
}

.animated-gradient {
    background: radial-gradient(circle at center, #2659ff, #21f8ff, #7d3cff, #ff366f, #ff461d);
    background-size: 660px 660px;
    --anime-speed: 4s;
    -webkit-background-clip: text;
    /* 使用渐变作为文字的背景 */
    background-clip: text;
    /* 使用渐变作为文字的背景 */
    -webkit-text-fill-color: transparent;
    /* 隐藏文字填充颜色，让背景可见 */
    -webkit-animation: FadeGradient var(--anime-speed) linear infinite;
    -moz-animation: FadeGradient var(--anime-speed) linear infinite;
    animation: FadeGradient var(--anime-speed) linear infinite;
}

@keyframes FadeGradient {
    0% {
        background-position: 0% 0px;
    }

    100% {
        background-position: 660px -660px;
    }
}

@media screen and (max-width:600px) {
    .coding-container {
        display: block;
    }

    h2 {
        font-size: 36px;
    }

    h3 {
        font-size: 16px;
    }

    .text {
        font-size: 10px;
    }
}
</style>