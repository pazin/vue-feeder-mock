<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                Linha do Tempo
            </div>
        </div>
        <div ref="visualizationTimeline"></div>
        <div class="panel panel-primary">
            <div class="panel-body">
                <div class="pull-left">
                </div>
                <div class="pull-right">
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import vis from 'vis';


    const events = [
        'click',
        'select',
    ];

    export default {
        name : 'HistoricoTimeline',
        props : {
            options : {
                type : Object,
            },
            items : {
                type : Array,
                default : () => ([])
            }
        },
        watch : {
            options :{
                deep : true,
                handler(o) {
                    this.timeline.setOptions(o);
                }
            }

        },
        data(){
            return {
                timeline : null
            }
        },
        methods : {
            destroy(){
                this.timeline.destroy();
            },
            redraw(){
                this.timeline.redraw();
            },
            setItems(object){
                this.timeline.setItems(object);
            },
            setOptions(options){
                this.timeline.setOptions(options);
            },
            setSize(width, height){
                this.timeline.setSize(width, height);
            }
        },
        mounted(){
            const container = this.$refs.visualizationTimeline;

            var itemsDataSet = new vis.DataSet();
            itemsDataSet.add(this.items);

            this.timeline = new vis.Timeline(container, itemsDataSet, this.options);

            events.forEach(eventName => this.timeline.on(eventName, props => this.$emit(eventName, props)));
        },
        beforeDestroy(){
            events.forEach(eventName => this.timeline.off(eventName, props => this.$emit(eventName, props)));
        }

    }

</script>
