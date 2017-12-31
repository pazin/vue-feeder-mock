<template>
    <button type="button" v-on:click="selecionaJob" class="list-group-item">
        {{ jobObj.nome }}
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
