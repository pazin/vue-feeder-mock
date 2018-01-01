<template>
    <div class="row">
        <div class="col-xs-12 col-md-12 altura">
            <app-timeline :items="dadosEventos" :options="options"></app-timeline>
        </div>
    </div>
</template>


<script>
    import Timeline from './Timeline.vue';

    export default {
        data() {
            return {
                options : {}
            }
        },
        components : {
            appTimeline : Timeline
        },
        computed : {
            dadosEventos() {
                const eventos = this.$store.getters.eventos;

                let arrayEventos = eventos.map(e => {
                    return { id : e.id, content : e.content, start : e.start, end : e.end }
                });

                console.log(arrayEventos);

                return arrayEventos;
            }
        }
    }

</script>

<style>

    .altura {
        min-height : 800px;
    }


</style>
