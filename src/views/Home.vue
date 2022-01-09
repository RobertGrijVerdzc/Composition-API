<template>
  <div class="home">
    <h1 :style="{'color':  color }"> Contador  {{ contador }}</h1>
    <hr>
    <button @click="Aumentar" >Aumentar</button>
    <button @click="Disminuir" >Disminuir</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      contador:  0 
    }
  },
  methods: {
    Aumentar(){
      this.contador =this.contador+1
    },
    Disminuir(){
      this.contador = this.contador-1
    }
  },
  computed:{
    color(){
      if(this.contador <= 0){
        return 'red'
      } else {
        return 'blue'
      }
    }
  }
}
</script>
