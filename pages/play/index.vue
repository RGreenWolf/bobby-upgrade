<template>
  <div class="w-full h-full">
    <ClientOnly v-if="!pending">
      <Game :levels="levels"/>
    </ClientOnly>
  </div>
</template>
<script setup>
definePageMeta({
    "layout": "play"
})
const levels = ref({})
const { data, pending, error, refresh } = await useFetch("/api/levels/compagne", {})
levels.value = data.value
</script>