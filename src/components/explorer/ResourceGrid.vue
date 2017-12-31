<template>
    <div class="row">
        <app-resource-item v-for="resource in resources" :recurso="resource" :key="resource"></app-resource-item>
    </div>
</template>

<script>

    import ResourceItem from './ResourceItem.vue';

    export default {
        components : {
            appResourceItem : ResourceItem
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
