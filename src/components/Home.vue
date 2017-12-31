<template>
    <div>
        <div class="row">
            <app-indicador v-for="dado in dados" :dados="dado" :key="dado.topRight"></app-indicador>
        </div>
    </div>
</template>

<script>
    import Indicador from './indicador/Indicador.vue';

    export default {
        data() {
            return { 
                dados : [
                    { icon : "", topLeft : "Janeiro", bottomLeft : "15", topRight : "Quarta", bottomRight : "11:34" },
                    { icon : "get_app", topLeft : "", bottomLeft : "", topRight : "200", bottomRight : "Entregas" },
                    { icon : "cloud_download", topLeft : "", bottomLeft : "", topRight : "49", bottomRight : "Coletas" },
                    { icon : "slow_motion_video", topLeft : "", bottomLeft : "", topRight : "50", bottomRight : "Cálculos" }
                ]
            }
        },
        components : {
            appIndicador : Indicador
        }
    }
</script>

<style>
    .centered-text {
        text-align : center
    }

    .bloco-colorido { 
        background-color : #D9EDF7;
    }


</style>
