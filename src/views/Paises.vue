<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
      <router-link :to="`/paises/${pais.name.common}`">{{pais.name.common}}</router-link>
  </p>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup() {
        const arrayData = ref([])

        onMounted(async() => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all')
                arrayData.value = await res.json()
            } catch (error) {
                console.log(error)
            }
        })

        /*const fetchData = async() => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all')
                arrayData.value = await res.json()
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()*/

        return{arrayData}
    }
}
</script>

<style>

</style>