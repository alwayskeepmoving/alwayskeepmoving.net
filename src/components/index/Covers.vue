<template>
  <main>
    <div class="coverbox">
      <div class="cover-background">
        <img ref="cover" :src="imgSrc" @load="extractColors" alt="">
      </div>
      <div class="cover-text">
        <div class="textArea">
          <div class="cover-title">{{ title }}</div>
          <div class="cover-artist">{{ artist }}</div>
        </div>
        <Play :style="{ background: backgroundStyle }"></Play>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  }
})

import ColorThief from 'colorthief';
import {ref} from 'vue';
import Play from '../icons/Play.vue';

const colorThief = new ColorThief();
const cover = ref<HTMLImageElement | null>(null);
const backgroundStyle = ref('');

const extractColors = () => {
  if (cover.value && cover.value.complete) {
    try {
      // 颜色数组
      const palette = colorThief.getPalette(cover.value, 10); // 获取最多 9 种颜色

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
  --ch: 650px;
  --cw: 550px;
  height: var(--ch);
  width: var(--cw);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
}

.cover-background {

  overflow: hidden;
  height: var(--cw);
}

.cover-background img {
  height: var(--cw);
  width: var(--cw);
  border-radius: 20px;
}

.cover-text {
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -1px;
  font-weight: 500;
}

.textArea {
  margin-right: auto;
  margin-left: 20px;
}

.cover-artist {
  color: rgba(255, 255, 255, 0.4);
}
</style>