<template>
    <div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                Grafo
            </div>
        </div>
        <div ref="visualization"></div>
        <div class="panel panel-info">
            <div class="panel-body">
                <div class="pull-left">
                    Opções
                </div>
                <div class="pull-right">
                    <button class="btn btn-default" v-on:click="mudarHierarquia">
                        Mudar Hierarquia
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import vis from 'vis';


    const defaultOptions = {
        height : '500px',
        layout : {
            hierarchical : {
                direction : "LR",
                sortMethod : "directed"
            }
        },
        nodes : {
            shadow : true,
            borderWidth : 2
        }
    };

    const events = [
        'click',
        'select',
        'hold',
        'dragStart'
    ];

    export default {
        name : 'GrafoNetwork',
        props : {
//   Isso está comentado por causa do hack de mudar hierarquia...
//            options : {
//                type : Object,
//                default : () => (defaultOptions)
//            },
            data : {
                type : Object
            }
        },
        watch : {
            options :{
                deep : true,
                handler(o) {
                    this.network.setOptions(o);
                }
            },
            data : {
                deep : true,
                handler(d) {
                    const arrayNodesNormal = d.nodes;
                    const arrayEdgesNormal = d.edges;

                    const nodesVis = new vis.DataSet(arrayNodesNormal);
                    const edgesVis = new vis.DataSet(arrayEdgesNormal);

                    let x = {
                        nodes : nodesVis,
                        edges : edgesVis
                    }

                    this.network.setData(x);
                }
            }

        },
        data(){
            return {
                network : null,
                hierarquico : true
            }
        },
        methods : {
            destroy(){
                this.network.destroy();
            },
            redraw(){
                this.network.redraw();
            },
            setData(object){
                this.network.setData(object);
            },
            setOptions(options){
                this.network.setOptions(options);
            },
            setSize(width, height){
                this.network.setSize(width, height);
            },
            mudarHierarquia(){

                // isso é um hack bem merda... tive que fazer isso porque uma vez que o 
                // objeto está criado é impossível verificar qual o layout dele...

                this.hierarquico = !this.hierarquico;

                const options = {
                    height : '500px',
                    layout : {
                        hierarchical : {
                            direction : "LR",
                            sortMethod : "directed",
                            enabled : this.hierarquico
                        }
                    },
                    nodes : {
                        shadow : true,
                        borderWidth : 2
                    }
                };

                events.forEach(eventName => this.network.off(eventName, props => this.$emit(eventName, props)));

                const container = this.$refs.visualization;

                this.network = new vis.Network(container, this.data, options);

                events.forEach(eventName => this.network.on(eventName, props => this.$emit(eventName, props)));
            }
        },
        mounted(){
            const container = this.$refs.visualization;

            this.network = new vis.Network(container, this.data, defaultOptions);

            events.forEach(eventName => this.network.on(eventName, props => this.$emit(eventName, props)));
        },
        beforeDestroy(){
            events.forEach(eventName => this.network.off(eventName, props => this.$emit(eventName, props)));
        }

    }

</script>
