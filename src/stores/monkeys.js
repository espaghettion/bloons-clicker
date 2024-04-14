import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { useBoostStore } from '../stores/boosts'

export const useMonkeyStore = defineStore('monkeys', () => {
    const counter = useCounterStore();
    const boostStore = useBoostStore();

    const monkeys = ref([
        {name: 'Dart Monkey', level: 0, image: "src/assets/dart-monkey.png", cost: 10, upgrade: 1},
        {name: 'Tack Shooter', level: 0, image: "src/assets/tack-shooter.png", cost: 150, upgrade: 1},
        {name: 'Boomerang Monkey', level: 0, image: "src/assets/boomerang-monkey.png", cost: 2000, upgrade: 10},
        {name: 'Glue Gunner', level: 0, image: "src/assets/glue-gunner.png", cost: 10000, upgrade: 40},
        {name: 'Bomb Shooter', level: 0, image: "src/assets/bomb-shooter.png", cost: 75000, upgrade: 200},
        {name: 'Ice Monkey', level: 0, image: "src/assets/ice-monkey.png", cost: 290000, upgrade: 500},
        {name: 'Engineer Monkey', level: 0, image: "src/assets/engineer-monkey.png", cost: 1000000, upgrade: 1500},
        {name: 'Monkey Buccaneer', level: 0, image: "src/assets/monkey-buccaneer.png", cost: 6000000, upgrade: 6000},
        {name: 'Monkey Sub', level: 0, image: "src/assets/monkey-sub.png", cost: 30000000, upgrade: 25000},
        {name: 'Monkey Ace', level: 0, image: "src/assets/monkey-ace.png", cost: 150000000, upgrade: 100000},
        {name: 'Sniper Monkey', level: 0, image: "src/assets/sniper-monkey.png", cost: 800000000, upgrade: 500000},
        {name: 'Druid', level: 0, image: "src/assets/druid.png", cost: 5000000000, upgrade: 3000000},
        {name: 'Ninja Monkey', level: 0, image: "src/assets/ninja-monkey.png", cost: 31000000000, upgrade: 15000000},
        {name: 'Wizard Monkey', level: 0, image: "src/assets/wizard-monkey.png", cost: 180000000000, upgrade: 80000000},
        {name: 'Super Monkey', level: 0, image: "src/assets/super-monkey.png", cost: 1000000000000, upgrade: 400000000},]);

    function upgrade(monkey){
        monkey.level++;
        counter.count = counter.count - monkey.cost;
        monkey.cost = Math.round(monkey.cost * 1.3);
        switch(monkey.name){
            case 'Dart Monkey':
                if(monkey.level >= 20) boostStore.boosts[0].unlocked = true;
                counter.clickingPower = counter.clickingPower + monkey.upgrade;
                break;
            case 'Engineer Monkey':
                if(monkey.level >= 20) boostStore.boosts[1].unlocked = true;
                counter.popsPerSecond = counter.popsPerSecond + monkey.upgrade;
                break;
            case 'Sniper Monkey':
                if(monkey.level >= 20) boostStore.boosts[2].unlocked = true;
                counter.popsPerSecond = counter.popsPerSecond + monkey.upgrade;
                break;
            case 'Druid':
                if(monkey.level >= 20) boostStore.boosts[3].unlocked = true;
                counter.popsPerSecond = counter.popsPerSecond + monkey.upgrade;
                break;
            case 'Super Monkey':
                if(monkey.level >= 10) boostStore.boosts[4].unlocked = true;
                counter.popsPerSecond = counter.popsPerSecond + monkey.upgrade;
                break;
            default:
                counter.popsPerSecond = counter.popsPerSecond + monkey.upgrade;
                break;
        }
    }

  return { monkeys, upgrade }
}, /*{persist: { storage: localStorage }}*/)
