<template>
    <div class="row">
        teste
        <app-resource-detail v-for="resource in resources" :recurso="resource" :key="resource"></app-resource-detail>
    </div>
</template>

<script>

    import ResourceDetail from './ResourceDetail.vue';

    export default {
        components : {
            appResourceDetail : ResourceDetail
        },
        computed : {
            resources(){
                const jobSelecionado = this.$store.getters.jobSelecionado;
                if (jobSelecionado)
                    return jobSelecionado.recursos;
                else
                    return [];
            }
        }
    }

</script>
