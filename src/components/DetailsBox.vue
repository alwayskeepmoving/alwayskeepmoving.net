<template>
    <div class="details-box-bg" id="details">
        <div class="details-box">

        </div>
    </div>
    <div class="closearea" id="closearea">
        <div class="close">
            <div class="closebtm" @click="close">
                <Close />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import Close from './icons/Close.vue';

function changeBlur(value) {
    document.documentElement.style.setProperty("--initblur", value);
}

function close() {
    const details = document.getElementById("details") as HTMLElement;
    const closearea = document.getElementById("closearea") as HTMLElement;
    const globalfxdown = document.querySelector('.globalfx-down');
    const body = document.querySelector('body');
    document.getElementById("navBar").style.top = "0";
    document.getElementById("shopBox").style.top = "0";
    document.getElementById("topFxBox").style.top = "0";
    document.getElementById("headerDownBox").style.top = "50px";
    details.style.top = "100vh";
    changeBlur('0');
    globalfxdown.style.opacity = "0";
    closearea.style.opacity = "0";
    body.style.overflow = 'auto';
    setTimeout(() => {
        details.style.display = "none";
    }, 1200);
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.showdetails {
    display: none;
}

.details-box-bg {
    overflow: auto;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 100vh;
    left: 0;
    z-index: 6;
    justify-content: center;
    display: flex;
    transition: top 1.2s cubic-bezier(0.86, 0, 0.07, 1);
}

h1 {
    color: #FFF;
}

.details-box {
    --cotent-height: 2000px;
    background-color: rgb(10, 10, 10);
    margin: 50px 20px 20px 20px;
    width: 100%;
    height: var(--cotent-height);
    border-radius: 25px;
}

.closearea {
    position: absolute;
    height: 60px;
    width: 100%;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
    pointer-events: none;
    opacity: 0;
    transition: all 1.2s cubic-bezier(0.86, 0, 0.07, 1);
}

.close {
    background-color: rgba(70, 70, 70, 0.4);
    backdrop-filter: blur(10px);
    position: inherit;
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 60px;
    width: 60px;
    justify-content: center;
    transition: all 0.1s cubic-bezier(0.82, 0, 0.58, 1);
    pointer-events: all;
    user-select: none;
    border: rgb(40, 40, 40) .6px solid;

}

.closebtm {
    height: 20px;
    width: 20px;
}

.close:active {
    background-color: rgba(70, 70, 70, 0.6);

}

@media (any-hover: hover) {
    .close:hover {
        background-color: rgba(70, 70, 70, 0.6);
    }
}
</style>