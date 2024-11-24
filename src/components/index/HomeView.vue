<template>
    <main>
        <section>
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
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
// @ts-ignore
import Button from '../Button.vue';
// @ts-ignore
import GradientButton from '../GradientButton.vue';

const HERO = ref({
    slogan: 'We Meticulously Create',
    love: 'Doujin Music',
})

// const words = ["Doujin Music", "Visual Design", "Open Source"]

// const text = ref<HTMLElement | null>(null);
// const slogan = ref<HTMLElement | null>(null);

// let wordIndex = 0;
// let charIndex = 0;
// let isDelete = false;
// let delay = 500;
// let defaultDelayTime = 100;
// let waitDelayTime = 2000;

// const updateText = () => {
//     if (text.value) {
//         text.value.textContent = words[wordIndex].substring(0, charIndex);
//     }

//     if (!isDelete) {
//         delay = defaultDelayTime;
//         charIndex++;

//         if (charIndex - 1 === words[wordIndex].length) {
//             delay = waitDelayTime;
//             isDelete = true;
//         }
//     } else if (isDelete) {
//         delay = defaultDelayTime;
//         charIndex--;

//         if (charIndex < 1) {
//             isDelete = false;
//             wordIndex++;
//             if (wordIndex >= words.length) {
//                 wordIndex = 0;
//             }
//         }
//     }
//     setTimeout(updateText, delay);
// }

onMounted(() => {
    const line = document.getElementById('navBar-unflip');
    if (line) {
        line.style.setProperty("--op", "0");
    }

    // updateText();
})
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
}

main {
    background-color: rgb(20, 20, 20);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

h2 {
    color: #ffffffda;
    font-size: 64px;
    font-weight: 600;
    letter-spacing: -2px;
    text-align: center;
    z-index: 1;
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
    content: 'marvellous';
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
    content: 'marvellous';
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
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
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
    animation: linearop 1s ease-in-out infinite;
}


.button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 50px;
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