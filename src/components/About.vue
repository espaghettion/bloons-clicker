<script setup>
    import { useCounterStore } from '../stores/counter';

    const counter = useCounterStore();

    const compact = (number, digits = 2) => {
        const lookup = [
            {value: 1, symbol: ""},
            {value: 1e3, symbol: "K"},
            {value: 1e6, symbol: "M"},
            {value: 1e9, symbol: "B"},
            {value: 1e12, symbol: "T"},
            {value: 1e15, symbol: "Q"},
            {value: 1e18, symbol: "Qu"}
        ];
        const rx = /.0+$|(.[0-9]*[1-9])0+$/;
        const item = lookup.slice().reverse().find(function (item) {
            return number >= item.value;
        });
        return item ? (number / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    };
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