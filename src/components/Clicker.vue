<script setup>
    import { useCounterStore } from '../stores/counter'
    import { useBoostStore } from '../stores/boosts'
    import { useMonkeyStore } from '../stores/monkeys'
    import { useSkinStore } from '../stores/skins'
    import { ref } from 'vue'

    const counter = useCounterStore();
    const boostStore = useBoostStore();
    const monkeyStore = useMonkeyStore();
    const skinStore = useSkinStore();

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
    <article id="clicker">
            <section>
                <p class="text"> {{ compact(counter.count) }} Pops</p>
                <p v-if="!boostStore.boosts[1].active" class="pps">Pops per second: {{ compact(counter.popsPerSecond) }}</p>
                <p v-if="boostStore.boosts[1].active" class="pps">Pops per second: {{ compact(counter.bountyPopsPerSecond) }}</p>
            </section>
            <section>
                <button id="bloon-button" @click="counter.click()"><img :src="skinStore.currentSkin" alt="balloon"></button>
            </section>
            <section id="boosts">
                <button v-for="(boost, i) in boostStore.boosts" :key="i" v-show="boost.unlocked" :disabled="boost.onCooldown" class="boost" @click="boostStore.useBoost(boost)"><img :src="boost.image" alt=""></button>
            </section>
    </article>
</template>

<style scoped lang="scss">
    @import "../mixins.scss";

    #clicker{
        @include flex-column;
        width: 40%;
        height: 100%;
        gap: 15%;
        background-image: url("../assets/background.png");
        background-size: cover;

        @include responsive(smartphone-portrait){
            width: 100%;
        }

        @include responsive(smartphone-landscape){
            width: 100%;
        }
    }

    #bloon-button{
    background-color: transparent;
    border: none;
    transition: 0.3s ease all;

        img{
            width: 100%;
            cursor: pointer;
        }

        &:hover{
            scale: 1.1;
        }
    }

    #boosts{
        @include flex-row;
        gap: 10px;
    }

    .boost{
        border: none;
        background: none;

        &:hover{
            cursor: pointer;
        }

        &:disabled{
            img{
                filter: grayscale(1);
            }

            cursor: not-allowed;
        }

        img{
            width: 60px;

            @include responsive(tablet){
                width: 45px;
            }
        }
    }

    .pps{
        font-family: 'Luckiest Guy', sans-serif;
        font-size: 2em;
        text-align: center;
    }

    #slide-button-left, #slide-button-right{
        display: none;
        position: absolute;

        button{
            @include button;
        }

        @include responsive(smartphone-portrait){
            display: block;
        }

        @include responsive(smartphone-landscape){
            display: block;
        }
    }

    #slide-button-left{
        left: 0;
        
        button{
            border-left: none;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }

    #slide-button-right{
        right: 0;

        button{
            border-right: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
</style>