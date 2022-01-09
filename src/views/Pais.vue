<template>
  <h1>Pais: {{ nombre }}</h1>
</template>

<script>
export default {
    props: ['nombre'],
    setup(props) {
        console.log(props.nombre)        
    }
}
</script>

<style>

</style>