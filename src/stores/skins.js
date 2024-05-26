import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCounterStore } from '../stores/counter'

import redBloon from '../assets/red-bloon.png'
import blueBloon from '../assets/blue-bloon.png'
import greenBloon from '../assets/green-bloon.png'
import yellowBloon from '../assets/yellow-bloon.png'
import pinkBloon from '../assets/pink-bloon.png'
import zebraBloon from '../assets/zebra-bloon.png'
import rainbowBloon from '../assets/rainbow-bloon.png'
import ceramicBloon from '../assets/ceramic-bloon.png'

export const useSkinStore = defineStore('skins', () => {
    const counter = useCounterStore();

    const skins = ref([
        {name: 'Red Bloon', image: redBloon, cost: 0, owned: true, using: true},
        {name: 'Blue Bloon', image: blueBloon, cost: 50000, owned: false, using: false},
        {name: 'Green Bloon', image: greenBloon, cost: 2000000, owned: false, using: false},
        {name: 'Yellow Bloon', image: yellowBloon, cost: 1000000000, owned: false, using: false},
        {name: 'Pink Bloon', image: pinkBloon, cost: 600000000000, owned: false, using: false},
        {name: 'Zebra Bloon', image: zebraBloon, cost: 500000000000000, owned: false, using: false},
        {name: 'Rainbow Bloon', image: rainbowBloon, cost: 30000000000000000, owned: false, using: false},
        {name: 'Ceramic Bloon', image: ceramicBloon, cost: 2000000000000000000, owned: false, using: false}]);
    const currentSkin = ref(redBloon);

    
    function buySkin(skin){
        skin.owned = true;
        counter.count = counter.count - skin.cost;
    }

    function useSkin(skin){
        for(let i = 0; i < skins.value.length; i++){
            this.skins[i].using = false;
            if (this.skins[i].name == skin.name) {
                this.skins[i].using = true;
                this.currentSkin = this.skins[i].image;
            }
        }
    }

  return { skins, currentSkin, buySkin, useSkin }
}, {persist: { storage: localStorage }})