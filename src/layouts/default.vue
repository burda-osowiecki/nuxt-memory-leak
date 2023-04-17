<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const photosStore = usePhotosStore()

await photosStore.loadMorePhotos({ id: appConfig.photoId })
</script>
