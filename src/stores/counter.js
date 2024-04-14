import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const clickingPower = ref(1);
  const popsPerSecond = ref(0);

  function click() {
    count.value = count.value + clickingPower.value;
  }

  return { count, clickingPower, popsPerSecond, click }
}, /*{persist: { storage: localStorage }}*/)
