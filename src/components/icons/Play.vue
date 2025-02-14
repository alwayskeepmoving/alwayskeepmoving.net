<template>
    <main class="play">
        <svg class="play-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307.79 350.48">
            <path
                d="M299.74,161.29L24.15,2.18C13.42-4.02,0,3.73,0,16.12v318.23c0,12.39,13.42,20.14,24.15,13.94l275.59-159.11c10.73-6.2,10.73-21.69,0-27.89Z" />
        </svg>
    </main>
</template>

<style scoped>
.play {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    margin-right: 20px;
    background-size: cover;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.55);
    transition: all .3s cubic-bezier(0.81, -0.01, 0.39, 0.98);
}

.play-triangle {
    fill: rgb(0, 0, 0);
    opacity: .7;
    background-image: url("/img/icons/play.svg");
    background-repeat: no-repeat;
    height: 14px;
    width: 14px;
    margin-left: 4px;
    transition: all .3s cubic-bezier(0.81, -0.01, 0.39, 0.98);

}

.play:active {
    box-shadow: none;
    transition: all .1s cubic-bezier(0.81, -0.01, 0.39, 0.98);
}

.play:active .play-triangle {
    opacity: 1;
    fill: rgb(0, 0, 0);
    transform: scale(1.1);
    transition: all .1s cubic-bezier(0.81, -0.01, 0.39, 0.98);
}
</style>