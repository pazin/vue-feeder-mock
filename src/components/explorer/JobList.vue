<template>
    <div>
        <div class="row">
            <div class="form">
                <div class="form-group">
                    <label>Pesquisar Jobs</label>
                    <input type="text" class="form-control" placeholder="Digite aqui o nome do Job...">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="list-group">
                <app-job-item v-for="job in jobs" :nomeJob="job"></app-job-item>
            </div>
        </div>

    </div>
</template>

<script>

    import JobItem from './JobItem.vue';

    export default {
        data(){ 
            return {
                jobs : [
                    'job 1',
                    'job 2',
                    'job 3',
                    'job 4'
                ]

            }
        },
        components : {
            appJobItem : JobItem
        }
    }


</script>


