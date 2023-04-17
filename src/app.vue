<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const accountStore = useAccountStore()
const test = accountStore.someGetter
console.log(test)
</script>
