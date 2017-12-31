<template>
    <div class="row">
        <div class="col-xs-6 col-sm-9 col-md-9 col-lg-9 altura">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    Grafo
                </div>
            </div>
            <app-graph :data="dadosGrafo" :options="optionsMock"></app-graph>
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
                optionsMock : {
                    height : '500px',
                    layout : {
                        hierarchical : {
                            direction : "LR",
                            sortMethod : "directed"
                        }
                    }

                }
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
        }

    }

</script>

<style>

    .altura {
        min-height : 800px;
    }

</style>
