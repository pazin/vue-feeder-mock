<template>
    <div class="row">
        <div class="col-xs-12 col-md-12 altura list-wrapper-scroll">
            <app-timeline-item v-for="item in items" :key="item"></app-timeline-item>
        </div>
    </div>
</template>


<script>

    import TimelineItem from './TimelineItem.vue';

    export default {
        data() {
            return {
                items : [1,2,3,5,6,67,7,23,4,346,63,6757]
            }
        },
        components : {
            appTimelineItem  : TimelineItem
        },
        computed : {

        }
    }

</script>

<style>

    .altura {
        min-height : 600px;
    }


    .list-wrapper-scroll {
        overflow-y : scroll;
        max-height : 600px;
    }
    
</style>
