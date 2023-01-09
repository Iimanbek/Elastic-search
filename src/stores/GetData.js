import { defineStore } from 'pinia'

export const useValueStore = defineStore('value', {
    state: () => ({
        value: ''
    })
})
  