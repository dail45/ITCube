import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref([]);
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
