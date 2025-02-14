<template>
    <main class="home-container">
        <section ref="section1">
            <h2>
                <span ref="slogan" class="halo-white">{{ HERO.slogan }}</span>
                <br>
                <div class="typer-container">
                    <span class="halo">{{ HERO.love }}</span>
                    <span class="typer">
                    </span>
                </div>
            </h2>
            <div class="button-container">
                <GradientButton text="投递稿件" />
                <Button text="取得联系" />
            </div>
        </section>
        <section ref="section2">
            <div class="album-list">
                <Cover v-for="(album, index) in albums" :key="index" :imgSrc="album.imgSrc" :title="album.title"
                    :artist="album.artist" :year="2024">
                </Cover>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from './Buttons/Button.vue';
import GradientButton from './Buttons/GradientButton.vue';
import Cover from './Cover.vue';
import { albums } from '../works'

const HERO = ref({
    slogan: 'We Meticulously Create',
    love: 'Doujin Music',
})

onMounted(() => {
    const line = document.getElementById('navBar-unflip');
    if (line) {
        line.style.setProperty("--op", "0");
    }
    const sections = ref<HTMLElement[]>([]);

    // 获取所有 section 元素
    sections.value = Array.from(document.querySelectorAll('section'));

    let isScrolling = false;
    let startY = 0; // 记录触摸开始时的 Y 坐标

    // 鼠标滚动事件
    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        isScrolling = true;

        // 判断滚动方向
        const scrollDirection = event.deltaY > 0 ? 1 : -1; // 向下滚动为 1，向上滚动为 -1
        handleScroll(scrollDirection);

        // 防止多次触发滚动
        setTimeout(() => {
            isScrolling = false;
        }, 500); // 延时 500ms
    });

    // 触摸事件：触摸开始时记录起始位置
    window.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY; // 获取触摸点的初始 Y 坐标
    });

    // 触摸事件：触摸滑动时计算方向
    window.addEventListener('touchmove', (event) => {
        if (isScrolling) return;

        const currentY = event.touches[0].clientY; // 当前触摸点的 Y 坐标
        const scrollDirection = startY - currentY > 0 ? 1 : -1; // 判断滑动方向

        handleScroll(scrollDirection);
        startY = currentY; // 更新起始位置，避免触发多次滚动
    });

    // 处理滚动的逻辑
    function handleScroll(scrollDirection: number) {
        const currentSectionIndex = sections.value.findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0; // 当前屏幕中的 section
        });

        // 计算目标 section 索引，防止超出边界
        const targetSectionIndex = Math.min(
            Math.max(currentSectionIndex + scrollDirection, 0), // 向下滚动到下一个，向上滚动到上一个
            sections.value.length - 1
        );

        // 滚动到目标 section
        sections.value[targetSectionIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // 防止多次触发滚动
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 500); // 延时 500ms
    }
});

// var coverOffset = 40;
// const widthOffset = ref(coverOffset + 'px');

// function handleResize() {
//     // 向左偏移 40 px
//     coverOffset -= 560;
//     widthOffset.value = coverOffset + 'px'; // 更新响应式值
//     console.log("OK, widthOffset updated to:", widthOffset.value);
// }
// function backResize() {
//     // 向左偏移 40 px
//     coverOffset += 560;
//     widthOffset.value = coverOffset + 'px'; // 更新响应式值
//     console.log("OK, widthOffset updated to:", widthOffset.value);
// }
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
}

.home-container {
    width: 100vw;
    background-color: rgb(20, 20, 20);
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

section {
    height: 100vh;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

h2 {
    color: #ffffffda;
    font-size: 64px;
    font-weight: 600;
    letter-spacing: -2px;
    text-align: center;
    z-index: 1;
    margin: 0 40px 0 40px;
}

.halo-white {
    filter: drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.603));
}

.halo {
    opacity: 1;
    color: rgba(255, 255, 255, 0.829);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 1;
    filter: drop-shadow(0px 0px 20px rgb(128, 0, 255));
}

.halo::after {
    content: 'Doujin Music';
    font-size: 50px;
    color: rgb(128, 0, 255);
    position: absolute;
    filter: blur(42px);
    z-index: -1;
    /* opacity: 0; */
    /* animation: linearop 1.5s ease-in-out forwards; */
    animation-delay: 1s;
}

.halo::after {
    content: 'Doujin Music';
    font-size: 64px;
    color: rgb(128, 0, 255);
    position: absolute;
    filter: blur(48px);
    z-index: -1;
    /* opacity: 0; */
    /* animation: linearop 1.5s ease-in-out forwards; */
    /* animation-delay: .8s; */
}

@keyframes linearop {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.typer-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.typer {
    background-color: #ffffffda;
    display: inline-block;
    height: 54px;
    width: 2px;
    margin-left: 4px;
    animation: linearop 1s ease-in-out infinite;
}


.button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.album-list {
    width: auto;
    /* margin-left: v-bind(widthOffset); */
    display: grid;
    list-style-type: none;
    grid-auto-flow: column;
    grid-template-columns: unset;
    grid-auto-columns: 1fr;
    grid-gap: 40px;
    padding-left: 0px;
    transition: all 1s cubic-bezier(0.81, -0.01, 0.39, 0.98);
}

@media screen and (max-width:520px) {
    h2 {
        font-size: 42px;
    }

    .typer {
        background-color: #ffffffda;
        display: inline-block;
        height: 38px;
        width: 2px;
        margin-left: 4px;
    }
}
</style>