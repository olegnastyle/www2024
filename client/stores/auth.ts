export const useAuthStore = defineStore('auth', {
  state: () => ({
      isAuthenticated: false,
      toggleAuth: true,
  }),
  actions: {
      login() {
        this.isAuthenticated = true;
      },
      logout() {
        this.isAuthenticated = false;
      },
      toggleAuth() {
          // this.toggleAuth = !this.toggleAuth;
          console.log(this.toggleAuth);
      }
  },
})