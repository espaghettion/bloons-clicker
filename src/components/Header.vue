<script setup>
    import { RouterLink } from 'vue-router';
</script>


<template>
    <header>
        <RouterLink class="text" :to="{name: 'home'}">HOME</RouterLink>
        <RouterLink class="text" :to="{name: 'about'}">ABOUT</RouterLink>
    </header>
</template>

<style scoped lang="scss">
    @import "../mixins.scss";

    header{
        @include flex-row;
        width: 100%;
        height: 10%;
        background-image: url("../assets/wood-texture.jpg");
        background-size: 50%;
        border-bottom: ridge 10px rgb(101, 60, 22);
        gap: 40px;

        .text{
            text-decoration: none;
            font-size: 2em;
            color: rgb(255, 160, 7);
        }
    }
</style>