<script>
  export default {
    name: 'Home',
    inheritAttrs: false,
  }
</script>
<script setup>
  import { useTestStore } from '~/stores'
  import { ref, onMounted } from "vue"

  // const store  = useTestStore()

  definePageMeta({
    layout: 'default',
    name: 'home'
  })

  const shows = ref([])
  const search = ref('')
  const url = 'https://api.tvmaze.com/search/shows?q='

  const getData = async (search) => {
    const getRawData = await fetch(url + search.value) 
    const json = await getRawData.json()
    shows.value = json
    store.storeShowData(shows.value)
  }

  const submit = async () => {
    if (!search.value) return
    await getData(search)
  }

</script>

<template>
<div>
  <div class="flex justify-center items-center">
    <nuxt-link to="/search" class="mr-3">Go To Search</nuxt-link>
    <form @submit.prevent="submit">
      <input type="text" v-model="search" class="border-2">
      <button class="bg-yellow-200 p-1">Search</button>
    </form>
  </div>

  <div class="grid grid-cols-6 gap-4">
    <div 
      v-for="(show) in shows" :key="show.show.id" 
      class="drop-shadow-sl border-solid"
    >
      <nuxt-link :to="`/search/${show.show.id}`" class="text-center">{{ show.show.name }}</nuxt-link>
      <img :src="show.show.image?.medium" alt="">
    </div>
  </div>
  
</div>
</template>


<style lang="scss"> 
</style>