<template>
    <div class="header-downbox">
        <div class="header-down">
            <span class="left">{{ title }}</span>
            <div class="yjjx">详情
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>