<template>
    <button type="button" v-on:click="selecionaJob" class="list-group-item">
        <p><b>{{ jobObj.nome }}</b></p>
        <h6>{{ jobObj.descricao }}</h6>
    </button>
</template>

<script>

    export default {
        props : ['jobObj'],
        methods : {
            selecionaJob(){
                const jobName = this.jobObj.nome;

                this.$store.dispatch('selectJob', jobName);
            }
        }

    }
</script>
