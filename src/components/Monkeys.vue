<script setup>
    import { ref } from 'vue'
    import { useMonkeyStore } from '../stores/monkeys'
    import { useCounterStore } from '../stores/counter'

    const monkeyStore = useMonkeyStore();
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
        <p class="text">Monkeys</p>
    </section>
    <section class="shop">
        <section v-for="(monkey, i) in monkeyStore.monkeys" :key="i" class="upgrades">
            <article>
                <img :src="monkey.image" alt="">
            </article>
            <article>
                <p>{{ monkey.name }}</p>
                <p>LVL {{ monkey.level }}</p>
            </article>
            <article>
                <button :disabled="monkey.cost > counter.count" @click="monkeyStore.upgrade(monkey)">Buy</button>
                <p class="cost">{{ compact(monkey.cost) }} <img src="../assets/pop.png" alt=""></p>
            </article>
        </section>
    </section>
</template>

<style scoped lang="scss">

</style>
