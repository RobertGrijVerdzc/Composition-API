import { ref } from "vue";

export function UseContador(){
    const contador = ref(0);

    const aumentar = () => {
        contador.value ++
      }
      const disminuir = () => {
        contador.value --
      }

    return {contador, aumentar, disminuir}
}