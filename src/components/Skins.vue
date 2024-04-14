<script setup>
    import { ref } from 'vue'
    import { useSkinStore } from '../stores/skins'
    import { useCounterStore } from '../stores/counter'

    const skinStore = useSkinStore();
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
    <section class="shop-name">
        <p class="text">Skins</p>
    </section>
    <section class="shop">
        <section v-for="(skin, i) in skinStore.skins" :key="i" class="upgrades">
            <article>
                <img :src="skin.image" alt="">
            </article>
            <article>
                <p>{{ skin.name }}</p>
            </article>
            <article>
                <button :disabled="skin.cost > counter.count" v-show="skin.owned == false" @click="skinStore.buySkin(skin)">Buy</button>
                <button v-show="skin.owned && skin.using == false" @click="skinStore.useSkin(skin)">Use</button>
                <p v-show="skin.owned && skin.using">Using</p>
                <p v-show="skin.owned == false" class="cost">{{ compact(skin.cost) }} <img src="../assets/pop.png" alt=""></p>
            </article>
        </section>
    </section>

</template>

<style scoped lang="scss">

</style>