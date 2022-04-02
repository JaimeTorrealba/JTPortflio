<template>
    <canvas class="webgl"></canvas>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

import Experience from '../utils/threeJs/home/Experience'
let experience
export default {
    setup() {
        //TODO ver porque no recarga threeJS con SPA router
        //TODO agregar debuggers a dat.gui y axeHelpers
        //TODO destruir los eventListener
        //TODO Agregar y Crear logo (favicon)

        onMounted(() => {
            experience = new Experience(document.querySelector('canvas.webgl'))
        })
        onUnmounted(() => {
            experience.destroy()
        })
    },
}
</script>

<style>
.webgl {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    z-index: 10;
}
body {
    box-shadow: transparent;
}
</style>
