<template>
    <div class="arrow-container">
        <svg class="arrow-svg" fill="#FFF" viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
            </path>
        </svg>
    </div>

</template>

<style>
    .arrow-svg{
        transform: rotateY(180deg);
    }
    .arrow-container {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: 40px;
        transform: scale(0.6);
        opacity: 0;
        transition: all 0.4s ease-in-out;
    }

    @media (any-hover: hover){
        .header-fx:hover .arrow-container {
            opacity: 1;
            transition: all 0.3s ease-in-out;
            transform: scale(1);
        }
    }
</style>