<!-- <template>
    <main>
        <div class="coverbox">
            <div class="cover-background">
                <img :src="imgSrc">
            </div>
            <div class="cover-text">
                <div class="cover-title">{{ title }}</div>
                <div class="cover-artist">{{ artist }}</div>
                <div class="cover year">{{ year }}</div>
            </div>
        </div>
    </main>
</template> -->

<template>
    <main>
        <div class="coverbox">
            <div class="cover-background">
                <img ref="cover" src="./test.jpg" @load="extractColors">
            </div>
            <div ref="textArea" class="cover-text" :style="backgroundStyle">
                <div class="cover-title">Forbidden Weapons</div>
                <div class="cover-artist">Seventhrun</div>
                <div class="cover-year">2019</div>
            </div>
        </div>
    </main>
</template>

<script setup lang="js">
import ColorThief from 'colorthief';
import { ref } from 'vue';
// defineProps({
//     imgSrc: {
//         type: String,
//         required: true
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     artist: {
//         type: String,
//         required: true
//     },
//     year: {
//         type: Number,
//         required: true
//     }
// })

const colorThief = new ColorThief();
const cover = ref(null);
const textArea = ref(null);

const extractColors = () => {
    if (cover.value && cover.value.complete) {
        try {
            // 颜色数组
            const palette = colorThief.getPalette(cover.value, 9); // 获取最多 9 种颜色

            // 渐变样式，透明度和角度
            const gradients = palette.map((color, index) => {
                const angle = 217 + (index * 45);  // 每个渐变角度偏移 45 度
                return `linear-gradient(${angle}deg, rgba(${color[0]}, ${color[1]}, ${color[2]}, .8), rgba(${color[0]}, ${color[1]}, ${color[2]}, 0) 70.71%)`;
            }).join(', ');

            // 背景样式
            const backgroundStyle = textArea.value.style;
            backgroundStyle.background = gradients;
        } catch (error) {
            console.error('提取调色板失败:', error);
        }
    } else {
        console.warn('图片未完全加载');
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.coverbox {
    background-color: black;
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
    box-sizing: border-box;
    outline: rgba(255, 255, 255, .1) 2px solid;
    outline-offset: -2px;
}

.cover-background {
    overflow: hidden;
    height: 300px;
}

.cover-background img {
    height: 300px;
    width: auto;
}

.cover-text {
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -1px;
    font-weight: 500;
}

.cover-artist,
.cover-year {
    color: rgba(255, 255, 255, 0.6);
}
</style>