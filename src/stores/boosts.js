import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useMonkeyStore } from '../stores/monkeys'
import { useCounterStore } from '../stores/counter'

export const useBoostStore = defineStore('boosts', () => {
    const monkeyStore = useMonkeyStore();
    const counter = useCounterStore();

    const boosts = ref([
        {name: 'Super Monkey Fanclub', image: "src/assets/super-monkey-fanclub.png", unlocked: false, cooldown: 30000, duration: 5000, onCooldown: false},
        {name: 'Overclock', image: "src/assets/overclock.png", unlocked: false, cooldown: 600000, duration: 7000, onCooldown: false},
        {name: 'Supply Drop', image: "src/assets/supply-drop.png", unlocked: false, cooldown: 45000, onCooldown: false},
        {name: 'Jungle Bounty', image: "src/assets/jungle-bounty.png", unlocked: false, cooldown: 150000, duration: 10000, onCooldown: false},
        {name: 'Ascension', image: "src/assets/ascension.png", unlocked: false, onCooldown: false},]);

    function useBoost(boost){
        switch(boost.name){
            case 'Super Monkey Fanclub':
                boost.onCooldown = true;
                /*counter.clickingPower = counter.clickingPower * 2
                setTimeout(() => {
                    counter.clickingPower = counter.clickingPower / 2
                }, boost.duration);*/
                setTimeout(() => {
                    boost.onCooldown = false;
                }, boost.cooldown);
                break;
            case 'Overclock':
                break;
            case 'Supply Drop':
                break;
            case 'Jungle Bounty':
                break;
            case 'Ascension':
                break;
        }
    }

  return { boosts, useBoost }
}, /*{persist: { storage: localStorage }}*/)
