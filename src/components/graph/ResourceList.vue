<template>
    <div class="row">
        <div v-if="resources.length" class="list-wrapper-scroll">
            <app-resource-detail v-for="resource in resources" :recurso="resource" :key="resource"></app-resource-detail>
        </div>
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

<style scoped>

.list-wrapper-scroll {
    overflow-y : scroll;
    max-height : 500px;
}

</style>
