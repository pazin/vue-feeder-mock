<template>
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 altura">
            <app-job-list></app-job-list>
        </div>

        <div class="col-xs-6 col-sm-8 altura">
            <app-resource-grid></app-resource-grid>
        </div>
    </div>
</template>


<script>
    import JobList from './JobList.vue';
    import ResourceGrid from './ResourceGrid.vue';

    export default {
        components : {
            appJobList : JobList,
            appResourceGrid : ResourceGrid
        }
    }

</script>


<style>

    .altura {
        min-height : 800px;
    }

</style>
