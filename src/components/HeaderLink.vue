<template>
  <a class="header-fx white underline" :href="link">
    <p class="text">{{ text }}</p>
    <slot></slot>
    <Arrow />
  </a>
</template>

<script setup lang="ts">
import Arrow from './icons/Arrow.vue';

defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
})
</script>

<style scoped>
.text {
  margin-left: 40px;
}
</style>