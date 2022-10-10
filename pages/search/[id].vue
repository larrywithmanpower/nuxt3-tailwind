<script setup>
  const route = useRoute()
</script>

<template>
  <div>
    <h1>{{ route.params.id }}</h1>
    <nuxt-link to="/">Back to Home</nuxt-link>
  </div>
</template>