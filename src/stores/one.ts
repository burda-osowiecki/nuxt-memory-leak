export const useOneStore = defineStore('one', {
  state: () => ({
    photos: []
  }),

  getters: {},

  actions: {
    async loadPhotos(): Promise<void> {
      const appConfig = useAppConfig()
      const runtimeConfig = useRuntimeConfig()

      console.log(appConfig)
      console.log(runtimeConfig)

      const photos = await useApiFetch<any>('/photos')

      this.photos = photos
    },
  },
})
