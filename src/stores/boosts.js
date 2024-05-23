import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useMonkeyStore } from '../stores/monkeys'
import { useCounterStore } from '../stores/counter'

import superMonkeyFanclub from '../assets/super-monkey-fanclub.png'
import overclock from '../assets/overclock.png'
import supplyDrop from '../assets/supply-drop.png'
import jungleBounty from '../assets/jungle-bounty.png'

export const useBoostStore = defineStore('boosts', () => {
    const monkeyStore = useMonkeyStore();
    const counter = useCounterStore();

    const boosts = ref([
        {name: 'Super Monkey Fanclub', image: superMonkeyFanclub, unlocked: false, cooldown: 30000, remainingCooldown: 30000, duration: 5000, remainingTime: 5000, active: false, onCooldown: false},
        {name: 'Overclock', image: overclock, unlocked: false, cooldown: 60000, remainingCooldown: 60000, duration: 7000, remainingTime: 7000, active: false, onCooldown: false},
        {name: 'Supply Drop', image: supplyDrop, unlocked: false, cooldown: 45000, remainingCooldown: 45000, onCooldown: false},
        {name: 'Jungle Bounty', image: jungleBounty, unlocked: false, cooldown: 150000, remainingCooldown: 150000, duration: 10000, remainingTime: 10000, active: false, onCooldown: false}]);

    function useBoost(boost){
        switch(boost.name){
            case 'Super Monkey Fanclub':
            case 'Overclock':
            case 'Jungle Bounty':
                boost.active = true;

                const remainingTime = setInterval(() => { 
                    boost.remainingTime -= 100; 
                }, 100);
                setInterval(remainingTime, 100);

                setTimeout(() => {
                    boost.active = false;
                    boost.onCooldown = true;
                    clearInterval(remainingTime);

                    const remainingCooldown = setInterval(() => {
                        boost.remainingCooldown -= 100;
                    }, 100);
                    setInterval(remainingCooldown, 100);

                    setTimeout(() => {
                        boost.onCooldown = false;
                        boost.remainingCooldown = boost.cooldown;
                        boost.remainingTime = boost.duration;
                        clearInterval(remainingCooldown);
                    }, boost.remainingCooldown);
                }, boost.remainingTime);
                break;
            case 'Supply Drop':
                counter.count += counter.popsPerSecond * 30;
                boost.onCooldown = true;

                const remainingCooldown = setInterval(() => {
                    boost.remainingCooldown -= 100;
                }, 100);
                setInterval(remainingCooldown, 100);

                setTimeout(() => {
                    boost.onCooldown = false;
                    boost.remainingCooldown = boost.cooldown;
                    clearInterval(remainingCooldown);
                }, boost.cooldown);
                break;
        }
    }

  return { boosts, useBoost }
}, {persist: { storage: localStorage }})
