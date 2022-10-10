import { defineStore } from 'pinia'

export const useTestStore = defineStore('counter', {
  state: () => ({ 
    showData: [], 
    url: 'https://api.tvmaze.com/search/shows?q='
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    storeShowData (data) {
      store.$state = { showData: data }
      console.log(showData)
    }
  },
})