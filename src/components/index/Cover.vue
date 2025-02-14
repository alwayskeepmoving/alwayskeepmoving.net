<template>
  <main>
    <div class="coverbox">
      <div class="cover-background">
        <img ref="cover" :src="imgSrc" @load="extractColors">
      </div>
      <div ref="textArea" class="cover-text" :style="{ background: backgroundStyle }">
        <div class="cover-title">{{ title }}</div>
        <div class="cover-artist">{{ artist }}</div>
        <div class="cover-year">{{ year }}</div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ColorThief from 'colorthief';
import { ref } from 'vue';

defineProps({
  imgSrc: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  artist: {
    type: String,
    required: false
  },
  year: {
    type: Number,
    required: false
  }
})

const colorThief = new ColorThief();
const cover = ref<HTMLImageElement | null>(null);
const textArea = ref<HTMLElement | null>(null);
const backgroundStyle = ref('');

const extractColors = () => {
  if (cover.value && cover.value.complete) {
    try {
      // 颜色数组
      const palette = colorThief.getPalette(cover.value, 9); // 获取最多 9 种颜色

      // 背景样式
      // @ts-ignore
      backgroundStyle.value = palette.map((color, index) => {
        const angle = 217 + (index * 45);  // 每个渐变角度偏移 45 度
        return `linear-gradient(${angle}deg, rgba(${color[0]}, ${color[1]}, ${color[2]}, .8), rgba(${color[0]}, ${color[1]}, ${color[2]}, 0) 70.71%)`;
      }).join(', ');
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
  user-select: none;
}


.coverbox {
  /* transform: scale(0.8); */
  --ch: 400px;
  --cw: 300px;
  background-color: black;
  height: var(--ch);
  width: var(--cw);
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
  height: var(--cw);
}

.cover-background img {
  height: var(--cw);
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