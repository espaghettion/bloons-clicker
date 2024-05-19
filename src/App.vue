<script setup>
    import { ref, onMounted } from 'vue';
    import Clicker from './components/Clicker.vue'
    import Monkeys from './components/Monkeys.vue'
    import Skins from './components/Skins.vue'
    import { useCounterStore } from './stores/counter'

    const counter = useCounterStore();

    const skinShopActive = ref(false);
    const monkeyShopActive = ref(false);

    onMounted(() => {
    })
    
    setInterval(() => {
        counter.count = counter.count + counter.popsPerSecond;
    }, 1000);
</script>

<template>
    <main>
        <article :class="{ active: skinShopActive }" class="shop-area skins">
            <Skins></Skins>
        </article>
        <Clicker></Clicker>
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

<style scoped lang="scss">
@import "./mixins.scss";

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
</style>
