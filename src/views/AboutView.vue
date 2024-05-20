<script setup>
    import About from "../components/About.vue";
    import Header from '../components/Header.vue'
</script>

<template>
    <main>
        <article class="about">
            <Header></Header>
            <About></About>
        </article>
    </main>
</template>

<style scoped lang="scss">
@import "../mixins.scss";

    .about{
        @include flex-column;
        width: 100%;
        height: 100%;
        background-image: url("../assets/background.png");
        background-size: cover;
    }
</style>