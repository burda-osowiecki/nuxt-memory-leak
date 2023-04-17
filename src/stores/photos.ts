export const usePhotosStore = defineStore('photos', {
  state: (): { loadedPhotos: any[] } => ({
    loadedPhotos: [],
  }),

  getters: {
    getPhotoById:
      (state) =>
      (id: number): any | null => {
        const photo = state.loadedPhotos.find((photo) => photo.id === id)
        return photo || null
      },

    getAppConfigPhotoId(): any | null {
      const appConfig = useAppConfig()
      return this.getPhotoById(appConfig.photoId)
    },
   },

  actions: {
    async loadMorePhotos({ id }: { id: number }): Promise<void> {
      const runtimeConfig = useRuntimeConfig()
      console.log(runtimeConfig)
      console.log(id)

      const photos = await useApiFetch('/photos')

      this.loadedPhotos.push(photos)
    },
  },
})
