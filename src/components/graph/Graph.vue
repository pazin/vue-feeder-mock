<template>
    <div ref="visualization"></div>
</template>


<script>

    import vis from 'vis';


    const events = [
        'click',
        'select'
    ]

    export default {
        name : 'GrafoNetwork',
        props : {
            options : {
                type : Object
            },
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
                network : null
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
            }

        },
        mounted(){
            const container = this.$refs.visualization;

            this.network = new vis.Network(container, this.data, this.options);

            events.forEach(eventName => this.network.on(eventName, props => this.$emit(eventName, props)));
        },
        beforeDestroy(){
            events.forEach(eventName => this.network.off(eventName, props => this.$emit(eventName, props)));
        }

    }

</script>
