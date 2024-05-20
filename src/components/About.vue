<script setup>

</script>

<template>
    <article class="about">
        <section>   
            <h1 class="headline">About the game</h1>
            <p class="text">This clicker game was based on the Bloons Tower Defense Franchise.</p>
        </section>
    </article>
</template>

<style lang="scss" scoped>
    section{
        display: flex;
        flex-direction: column;
        background-image: url("../assets/wood-texture.jpg");
        background-size: cover;
        text-align: center;
        border-top: ridge 10px rgb(101, 60, 22);
        border-bottom: ridge 10px rgb(101, 60, 22);
        padding: 40px;
        gap: 20px;
    }

    .headline{
        font-family: 'Luckiest Guy', sans-serif;
        font-size: 3.5em;
        width: 100%;
    }

    .text{
        font-size: 2em;
    }
</style>