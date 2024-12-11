import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDirectionStore = defineStore('direction', () => {
  const directions = ref([])
  directions.value.push({value: "1", label: "First"})
  directions.value.push({value: "2", label: "Secondglfdsighsdfljghispfgijabihfosdgjkshdgoygioahfdsfvpisfd"})
  return { directions }
})
