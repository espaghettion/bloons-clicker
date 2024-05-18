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
        {name: 'Super Monkey Fanclub', image: superMonkeyFanclub, unlocked: false, cooldown: 30000, duration: 5000, onCooldown: false},
        {name: 'Overclock', image: overclock, unlocked: false, cooldown: 600000, duration: 7000, onCooldown: false},
        {name: 'Supply Drop', image: supplyDrop, unlocked: false, cooldown: 45000, onCooldown: false},
        {name: 'Jungle Bounty', image: jungleBounty, unlocked: false, cooldown: 150000, duration: 10000, onCooldown: false},
        {name: 'Ascension', image: ascension, unlocked: false, onCooldown: false},]);

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
