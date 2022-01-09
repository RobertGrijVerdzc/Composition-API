<template>
  <!--button @click="$emit('accion')">{{ TextBtn }}</button-->
  <button @click="accionhijo">{{ TextBtn }}</button>
</template>

<script>
export default {
    props: ['TextBtn'],
    setup(props, context) {
        const accionhijo = () => {
            context.emit('accion')
        }
        return {accionhijo}
    }
}
</script>

<style>

</style>