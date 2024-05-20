import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useMonkeyStore } from '../stores/monkeys'
import { useCounterStore } from '../stores/counter'

import superMonkeyFanclub from '../assets/super-monkey-fanclub.png'
import overclock from '../assets/overclock.png'
import supplyDrop from '../assets/supply-drop.png'
import jungleBounty from '../assets/jungle-bounty.png'
import ascension from '../assets/ascension.png'

export const useBoostStore = defineStore('boosts', () => {
    const monkeyStore = useMonkeyStore();
    const counter = useCounterStore();

    const boosts = ref([
        {name: 'Super Monkey Fanclub', image: superMonkeyFanclub, unlocked: false, cooldown: 30000, duration: 5000, active: false, onCooldown: false},
        {name: 'Overclock', image: overclock, unlocked: false, cooldown: 600000, duration: 7000, active: false, onCooldown: false},
        {name: 'Supply Drop', image: supplyDrop, unlocked: false, cooldown: 45000, onCooldown: false},
        {name: 'Jungle Bounty', image: jungleBounty, unlocked: false, cooldown: 150000, duration: 10000, active: false, onCooldown: false},
        /*{name: 'Ascension', image: ascension, unlocked: false, onCooldown: false},*/]);

    function useBoost(boost){
        switch(boost.name){
            case 'Super Monkey Fanclub':
            case 'Overclock':
            case 'Jungle Bounty':
                boost.active = true;
                setTimeout(() => {
                    boost.active = false;
                    boost.onCooldown = true;
                }, boost.duration);
                setTimeout(() => {
                    boost.onCooldown = false;
                }, boost.cooldown);
                break;
            case 'Supply Drop':
                counter.count += counter.popsPerSecond * 30;
                boost.onCooldown = true;
                setTimeout(() => {
                    boost.onCooldown = false;
                }, boost.cooldown);
                break;
            /*case 'Ascension':
                counter.count = 0;
                counter.clickingPower = 1;
                counter.popsPerSecond = 0;
                for(let i = 0; i < monkeyStore.monkeys.length; i++){
                    monkeyStore.monkeys[i].upgrade *= counter.popsPerSecond / 1000000000
                    monkeyStore.monkeys[i].level = 0;
                }
                for(let i = 0; i < boosts.length; i++){
                    boosts[i].unlocked = false;
                }
                break;*/
        }
    }

  return { boosts, useBoost }
}, {persist: { storage: localStorage }})
