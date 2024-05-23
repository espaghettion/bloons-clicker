import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBoostStore } from './boosts';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const clickingPower = ref(1);
  const popsPerSecond = ref(0);

  const supermonkeyFanclubClick = computed(() => clickingPower.value * 2);
  const overclockPopsPerSecond = computed(() => popsPerSecond.value * 7);

  const boostStore = useBoostStore();

  function click() {
    if(boostStore.boosts[0].active == true) count.value = count.value + supermonkeyFanclubClick.value;
    else count.value = count.value + clickingPower.value;
  }

  return { count, clickingPower, popsPerSecond, supermonkeyFanclubClick, overclockPopsPerSecond, click }
}, {persist: { storage: localStorage }})