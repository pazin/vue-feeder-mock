<template>
    <div>
        <div class="row">
            <div class="form">
                <div class="form-group">
                    <label>Pesquisar Jobs</label>
                    <input 
                        type="text" 
                        v-model="stringPesquisa" 
                        class="form-control" 
                        v-on:keyup="limparListaItems"
                        placeholder="Digite aqui o nome do Job...">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="list-group">
                <app-job-item v-for="job in jobsFiltrados()" :jobObj="job" :key="job.nome"></app-job-item>
            </div>
        </div>
    </div>
</template>

<script>

    import JobItem from './JobItem.vue';

    export default {
        data(){
            return {
                stringPesquisa : ''
            }
        },
        components : {
            appJobItem : JobItem
        },
        methods : {
            limparListaItems(){

                const jobSelecionado = this.$store.getters.jobSelecionado;

                if (jobSelecionado)
                    this.$store.dispatch('selectJob', '');
            },
            jobsFiltrados(){

                const arrayJobs = this.$store.getters.jobs;

                if (this.stringPesquisa){

                    const jobsFiltrados = arrayJobs
                        .filter(job => job.nome.includes(this.stringPesquisa) ||
                                       job.descricao.includes(this.stringPesquisa));


                    return jobsFiltrados;
                }
                else 
                    return arrayJobs;
            }
        },
        computed : {
            jobs() {
                return this.$store.getters.jobs;
            }
        }
    }


</script>


