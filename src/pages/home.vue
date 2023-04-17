<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptatum adipisci, eveniet a sunt est qui quidem laudantium eum rerum. Et odio dignissimos consectetur omnis optio rerum neque eos incidunt.
  </div>
</template>

<script setup lang="ts">
const oneStore = useOneStore()

await oneStore.loadPhotos()
</script>
