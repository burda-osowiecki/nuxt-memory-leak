export const useAccountStore = defineStore('account', {
  state: () => ({
    test: ''
  }),

  getters: {
    someGetter() {
      return []
    },
  },

  actions: {
    getAuthToken(): string | null {
      return localStorage.getItem('token')
    },

    async someFunction() {
      const appPath = useAppPath()
      console.log(appPath)
    },

    async unusedFunction(): Promise<void> {
      await useAccountFetch('/photos')
    },
  },
})
