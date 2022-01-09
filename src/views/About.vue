<template>
<Titulo :contador="contador" />
<hr>
  <h1
  :style="{'color': color}"
  >Contador {{ contador }}</h1>
  <button @click="aumentar" >Aumentar</button>
  <button @click="disminuir" >Disminuir</button>
  <hr>
  <btn :TextBtn="'Aumentar'" @accion="aumentar" />
  <hr>
  <input type="text" v-model="texto">
  <hr>
  <label for="">{{ texto }}</label>
</template>

<script>
import { computed, ref } from 'vue';
import Titulo from '../components/Titulo.vue'
import Btn from '../components/Btn.vue'
export default {
  components:{
    Titulo,
    Btn
  },
  setup() {
    const contador = ref(0);
    const texto = ref('');
    const aumentar = () => {
      contador.value ++
    }
    const disminuir = () => {
      contador.value --
    }

    const color = computed(() => {
      if(contador.value <= 0){
        return 'red'
      } else{
        return 'blue'
      }
    })
    return {contador, aumentar, disminuir, color, texto};
  }

}
</script>

<style>

</style>
