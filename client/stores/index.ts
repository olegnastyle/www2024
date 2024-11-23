export const useCounterStore = defineStore('counter', {
    state: () => ({
      count: 0,
    }),
    actions: {
      increment() {
        this.count++
        this.saveToLocalStorage()
      },
      decrement() {
        this.count--
        this.saveToLocalStorage()
      },
      saveToLocalStorage() {
        localStorage.setItem('count', JSON.stringify(this.count))
      },
      loadFromLocalStorage() {
        const savedCount = localStorage.getItem('count')
        if (savedCount !== null) {
          this.count = JSON.parse(savedCount)
        }
      }
    },
})