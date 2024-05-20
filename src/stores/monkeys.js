import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { useBoostStore } from '../stores/boosts'

import dartMonkey from '../assets/dart-monkey.png'
import tackShooter from '../assets/tack-shooter.png'
import boomerangMonkey from '../assets/boomerang-monkey.png'
import glueGunner from '../assets/glue-gunner.png'
import bombShooter from '../assets/bomb-shooter.png'
import iceMonkey from '../assets/ice-monkey.png'
import engineerMonkey from '../assets/engineer-monkey.png'
import monkeyBuccaneer from '../assets/monkey-buccaneer.png'
import monkeySub from '../assets/monkey-sub.png'
import monkeyAce from '../assets/monkey-ace.png'
import sniperMonkey from '../assets/sniper-monkey.png'
import druid from '../assets/druid.png'
import ninjaMonkey from '../assets/ninja-monkey.png'
import wizardMonkey from '../assets/wizard-monkey.png'
import superMonkey from '../assets/super-monkey.png'

export const useMonkeyStore = defineStore('monkeys', () => {
    const counter = useCounterStore();
    const boostStore = useBoostStore();

    const monkeys = ref([
        {name: 'Dart Monkey', level: 0, image: dartMonkey, cost: 10, upgrade: 1},
        {name: 'Tack Shooter', level: 0, image: tackShooter, cost: 150, upgrade: 1},
        {name: 'Boomerang Monkey', level: 0, image: boomerangMonkey, cost: 2000, upgrade: 10},
        {name: 'Glue Gunner', level: 0, image: glueGunner, cost: 10000, upgrade: 40},
        {name: 'Bomb Shooter', level: 0, image: bombShooter, cost: 75000, upgrade: 200},
        {name: 'Ice Monkey', level: 0, image: iceMonkey, cost: 290000, upgrade: 500},
        {name: 'Engineer Monkey', level: 0, image: engineerMonkey, cost: 1000000, upgrade: 1500},
        {name: 'Monkey Buccaneer', level: 0, image: monkeyBuccaneer, cost: 6000000, upgrade: 6000},
        {name: 'Monkey Sub', level: 0, image: monkeySub, cost: 30000000, upgrade: 25000},
        {name: 'Monkey Ace', level: 0, image: monkeyAce, cost: 150000000, upgrade: 100000},
        {name: 'Sniper Monkey', level: 0, image: sniperMonkey, cost: 800000000, upgrade: 500000},
        {name: 'Druid', level: 0, image: druid, cost: 5000000000, upgrade: 3000000},
        {name: 'Ninja Monkey', level: 0, image: ninjaMonkey, cost: 31000000000, upgrade: 15000000},
        {name: 'Wizard Monkey', level: 0, image: wizardMonkey, cost: 180000000000, upgrade: 80000000},
        {name: 'Super Monkey', level: 0, image: superMonkey, cost: 1000000000000, upgrade: 400000000},]);

    function upgrade(monkey){
        monkey.level++;
        let cost = monkey.cost;
        if(boostStore.boosts[3].active) cost *= 0.9;
        counter.count = counter.count - cost;
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
            /*case 'Super Monkey':
                if(monkey.level >= 10) boostStore.boosts[4].unlocked = true;
                counter.popsPerSecond = counter.popsPerSecond + monkey.upgrade;
                break;*/
            default:
                counter.popsPerSecond = counter.popsPerSecond + monkey.upgrade;
                break;
        }
    }

  return { monkeys, upgrade }
}, {persist: { storage: localStorage }})
