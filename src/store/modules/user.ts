import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {},
  actions:{
    updateCount(val) {
        this.count += val;
    }
  }
})

export default useUserStore