<script setup>
    import { RouterLink } from 'vue-router';
    import { ref, onMounted } from 'vue';

    import Clicker from './components/Clicker.vue'
    import Monkeys from './components/Monkeys.vue'
    import Skins from './components/Skins.vue'
    import Header from './components/Header.vue'
    import { useCounterStore } from './stores/counter'
    import { useBoostStore } from './stores/boosts';

    const counter = useCounterStore();
    const boostStore = useBoostStore();

    const skinShopActive = ref(false);
    const monkeyShopActive = ref(false);

    onMounted(() => {
        if(localStorage.getItem("lastActive") != undefined){
            console.log((Math.abs(new Date() - new Date(localStorage.getItem("lastActive")))) / 1000)
            counter.count += (Math.abs(new Date() - new Date(localStorage.getItem("lastActive")))) / 1000 * counter.popsPerSecond * 0.5
        }
        
        setInterval(() => {
            localStorage.setItem("lastActive", new Date())
        }, 30000)
    })
    
    setInterval(() => {
        if(boostStore.boosts[1].active == true) counter.count = counter.count + counter.bountyPopsPerSecond;
        else counter.count = counter.count + counter.popsPerSecond;
    }, 1000);
</script>

<template>
    <main>
        <article :class="{ active: skinShopActive }" class="shop-area skins">
            <Skins></Skins>
        </article>

        <article class="clicker">
            <RouterView  />
        </article>

        <article :class="{ active: monkeyShopActive }" class="shop-area monkeys">
            <Monkeys></Monkeys>
        </article>

        <section v-if="!skinShopActive" id="open-skins">
            <button @click="skinShopActive = true">S<br>K<br>I<br>N<br>S</button>
        </section>
        <section v-if="!monkeyShopActive" id="open-monkeys">
            <button @click="monkeyShopActive = true">M<br>O<br>N<br>K<br>E<br>Y<br>S</button>
        </section>
        <section v-if="skinShopActive" id="close-skins">
            <button @click="skinShopActive = false">&lt;</button>
        </section>
        <section v-if="monkeyShopActive" id="close-monkeys">
            <button @click="monkeyShopActive = false">&gt;</button>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@import './mixins.scss';

    #open-skins, #open-monkeys, #close-skins, #close-monkeys{
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

    #open-skins{
        left: 0;
    }

    #open-monkeys{
        right: 0;
    }

    #close-skins{
        left: 0;
        top: 0;
        z-index: 1;
    }

    #close-monkeys{
        right: 0;
        top: 0;
        z-index: 1;
    }

    .active{
        display: flex;
    }

    .clicker{
        width: 40%;
        height: 100%;

        @include responsive(smartphone-portrait){
            width: 100%;
        }

        @include responsive(smartphone-landscape){
            width: 100%;
        }
    }
</style>
