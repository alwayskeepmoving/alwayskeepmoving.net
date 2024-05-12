<template>
  <div class="header-downbox">
    <div class="header-down">
      <div class="header">
      <span class="left">{{ title }}</span>
      <div id="chevron" class="chevron">
        <span class="chevron-left"></span>
        <span class="chevron-right"></span>
      </div>
      <div class="yjjx">详情</div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
defineProps({
  title: {
    type: String,
    required: true
  }
})

document.addEventListener("DOMContentLoaded", function () {
  function changeBlur(value) {
        document.documentElement.style.setProperty("--initblur", value);
  }
  let isExpanded = false;
  const body = document.querySelector('body');
  const globalfxdown = document.querySelector('.globalfx-down');
  const headerDownbox = document.querySelector('.header-downbox');
  const chevron = document.getElementById('chevron')
    if (chevron) {
        chevron.addEventListener('click', () => {
            if (isExpanded) {
                headerDownbox.style.height = '50px';
                globalfxdown.style.opacity = '0';
                changeBlur('0');
                body.style.overflow = 'auto';
                chevron.classList.remove('chevron-tobe');

            } else {
                headerDownbox.style.height = '200px';
                globalfxdown.style.opacity = '100%';
                changeBlur('20px');
                body.style.overflow = 'hidden';
                chevron.classList.toggle('chevron-tobe');
            }
            // 更新标记变量的值
            isExpanded = !isExpanded
            
        });
    }
});
</script>

<style scoped>
.header-downbox {
  justify-content: center;
  position: fixed;
  background-color: rgba(20, 20, 20, 0.8);
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  left: 0;
  top: 50px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  z-index: 2;
  transition: all 1s cubic-bezier(0.86, 0, 0.07, 1);
}

.header-downbox::after {
  position: absolute;
  bottom: 0;
  content: '';
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
}

/* 第二个顶栏 */
.header-down {
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  z-index: 2;
  transition: all 1s cubic-bezier(0.86, 0, 0.07, 1),
}

.header{
  top: 0;
  position: absolute;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
}

.chevron {
  margin-top: 0;
  margin-left: auto;
  width: 40px;
  height: 100%;
  display: block;
  position: relative;
  z-index: 1;
  transition: all 1s cubic-bezier(0.86, 0, 0.07, 1), transform-origin 1s cubic-bezier(0.86, 0, 0.07, 1);
  transform: translateY(0);
  opacity: 0.8;
}

.chevron-left,
.chevron-right {
  background: #FFF;
  content: "";
  display: block;
  position: absolute;
  top: 55%;
  width: 11px;
  height: 1px;
  z-index: 1;
  transition: all 1s cubic-bezier(0.86, 0, 0.07, 1), transform-origin 1s cubic-bezier(0.86, 0, 0.07, 1);
}

.chevron-left {
  transform-origin: 100% 100%;
  transform: rotate(40deg) scaleY(1.1);
  right: 50%;
  border-radius: .5px 0 0 .5px;
}

.chevron-right {
  transform-origin: 0% 100%;
  transform: rotate(-40deg) scaleY(1.1);
  left: 50%;
  border-radius: 0 .5px .5px 0;
}

.chevron-tobe {
  margin-top: -20px;
}

.chevron-tobe .chevron-left {
  transform: rotate(-40deg) scaleY(1.1);
  transform-origin: 100% 0;
  top: 60%;
}

.chevron-tobe .chevron-right {
  transform: rotate(40deg) scaleY(1.1);
  transform-origin: 0 0;
  top: 60%;
}

@media screen and (min-width:1000px) {
    .header-down {
        width: 1000px;
    }
}
</style>