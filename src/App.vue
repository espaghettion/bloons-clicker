<script setup>
    import { onMounted } from 'vue';
    import Clicker from './components/Clicker.vue'
    import Monkeys from './components/Monkeys.vue'
    import Skins from './components/Skins.vue'
    import { useCounterStore } from './stores/counter'

    const counter = useCounterStore();

    onMounted(() => {
        // je to somehow ještě víc rozbité, než předtím, ale je marné ronit slzy nad malou komplikací, spravím ve 3. výstupu 🚑
            const leftButton = document.querySelector("#slide-button-left");
            const rightButton = document.querySelector("#slide-button-right");
            const skinShop = document.querySelector(".skins");
            const monkeyShop = document.querySelector(".monkeys");
            let isHidden = true;

            window.addEventListener("resize", function(){
                if(innerWidth > 768){
                    skinShop.style.display = "flex";
                    monkeyShop.style.display = "flex";
                }
                else{
                    skinShop.style.display = "none";
                    monkeyShop.style.display = "none";
                }
            })

            leftButton.addEventListener("click", function(){
                if(!isHidden){
                    skinShop.style.display = "none";
                    leftButton.style.top = "50%";
                    leftButton.style.zIndex = "0";
                    leftButton.innerHTML = "<button>S<br>K<br>I<br>N<br>S</button>";
                }
                else{
                    skinShop.style.display = "block";
                    leftButton.style.top = "0%";
                    leftButton.style.zIndex = "2";
                    leftButton.innerHTML = "<button>&lt;</button>";
                }
                isHidden = !isHidden;
            })

            rightButton.addEventListener("click", function(){
                if(!isHidden){
                    monkeyShop.style.display = "none";
                    rightButton.style.top = "50%";
                    rightButton.style.zIndex = "0";
                    rightButton.innerHTML = "<button>M<br>O<br>N<br>K<br>E<br>Y<br>S</button>";
                }
                else{
                    monkeyShop.style.display = "block";
                    rightButton.style.top = "0%";
                    rightButton.style.zIndex = "2";
                    rightButton.innerHTML = "<button>&gt;</button>";
                }
                isHidden = !isHidden;
            })
    })
    
        setInterval(() => {
            counter.count = counter.count + counter.popsPerSecond;
        }, 1000);
</script>

<template>
    <main>
        <article class="shop-area skins">
            <Skins></Skins>
        </article>
        <Clicker></Clicker>
        <article class="shop-area monkeys">
            <Monkeys></Monkeys>
        </article>
    </main>

    
</template>

<style scoped lang="scss">

</style>
