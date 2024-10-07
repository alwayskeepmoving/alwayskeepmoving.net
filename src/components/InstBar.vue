<template>
    <div class="insbar">
        <!-- 点赞功能 -->
        <div class="like" :class="{ active: isLiked }" @click="toggleLike">
            <Like />
        </div>
        <div class="liked" :class="{ active: isLiked }" @click="toggleLike">
            <Liked />
        </div>

        <div class="cmtrbq">
            <div class="comment" :class="{ active: isCommented }" @click="toggleComment">
                <Comment />
            </div>
            <div class="commented" :class="{ active: isCommented }" @click="toggleComment">
                <Commented />
            </div>
        </div>

        <div class="sharerbq">
            <div class="fenxiang" :class="{ active: isShared }" @click="shareContent">
                <Share />
            </div>
            <div class="fenxianged" :class="{ active: isShared }" @click="shareContent">
                <Shared />
            </div>
        </div>

        <div class="rbq">
            <div class="star" :class="{ active: isStared }" @click="toggleStar">
                <Star />
            </div>
            <div class="stared" :class="{ active: isStared }" @click="toggleStar">
                <Stared />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Share from './icons/inst/Share.vue'
import Shared from './icons/inst/Shared.vue'
import Like from './icons/inst/Like.vue'
import Liked from './icons/inst/Liked.vue'
import Comment from './icons/inst/Comment.vue'
import Commented from './icons/inst/Commented.vue'
import Star from './icons/inst/Star.vue'
import Stared from './icons/inst/Stared.vue'

// 定义状态
const isLiked = ref(false)
const isCommented = ref(false)
const isShared = ref(false)
const isStared = ref(false)

// 点赞功能
const toggleLike = () => {
    isLiked.value = !isLiked.value
}

// 评论功能
const toggleComment = () => {
    isCommented.value = !isCommented.value
}

// 分享功能
const shareContent = async () => {
    try {
        await navigator.share({
            title: '照片墙',
            text: '分享!',
            url: 'https://www.alwayskeepmoving.net',
        })
        isShared.value = true
        setTimeout(() => {
            isShared.value = false
        }, 500)
    } catch (error) {
        // console.log('分享失败', error)
        alert(error)
    }
}

// 收藏功能
const toggleStar = () => {
    isStared.value = !isStared.value
}
</script>


<style>
.insbar {
    display: flex;
    height: 50px;
    background-color: rgb(20, 20, 20);
    align-items: center;
}

.insbar .like {
    width: 24px;
    height: 24px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -4px;
    position: relative;
    opacity: 1;
    transform: scale(1);
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.insbar .like.active {
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(0.7);
    transform-origin: center center;
}

.insbar .liked {
    width: 24px;
    height: 24px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -4px;
    position: absolute;
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(0.9);
    transform-origin: center center;
}

.insbar .liked.active {
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(1);
    transform-origin: center center;
}

.insbar .cmtrbq {
    width: 24px;
    height: 24px;
    margin-left: 20px;
    justify-content: center;
    margin-right: -4px;
    align-items: center;
}

.insbar .comment {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.insbar .comment.active {
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(0.9);
    transform-origin: center center;
}

.insbar .commented {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.insbar .commented.active {
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(1);
    transform-origin: center center;
}

.insbar .sharerbq {
    width: 24px;
    height: 24px;
    margin-left: 20px;
    justify-content: center;
    margin-right: -4px;
}

.insbar .fenxiang {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    position: absolute;
    transition: opacity 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.insbar .fenxiang.active {
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(0.9);
    transform-origin: center center;
}

.insbar .fenxianged {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    position: absolute;
    transform: scale(0.9);
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.insbar .fenxianged.active {
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(1);
    transform-origin: center center;
}


.insbar .rbq {
    width: 24px;
    height: 24px;
    margin-right: 20px;
    justify-content: center;
    margin-left: auto;
}

.insbar .star {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    position: absolute;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.insbar .star.active {
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(0.9);
    transform-origin: center center;
}

.insbar .stared {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    position: absolute;
    transform: scale(0.9);
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
}

.insbar .stared.active {
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.82, 0, 0.58, 1);
    transform: scale(1);
    transform-origin: center center;
}
</style>