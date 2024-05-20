<script setup>
    import Clicker from '../components/Clicker.vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <main>
        <article class="clicker">
            <Header></Header>
            <Clicker></Clicker>
        </article>
    </main>

    
</template>

<style scoped lang="scss">
@import "../mixins.scss";

    .clicker{
        @include flex-column;
        width: 100%;
        height: 100%;
    }
</style>