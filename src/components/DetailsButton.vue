<template>
    <div id="ShowDetails" class="detailsbtn" @click="ShowDetails">
        <span>{{ detailsname }}</span>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck
defineProps({
    detailsname: {
        type: String,
        required: true
    }
})
const body = document.querySelector('body');

function changeBlur(value) {
        document.documentElement.style.setProperty("--initblur", value);
}

function ShowDetails() {
    document.getElementById("navBar").style.top = "-50px";
    document.getElementById("shopBox").style.top = "-50px";
    document.getElementById("topFxBox").style.top = "-50px";
    document.getElementById("headerDownBox").style.top = "-50px";
    document.getElementById("details").style.display = "flex";
    document.getElementById("closearea").style.display = "flex";
    document.getElementById("details").style.top = "0";
    document.getElementById("closearea").style.opacity = "1";
    changeBlur('20px');
    document.getElementById('globalfx-down').style.opacity = '100%';
    body.style.overflow = 'hidden';
}
</script>

<style scoped>
.detailsbtn {
    margin-right: 20px;
    margin-left: -10px;
    width: auto;
    height: 24px;
    background-color: rgb(41, 84, 255);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 10px;
    color: rgb(255, 255, 255);
    transition: all 0.15s ease-in-out;
    user-select: none;
    z-index: 3;
}

.detailsbtn:active {
    background-color: rgb(41, 40, 255);
}

@media (any-hover: hover) {
    .detailsbtn:hover {
        background-color: rgb(41, 40, 255);
    }
}

span {
    margin-left: 12px;
    margin-right: 12px;
}
</style>