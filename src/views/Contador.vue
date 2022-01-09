<template>
  <h1>Contador  {{ contador }}</h1>
  <hr>
  <Btn :TextBtn="'Aumentar'"  @accion="aumentar"/>
  <Btn :TextBtn="'Disminuir'"  @accion="disminuir"/>
</template>

<script>
import {UseContador} from '../Hooks/UseContador'
import Btn from '../components/Btn.vue'
export default {
    components:{
        Btn
    },
    setup() {
        return {...UseContador()}
    }
}
</script>

<style>

</style>