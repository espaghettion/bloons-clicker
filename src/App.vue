<script>
    export default{
        data() {
            return {

            }
        },

        mounted(){
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
                    leftButton.innerHTML = "<button>&gt;</button>";
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
                    rightButton.innerHTML = "<button>&lt;</button>";
                }
                else{
                    monkeyShop.style.display = "block";
                    rightButton.style.top = "0%";
                    rightButton.style.zIndex = "2";
                    rightButton.innerHTML = "<button>&gt;</button>";
                }
                isHidden = !isHidden;
            })


        }
    }
</script>

<template>
    <main>
        <article class="shop-area skins">
            <section class="shop-name">
                <p class="text">Skins</p>
            </section>
            <section class="shop">
                <section class="upgrades">
                    <article>
                        <img src="./assets/red-bloon.png" alt="">
                    </article>
                    <article>
                        <p>Red Bloon</p>
                    </article>
                    <article>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/blue-bloon.png" alt="">
                    </article>
                    <article>
                        <p>Blue Bloon</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/green-bloon.png" alt="">
                    </article>
                    <article>
                        <p>Green Bloon</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/yellow-bloon.png" alt="">
                    </article>
                    <article>
                        <p>Yellow Bloon</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/pink-bloon.png" alt="">
                    </article>
                    <article>
                        <p>Pink Bloon</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/zebra-bloon.png" alt="">
                    </article>
                    <article>
                        <p>Zebra Bloon</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/rainbow-bloon.png" alt="">
                    </article>
                    <article>
                        <p>Rainbow Bloon</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/ceramic-bloon.png" alt="">
                    </article>
                    <article>
                        <p>Ceramic Bloon</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <p>???</p>
                    </article>
                    <article>
                        <p>Anton Bloon</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
            </section>
        </article>
        <article id="clicker">
            <section>
                <p class="text">0 Pops</p>
                <p class="pps">Pops per second: 0</p>
            </section>
            <section>
                <button id="bloon-button"><img src="./assets/red-bloon.png" alt="balloon"></button>
            </section>
            <section id="boosts">
                <img class="boost" src="./assets/super-monkey-fanclub.png" alt="">
                <img class="boost" src="./assets/overclock.png" alt="">
                <img class="boost" src="./assets/supply-drop.png" alt="">
                <img class="boost" src="./assets/jungle-bounty.png" alt="">
                <img class="boost" src="./assets/ascension.png" alt="">
            </section>
            <section id="slide-button-left">
                <button>&gt;</button>
            </section>
            <section id="slide-button-right">
                <button>&lt;</button>
            </section>
        </article>
        <article class="shop-area monkeys">
            <section class="shop-name">
                <p class="text">Monkeys</p>
            </section>
            <section class="shop">
                <section class="upgrades">
                    <article>
                        <img src="./assets/dart-monkey.png" alt="">
                    </article>
                    <article>
                        <p>Dart Monkey</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/tack-shooter.png" alt="">
                    </article>
                    <article>
                        <p>Tack Shooter</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/boomerang-monkey.png" alt="">
                    </article>
                    <article>
                        <p>Boomerang Monkey</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/glue-gunner.png" alt="">
                    </article>
                    <article>
                        <p>Glue Gunner</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/bomb-shooter.png" alt="">
                    </article>
                    <article>
                        <p>Bomb Shooter</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/ice-monkey.png" alt="">
                    </article>
                    <article>
                        <p>Ice Monkey</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/engineer-monkey.png" alt="">
                    </article>
                    <article>
                        <p>Engineer Monkey</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/monkey-buccaneer.png" alt="">
                    </article>
                    <article>
                        <p>Monkey Buccaneer</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/monkey-sub.png" alt="">
                    </article>
                    <article>
                        <p>Monkey Sub</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/monkey-ace.png" alt="">
                    </article>
                    <article>
                        <p>Monkey Ace</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/sniper-monkey.png" alt="">
                    </article>
                    <article>
                        <p>Sniper Monkey</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/druid.png" alt="">
                    </article>
                    <article>
                        <p>Druid</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/ninja-monkey.png" alt="">
                    </article>
                    <article>
                        <p>Ninja Monkey</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/wizard-monkey.png" alt="">
                    </article>
                    <article>
                        <p>Wizard Monkey</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
                <section class="upgrades">
                    <article>
                        <img src="./assets/super-monkey.png" alt="">
                    </article>
                    <article>
                        <p>Super Monkey</p>
                        <p>LVL 0</p>
                    </article>
                    <article>
                        <button>Buy</button>
                        <p class="cost">0 <img src="./assets/pop.png" alt=""></p>
                    </article>
                </section>
            </section>
        </article>
    </main>


</template>

<style scoped>
</style>
