<template>
    <div class="row">
        <div v-if="getJobSelecionado" class="panel panel-default z-depth-1">
            <div class="panel-heading">
                <h2>{{ getJobSelecionado.nome }}</h2>
            </div>
            <div class="panel-body">
                <small>{{ getJobSelecionado.descricao }}</small>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        computed : {
            getJobSelecionado(){
                return this.$store.getters.jobSelecionado;
            }
        }
    }
</script>


<style scoped>

    .panel > .panel-heading {
        background-image: none;
        background-color: #222222;
        color: white;
    }

</style>
