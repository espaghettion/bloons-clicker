import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCounterStore } from '../stores/counter'

export const useSkinStore = defineStore('skins', () => {
    const counter = useCounterStore();

    const skins = ref([
        {name: 'Red Bloon', image: "src/assets/red-bloon.png", cost: 0, owned: true, using: true},
        {name: 'Blue Bloon', image: "src/assets/blue-bloon.png", cost: 50000, owned: false, using: false},
        {name: 'Green Bloon', image: "src/assets/green-bloon.png", cost: 2000000, owned: false, using: false},
        {name: 'Yellow Bloon', image: "src/assets/yellow-bloon.png", cost: 1000000000, owned: false, using: false},
        {name: 'Pink Bloon', image: "src/assets/pink-bloon.png", cost: 600000000000, owned: false, using: false},
        {name: 'Zebra Bloon', image: "src/assets/zebra-bloon.png", cost: 500000000000000, owned: false, using: false},
        {name: 'Rainbow Bloon', image: "src/assets/rainbow-bloon.png", cost: 30000000000000000, owned: false, using: false},
        {name: 'Ceramic Bloon', image: "src/assets/ceramic-bloon.png", cost: 2000000000000000000, owned: false, using: false},
        {name: 'Anton Bloon', image: "src/assets/anton-bloon.png", cost: 9999000000000000000000, owned: false, using: false},]);
    const currentSkin = ref("src/assets/red-bloon.png");

    
    function buySkin(skin){
        skin.owned = true;
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
}, /*{persist: { storage: localStorage }}*/)