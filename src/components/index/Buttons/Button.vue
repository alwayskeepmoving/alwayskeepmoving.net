<template>
  <button class="button">
    <span>{{ text }}</span>
  </button>
</template>

<script setup lang="js">
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.button {
  --button-background: #160d39b7;
  --button-color: #fff;
  --button-shadow: rgba(33, 4, 104, 0.2);
  --button-shine-left: rgba(120, 0, 245, 0.5);
  --button-shine-right: rgba(200, 148, 255, 0.65);
  --button-glow-start: #b000e8;
  --button-glow-end: #009ffd;
  user-select: none;
  appearance: none;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  border-radius: 50px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  color: var(--button-color);
  padding: 0;
  margin: 0;
  background: none;
  z-index: 1;
  box-shadow: 0 8px 20px var(--button-shadow);
  transition: all 1s ease-in-out;
}

.button .gradient {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: -webkit-radial-gradient(white, black);
  transform: scaleY(1.02) scaleX(1.005) rotate(-0.35deg);
}

.button .gradient:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: scale(1.05) translateY(-44px) rotate(0deg) translateZ(0);
  padding-bottom: 100%;
  border-radius: 50%;
  background: linear-gradient(90deg, var(--button-shine-left), var(--button-shine-right));
  animation: rotate linear 2s infinite;
}

.button span {
  font-size: 14px;
  z-index: 1;
  position: relative;
  display: block;
  padding: 10px 24px;
  box-sizing: border-box;
  width: fit-content;
  border-radius: inherit;
  background-color: var(--button-background);
  overflow: hidden;
  border: #372c65 1px solid;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: -webkit-radial-gradient(white, black);
  transition: all .3s ease-in-out;
}

.button span:active {
  background-color: #372c65;
  transition: all .1s ease-in-out;
}


@media (any-hover: hover) {
  .button span:hover {
    background-color: #372c65;
    transition: all .2s ease-in-out;
  }
}
</style>