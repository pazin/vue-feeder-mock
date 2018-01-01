<template>
    <div class="row">
        <div class="col-xs-6 col-sm-9 col-md-9 col-lg-9 altura">
            <app-graph :data="dadosGrafo" v-on:click="selecionaJob" v-on:dragStart="selecionaJob"></app-graph>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
            <app-job-detail></app-job-detail>
            <app-resource-list></app-resource-list>
        </div>
        
    </div>
</template>


<script>
    import JobDetail from './JobDetail.vue';
    import ResourceList from './ResourceList.vue';
    import Graph from './Graph.vue';

    export default {
        data() {
            return {
            }
        },
        components : {
            appJobDetail : JobDetail,
            appResourceList : ResourceList,
            appGraph : Graph
        },
        computed : {
            dadosGrafo() {
                const jobsFull = this.$store.getters.jobs;

                let nodes = jobsFull.map(job => {
                    return { id: job.id, label: job.nome, shape : job.shape }
                });

                const arestas = this.$store.getters.arestas;

                console.log(arestas);

                let result = {
                    nodes : nodes,
                    edges : arestas
                }

                return result;
            }
        },
        methods : {
            selecionaJob(props){

                const nodesSelecionados = props.nodes;

                let jobId = null;

                if (nodesSelecionados){
                    jobId = nodesSelecionados[0];

                    this.$store.dispatch('selectJobById', jobId);
                }
            }
        }
    }

</script>

<style>

    .altura {
        min-height : 800px;
    }


</style>
